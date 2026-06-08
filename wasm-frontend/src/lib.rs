use serde::Deserialize;
use serde_json::Value;
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{
    CanvasRenderingContext2d, Element, Event, HtmlCanvasElement, HtmlElement, HtmlOptionElement,
    HtmlSelectElement, HtmlVideoElement, PointerEvent, Window,
};

#[derive(Clone, Default, Deserialize)]
struct Language {
    name: String,
    #[serde(default)]
    uses: String,
}

#[derive(Clone)]
struct Pointer {
    x: f64,
    y: f64,
}

#[wasm_bindgen]
pub fn render_app(root: Element, payload: JsValue) -> Result<(), JsValue> {
    let payload: Value = serde_wasm_bindgen::from_value(payload)
        .map_err(|error| JsValue::from_str(&format!("Invalid WASM payload: {error}")))?;

    let page = str_at(&payload, &["page"]);
    let mut html = String::new();

    if page == "gate" {
        render_gate(&mut html, &payload);
    } else {
        render_header(&mut html, &payload);
        match page.as_str() {
            "casting" => render_casting(&mut html, &payload),
            "stage" => render_stage(&mut html, &payload),
            "work" => render_work(&mut html, &payload),
            _ => render_home(&mut html, &payload),
        }
        render_footer(&mut html, &payload);
    }

    root.set_inner_html(&html);

    if page == "gate" {
        redirect_gate(&payload);
    } else {
        wire_locale_switchers(&root);
        wire_hero_videos(&root);
        wire_language_canvases(&root);
        wire_stage_canvases(&root);
        wire_testimonial_canvases(&root);
    }

    Ok(())
}

fn render_gate(html: &mut String, payload: &Value) {
    html.push_str("<main class=\"language-gate\"><h1>");
    text(html, &str_at(payload, &["profile", "name"]));
    html.push_str("</h1><p>Choose a language</p><div>");
    for item in array_at(payload, &["gateOptions"]) {
        html.push_str("<a href=\"");
        attr(html, &field_str(item, "href"));
        html.push_str("\">");
        text(html, &field_str(item, "name"));
        html.push_str("</a>");
    }
    html.push_str("</div></main>");
}

fn render_header(html: &mut String, payload: &Value) {
    let profile_name = str_at(payload, &["profile", "name"]);
    html.push_str("<header class=\"site-header\"><a class=\"brand\" href=\"");
    attr(html, &str_at(payload, &["paths", "home"]));
    html.push_str("\" aria-label=\"");
    attr(html, &format!("{profile_name} home"));
    html.push_str("\"><img src=\"");
    attr(html, &str_at(payload, &["profile", "headshot"]));
    html.push_str("\" alt=\"");
    attr(html, &format!("Portrait of {profile_name}"));
    html.push_str("\" width=\"40\" height=\"40\" /><span>");
    text(html, &profile_name);
    html.push_str("</span></a><div class=\"header-actions\"><nav aria-label=\"Primary navigation\">");

    for item in array_at(payload, &["navItems"]) {
        html.push_str("<a href=\"");
        attr(html, &field_str(item, "href"));
        html.push_str("\">");
        text(html, &field_str(item, "label"));
        html.push_str("</a>");
    }

    html.push_str("</nav><label class=\"locale-select\"><span class=\"sr-only\">");
    text(html, &str_at(payload, &["t", "selectLanguage"]));
    html.push_str("</span><select data-locale-switcher aria-label=\"");
    attr(html, &str_at(payload, &["t", "selectLanguage"]));
    html.push_str("\">");

    for option in array_at(payload, &["localeOptions"]) {
        html.push_str("<option value=\"");
        attr(html, &field_str(option, "href"));
        html.push_str("\" data-locale=\"");
        attr(html, &field_str(option, "code"));
        html.push('"');
        if field_bool(option, "selected") {
            html.push_str(" selected");
        }
        html.push('>');
        text(html, &field_str(option, "name"));
        html.push_str("</option>");
    }

    html.push_str("</select></label></div></header>");
}

fn render_footer(html: &mut String, payload: &Value) {
    html.push_str("<footer class=\"site-footer\"><div><strong>");
    text(html, &str_at(payload, &["profile", "name"]));
    html.push_str("</strong><p>");
    text(html, &str_at(payload, &["t", "hero", "headline"]));
    html.push_str("</p></div><div class=\"footer-links\"><a href=\"mailto:");
    attr(html, &str_at(payload, &["profile", "email"]));
    html.push_str("\">");
    text(html, &str_at(payload, &["profile", "email"]));
    html.push_str("</a><a href=\"");
    attr(html, &str_at(payload, &["profile", "instagram"]));
    html.push_str("\" target=\"_blank\" rel=\"noreferrer\">Instagram</a></div></footer>");
}

fn render_home(html: &mut String, payload: &Value) {
    let theme = str_at(payload, &["visual", "theme"]);
    let profile_name = str_at(payload, &["profile", "name"]);

    html.push_str("<main><section class=\"hero has-video hero-");
    attr(html, &theme);
    html.push_str("\"><div class=\"hero-video-backdrop\" data-backdrop-label=\"");
    attr(html, &str_at(payload, &["heroBackdrop", "label"]));
    html.push_str("\" aria-hidden=\"true\"><video data-hero-video autoplay muted loop playsinline preload=\"auto\"><source src=\"");
    attr(html, &str_at(payload, &["heroBackdrop", "src"]));
    html.push_str("\" type=\"video/mp4\" /></video></div><div class=\"hero-copy\"><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["t", "hero", "eyebrow"]));
    html.push_str("</p><h1>");
    text(html, &profile_name);
    html.push_str("</h1><p class=\"hero-line\">");
    text(html, &str_at(payload, &["t", "hero", "headline"]));
    html.push_str("</p><p class=\"hero-text\">");
    text(html, &str_at(payload, &["t", "hero", "subheadline"]));
    html.push_str("</p><div class=\"hero-actions\" aria-label=\"Primary actions\">");
    button(html, "primary", "#acting", &str_at(payload, &["t", "hero", "showreel"]), "");
    button(html, "secondary", "#voice", &str_at(payload, &["t", "hero", "voice"]), "");
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "casting"]),
        &str_at(payload, &["t", "hero", "casting"]),
        "",
    );
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "cv"]),
        &str_at(payload, &["t", "hero", "cv"]),
        " download",
    );
    html.push_str("</div></div><aside class=\"hero-card\" aria-label=\"Profile summary\"><img src=\"");
    attr(html, &str_at(payload, &["profile", "headshot"]));
    html.push_str("\" alt=\"");
    attr(html, &format!("Portrait of {profile_name}"));
    html.push_str("\" width=\"1080\" height=\"1080\" /><div><p class=\"card-kicker\">");
    text(html, &str_at(payload, &["t", "hero", "cardLabel"]));
    html.push_str("</p><h2>");
    text(html, &str_at(payload, &["t", "hero", "cardTitle"]));
    html.push_str("</h2><p>");
    text(html, &str_at(payload, &["profile", "education"]));
    html.push_str("</p></div></aside></section>");

    html.push_str("<section class=\"quick-strip\" aria-label=\"Key profile points\">");
    for item in array_at(payload, &["t", "quick"]) {
        html.push_str("<span>");
        text(html, &value_str(item));
        html.push_str("</span>");
    }
    html.push_str("</section>");

    render_visual_brief(html, payload);
    render_campaign(html, payload);
    render_mode_panel(html, payload);

    html.push_str("<section class=\"section selected-work\" aria-label=\"");
    attr(html, &str_at(payload, &["t", "selected", "eyebrow"]));
    html.push_str("\">");
    section_heading(
        html,
        &str_at(payload, &["t", "selected", "eyebrow"]),
        &str_at(payload, &["t", "selected", "title"]),
        &str_at(payload, &["t", "selected", "body"]),
        false,
    );
    render_instagram_grid(html, payload, &["posts", "featured"], "featured");
    html.push_str("</section>");

    html.push_str("<section class=\"section reel-library\" id=\"reels\">");
    section_heading(
        html,
        &str_at(payload, &["t", "reels", "eyebrow"]),
        &str_at(payload, &["t", "reels", "title"]),
        &str_at(payload, &["t", "reels", "body"]),
        false,
    );
    render_pair_grid(html, payload, &["t", "reels", "items"], "reel-grid", true);
    html.push_str("</section>");

    html.push_str("<section class=\"section two-column\" id=\"acting\"><div><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["t", "acting", "eyebrow"]));
    html.push_str("</p><h2>");
    text(html, &str_at(payload, &["t", "acting", "title"]));
    html.push_str("</h2></div><div><p>");
    text(html, &str_at(payload, &["t", "acting", "body"]));
    html.push_str("</p>");
    render_media_placeholder(
        html,
        "Acting showreel",
        "video placeholder",
        &str_at(payload, &["t", "acting", "placeholder"]),
        "light",
    );
    render_instagram_grid(html, payload, &["posts", "acting"], "compact-cards");
    html.push_str("</div></section>");

    html.push_str("<section class=\"section dark-band\" id=\"voice\">");
    section_heading(
        html,
        &str_at(payload, &["t", "voice", "eyebrow"]),
        &str_at(payload, &["t", "voice", "title"]),
        &str_at(payload, &["t", "voice", "body"]),
        false,
    );
    html.push_str("<div class=\"media-grid\">");
    for post in array_at(payload, &["posts", "voice"]) {
        render_instagram_card(html, post);
    }
    render_media_placeholder(
        html,
        "Language sample set",
        "voice",
        &str_at(payload, &["t", "voice", "sampleSet"]),
        "dark",
    );
    html.push_str("</div></section>");

    html.push_str("<section class=\"section\" id=\"languages\">");
    section_heading(
        html,
        &str_at(payload, &["t", "languages", "eyebrow"]),
        &str_at(payload, &["t", "languages", "title"]),
        "",
        true,
    );
    render_language_grid(html, payload);
    html.push_str("</section>");

    html.push_str("<section class=\"section market-focus\">");
    section_heading(
        html,
        &str_at(payload, &["t", "market", "eyebrow"]),
        &str_at(payload, &["t", "market", "title"]),
        "",
        false,
    );
    render_pair_grid(html, payload, &["t", "market", "cards"], "market-grid", false);
    html.push_str("</section>");

    render_language_stage(html, payload);

    html.push_str("<section class=\"section split-media\" id=\"music\">");
    section_heading(
        html,
        &str_at(payload, &["t", "music", "eyebrow"]),
        &str_at(payload, &["t", "music", "title"]),
        &str_at(payload, &["t", "music", "body"]),
        false,
    );
    html.push_str("<div class=\"media-grid\">");
    for post in array_at(payload, &["posts", "music"]) {
        render_instagram_card(html, post);
    }
    render_media_placeholder(
        html,
        "Piano sample",
        "music",
        &str_at(payload, &["t", "music", "piano"]),
        "light",
    );
    html.push_str("</div></section>");

    html.push_str("<section class=\"section two-column\" id=\"hosting\"><div><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["t", "hosting", "eyebrow"]));
    html.push_str("</p><h2>");
    text(html, &str_at(payload, &["t", "hosting", "title"]));
    html.push_str("</h2></div><div class=\"stack\"><p>");
    text(html, &str_at(payload, &["t", "hosting", "body"]));
    html.push_str("</p>");
    render_media_placeholder(
        html,
        "Hosting reel",
        "events",
        &str_at(payload, &["t", "hosting", "placeholder"]),
        "light",
    );
    render_instagram_grid(html, payload, &["posts", "hosting"], "single");
    html.push_str("</div></section>");

    render_testimonial(html, payload);

    html.push_str("<section class=\"section\" id=\"skills\">");
    section_heading(
        html,
        &str_at(payload, &["t", "skills", "eyebrow"]),
        &str_at(payload, &["t", "skills", "title"]),
        "",
        true,
    );
    render_skill_grid(html, payload, false);
    html.push_str("</section>");

    render_aerial(html, payload);
    render_content_plan(html, payload);
    render_contact(html, payload);
    html.push_str("</main>");
}

fn render_visual_brief(html: &mut String, payload: &Value) {
    let theme = str_at(payload, &["visual", "theme"]);
    html.push_str("<section class=\"section home-visual-brief brief-");
    attr(html, &theme);
    html.push_str("\" aria-label=\"");
    attr(html, &str_at(payload, &["labels", "brief", "visual"]));
    html.push_str("\"><div class=\"visual-brief-copy\"><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["labels", "brief", "visual"]));
    html.push_str("</p><h2>");
    text(html, &str_at(payload, &["visual", "title"]));
    html.push_str("</h2><p>");
    text(html, &str_at(payload, &["visual", "body"]));
    html.push_str("</p></div><div class=\"visual-brief-stage\"><div class=\"visual-symbol\" aria-hidden=\"true\"></div><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["labels", "brief", "loop"]));
    html.push_str("</p><h3>");
    text(html, &str_at(payload, &["visual", "backdrop"]));
    html.push_str("</h3></div><div class=\"visual-brief-list\" aria-label=\"");
    attr(html, &str_at(payload, &["labels", "brief", "content"]));
    html.push_str("\">");
    render_dot_articles(html, payload, &["visual", "media"]);
    html.push_str("</div></section>");
}

fn render_campaign(html: &mut String, payload: &Value) {
    html.push_str("<section class=\"section campaign-strip\" aria-label=\"");
    attr(html, &str_at(payload, &["campaign", "eyebrow"]));
    html.push_str("\"><div class=\"campaign-main\"><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["campaign", "eyebrow"]));
    html.push_str("</p><h2>");
    text(html, &str_at(payload, &["campaign", "title"]));
    html.push_str("</h2><p>");
    text(html, &str_at(payload, &["campaign", "body"]));
    html.push_str("</p><div class=\"campaign-actions\" aria-label=\"Current campaign actions\">");
    button(
        html,
        "primary",
        &str_at(payload, &["paths", "work"]),
        &str_at(payload, &["campaign", "primary"]),
        "",
    );
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "stage"]),
        &str_at(payload, &["campaign", "secondary"]),
        "",
    );
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "casting"]),
        &str_at(payload, &["campaign", "tertiary"]),
        "",
    );
    html.push_str("</div></div><div class=\"campaign-card-grid\">");
    for pair in array_at(payload, &["campaign", "cards"]) {
        html.push_str("<article><h3>");
        text(html, &pair_str(pair, 0));
        html.push_str("</h3><p>");
        text(html, &pair_str(pair, 1));
        html.push_str("</p></article>");
    }
    html.push_str("</div></section>");
}

fn render_mode_panel(html: &mut String, payload: &Value) {
    html.push_str("<section class=\"section mode-panel\" aria-label=\"");
    attr(html, &str_at(payload, &["stage", "current", "eyebrow"]));
    html.push_str("\">");
    section_heading(
        html,
        &str_at(payload, &["stage", "current", "eyebrow"]),
        &str_at(payload, &["stage", "current", "title"]),
        &str_at(payload, &["stage", "current", "body"]),
        false,
    );
    render_pair_grid(html, payload, &["stage", "modes"], "mode-grid", true);
    html.push_str("<div class=\"mode-actions\">");
    button(
        html,
        "primary",
        &str_at(payload, &["paths", "stage"]),
        &str_at(payload, &["stage", "eyebrow"]),
        "",
    );
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "casting"]),
        &str_at(payload, &["stage", "enterCasting"]),
        "",
    );
    html.push_str("</div></section>");
}

fn render_language_stage(html: &mut String, payload: &Value) {
    html.push_str("<section class=\"section language-stage\" id=\"language-stage\" aria-labelledby=\"language-stage-title\">");
    section_heading_with_id(
        html,
        &str_at(payload, &["t", "canvas", "eyebrow"]),
        &str_at(payload, &["t", "canvas", "title"]),
        &str_at(payload, &["t", "canvas", "body"]),
        "language-stage-title",
    );
    html.push_str("<div class=\"canvas-shell\"><canvas data-language-canvas data-languages=\"");
    json_attr(html, value_at(payload, &["t", "languageRows"]).unwrap_or(&Value::Null));
    html.push_str("\" aria-hidden=\"true\"></canvas><div class=\"canvas-language-list\" aria-label=\"");
    attr(html, &str_at(payload, &["t", "canvas", "title"]));
    html.push_str("\">");
    for row in array_at(payload, &["t", "languageRows"]) {
        html.push_str("<article><h3>");
        text(html, &pair_str(row, 0));
        html.push_str("</h3><p>");
        text(html, &pair_str(row, 1));
        html.push_str("</p><span>");
        text(html, &pair_str(row, 2));
        html.push_str("</span></article>");
    }
    html.push_str("</div></div></section>");
}

fn render_testimonial(html: &mut String, payload: &Value) {
    let Some(testimonial) = value_at(payload, &["testimonial"]) else {
        return;
    };
    if testimonial.is_null() {
        return;
    }

    html.push_str("<section class=\"section testimonial-feature\" id=\"testimonials\" data-testimonial-stage><canvas class=\"testimonial-canvas\" data-testimonial-canvas aria-hidden=\"true\"></canvas><div class=\"testimonial-stage-head\"><p class=\"eyebrow\">");
    text(html, &field_str(testimonial, "eyebrow"));
    html.push_str("</p><h2>");
    text(html, &field_str(testimonial, "title"));
    html.push_str("</h2><p>");
    text(html, &field_str(testimonial, "intro"));
    html.push_str("</p></div><div class=\"testimonial-stage-grid\"><div class=\"testimonial-media\" data-testimonial-layer><img src=\"");
    attr(html, &field_str(testimonial, "image"));
    html.push_str("\" alt=\"");
    attr(html, &field_str(testimonial, "imageAlt"));
    html.push_str("\" loading=\"lazy\" width=\"948\" height=\"946\" /><div class=\"testimonial-media-caption\"><span>");
    text(html, &field_str(testimonial, "person"));
    html.push_str("</span><p>");
    text(html, &field_str(testimonial, "role"));
    html.push_str("</p></div></div><div class=\"testimonial-proof-stack\">");

    if let Some(video) = testimonial.get("video") {
        if !video.is_null() {
            html.push_str("<article class=\"testimonial-video-card\" data-testimonial-layer><video controls playsinline preload=\"metadata\" poster=\"");
            attr(html, &field_str(video, "poster"));
            html.push_str("\"><source src=\"");
            attr(html, &field_str(video, "src"));
            html.push_str("\" type=\"video/mp4\" /></video><div><p class=\"eyebrow\">");
            text(html, &field_str(video, "label"));
            html.push_str("</p><p>");
            text(html, &field_str(video, "caption"));
            html.push_str("</p></div></article>");
        }
    }

    html.push_str("<article class=\"testimonial-quote-card\" data-testimonial-layer><p class=\"eyebrow\">");
    text(html, &field_str(testimonial, "quoteLabel"));
    html.push_str("</p><blockquote>");
    text(html, &field_str(testimonial, "quote"));
    html.push_str("</blockquote><footer><strong>");
    text(html, &field_str(testimonial, "person"));
    html.push_str("</strong><span>");
    text(html, &field_str(testimonial, "role"));
    html.push_str("</span></footer></article><div class=\"testimonial-source\"><a href=\"");
    attr(html, &field_str(testimonial, "sourceHref"));
    html.push_str("\" target=\"_blank\" rel=\"noreferrer\">");
    text(html, &field_str(testimonial, "sourceLabel"));
    html.push_str("</a><p>");
    text(html, &field_str(testimonial, "sourceNote"));
    html.push_str("</p></div></div></div></section>");
}

fn render_aerial(html: &mut String, payload: &Value) {
    html.push_str("<section class=\"section aerial-feature\" id=\"aerial\"><div class=\"aerial-video-frame\"><video controls muted playsinline preload=\"metadata\" poster=\"");
    attr(html, &str_at(payload, &["aerial", "media", "poster"]));
    html.push_str("\"><source src=\"");
    attr(html, &str_at(payload, &["aerial", "media", "highlight"]));
    html.push_str("\" type=\"video/mp4\" /></video></div><div class=\"aerial-feature-copy\"><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["aerial", "copy", "eyebrow"]));
    html.push_str("</p><h2>");
    text(html, &str_at(payload, &["aerial", "copy", "title"]));
    html.push_str("</h2><p>");
    text(html, &str_at(payload, &["aerial", "copy", "body"]));
    html.push_str("</p><div class=\"aerial-actions\"><span>");
    text(html, &str_at(payload, &["aerial", "copy", "meta"]));
    html.push_str("</span><a class=\"button secondary\" href=\"");
    attr(html, &str_at(payload, &["aerial", "media", "full"]));
    html.push_str("\" target=\"_blank\" rel=\"noreferrer\">");
    text(html, &str_at(payload, &["aerial", "copy", "full"]));
    html.push_str("</a></div></div></section>");
}

fn render_content_plan(html: &mut String, payload: &Value) {
    html.push_str("<section class=\"section content-plan\" id=\"content-plan\">");
    section_heading(
        html,
        &str_at(payload, &["t", "plan", "eyebrow"]),
        &str_at(payload, &["t", "plan", "title"]),
        &str_at(payload, &["t", "plan", "body"]),
        false,
    );
    html.push_str("<div class=\"plan-grid\">");
    for item in array_at(payload, &["contentPlan"]) {
        html.push_str("<article><p class=\"eyebrow\">");
        text(html, &field_str(item, "where"));
        html.push_str("</p><h3>");
        text(html, &field_str(item, "title"));
        html.push_str("</h3><p>");
        text(html, &field_str(item, "needed"));
        html.push_str("</p><span>");
        text(html, &field_str(item, "suggestedFiles"));
        html.push_str("</span></article>");
    }
    html.push_str("</div></section>");
}

fn render_contact(html: &mut String, payload: &Value) {
    html.push_str("<section class=\"section contact-band\" id=\"contact\"><div><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["t", "contact", "eyebrow"]));
    html.push_str("</p><h2>");
    text(html, &str_at(payload, &["t", "contact", "title"]));
    html.push_str("</h2></div><div class=\"contact-card\"><a class=\"contact-link\" href=\"mailto:");
    attr(html, &str_at(payload, &["profile", "email"]));
    html.push_str("\">");
    text(html, &str_at(payload, &["profile", "email"]));
    html.push_str("</a><a class=\"contact-link\" href=\"");
    attr(html, &str_at(payload, &["profile", "instagram"]));
    html.push_str("\" target=\"_blank\" rel=\"noreferrer\">Instagram ");
    text(html, &str_at(payload, &["profile", "handle"]));
    html.push_str("</a>");
    button(
        html,
        "primary",
        &str_at(payload, &["paths", "casting"]),
        &str_at(payload, &["t", "contact", "casting"]),
        "",
    );
    html.push_str("</div></section>");
}

fn render_work(html: &mut String, payload: &Value) {
    let theme = str_at(payload, &["visual", "theme"]);
    html.push_str("<main class=\"work-page\"><section class=\"work-hero\"><div><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["work", "eyebrow"]));
    html.push_str("</p><h1>");
    text(html, &str_at(payload, &["work", "heading"]));
    html.push_str("</h1><p>");
    text(html, &str_at(payload, &["work", "body"]));
    html.push_str("</p></div><div class=\"work-hero-actions\" aria-label=\"Selected work actions\">");
    button(
        html,
        "primary",
        &format!("mailto:{}", str_at(payload, &["profile", "email"])),
        &str_at(payload, &["work", "contact"]),
        "",
    );
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "casting"]),
        &str_at(payload, &["work", "casting"]),
        "",
    );
    html.push_str("</div></section><section class=\"section locale-signature signature-");
    attr(html, &theme);
    html.push_str("\">");
    section_heading(
        html,
        &str_at(payload, &["visual", "eyebrow"]),
        &str_at(payload, &["visual", "title"]),
        &str_at(payload, &["visual", "body"]),
        false,
    );
    html.push_str("<div class=\"signature-layout\"><article class=\"signature-backdrop-card\"><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["labels", "signature", "backdrop"]));
    html.push_str("</p><h3>");
    text(html, &str_at(payload, &["visual", "backdrop"]));
    html.push_str("</h3></article><div class=\"signature-media-list\" aria-label=\"");
    attr(html, &str_at(payload, &["labels", "signature", "content"]));
    html.push_str("\">");
    render_dot_articles(html, payload, &["visual", "media"]);
    html.push_str("</div></div></section><section class=\"work-categories\" aria-label=\"");
    attr(html, &str_at(payload, &["work", "eyebrow"]));
    html.push_str("\">");

    for section in array_at(payload, &["workSections"]) {
        html.push_str("<article class=\"work-category\" id=\"");
        attr(html, &field_str(section, "id"));
        html.push_str("\"><div class=\"work-category-head\"><p class=\"eyebrow\">");
        text(html, &field_str(section, "id"));
        html.push_str("</p><h2>");
        text(html, &field_str(section, "title"));
        html.push_str("</h2><p>");
        text(html, &field_str(section, "summary"));
        html.push_str("</p></div><div class=\"work-category-body\"><div class=\"instagram-grid compact-cards\">");
        for post in section.get("posts").and_then(Value::as_array).into_iter().flatten() {
            render_instagram_card(html, post);
        }
        html.push_str("</div>");
        render_media_placeholder(
            html,
            &format!(
                "{} · {}",
                field_str(section, "title"),
                str_at(payload, &["labels", "mediaToAdd"])
            ),
            &str_at(payload, &["labels", "plannedAsset"]),
            &field_str(section, "needed"),
            "light",
        );
        html.push_str("</div></article>");
    }

    html.push_str("</section><section class=\"section booking-packet\">");
    section_heading(
        html,
        &str_at(payload, &["labels", "packet", "eyebrow"]),
        &str_at(payload, &["labels", "packet", "title"]),
        &str_at(payload, &["labels", "packet", "body"]),
        false,
    );
    html.push_str("<div class=\"packet-grid\">");
    for item in array_at(payload, &["labels", "packet", "items"]) {
        html.push_str("<span>");
        text(html, &value_str(item));
        html.push_str("</span>");
    }
    html.push_str("</div></section></main>");
}

fn render_stage(html: &mut String, payload: &Value) {
    let theme = str_at(payload, &["visual", "theme"]);
    let profile_name = str_at(payload, &["profile", "name"]);
    html.push_str("<main class=\"stage-experience stage-");
    attr(html, &theme);
    html.push_str("\"><section class=\"stage-hero\" data-stage-theme=\"");
    attr(html, &theme);
    html.push_str("\"><canvas data-stage-hero-canvas data-theme=\"");
    attr(html, &theme);
    html.push_str("\" data-languages=\"");
    json_attr(html, value_at(payload, &["t", "languageRows"]).unwrap_or(&Value::Null));
    html.push_str("\" aria-hidden=\"true\"></canvas><div class=\"stage-hero-copy\"><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["stage", "eyebrow"]));
    html.push_str("</p><h1>");
    text(html, &str_at(payload, &["stage", "headline"]));
    html.push_str("</h1><p>");
    text(html, &str_at(payload, &["stage", "body"]));
    html.push_str("</p><div class=\"hero-actions\">");
    button(
        html,
        "primary",
        &str_at(payload, &["paths", "casting"]),
        &str_at(payload, &["stage", "enterCasting"]),
        "",
    );
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "home"]),
        &str_at(payload, &["stage", "backToHub"]),
        "",
    );
    html.push_str("</div></div><div class=\"stage-portrait\"><img src=\"");
    attr(html, &str_at(payload, &["profile", "headshot"]));
    html.push_str("\" alt=\"");
    attr(html, &format!("Portrait of {profile_name}"));
    html.push_str("\" width=\"1080\" height=\"1080\" /><span>");
    text(html, &profile_name);
    html.push_str("</span></div></section><section class=\"section locale-visual-plan\">");
    section_heading(
        html,
        &str_at(payload, &["visual", "eyebrow"]),
        &str_at(payload, &["visual", "title"]),
        &str_at(payload, &["visual", "body"]),
        false,
    );
    html.push_str("<div class=\"visual-plan-layout\"><article class=\"visual-backdrop-card\"><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["labels", "stageStatic", "heroBackdrop"]));
    html.push_str("</p><h3>");
    text(html, &str_at(payload, &["visual", "backdrop"]));
    html.push_str("</h3></article><div class=\"visual-media-list\">");
    render_dot_articles(html, payload, &["visual", "media"]);
    html.push_str("</div></div></section><section class=\"section stage-mode-map\">");
    section_heading(
        html,
        &str_at(payload, &["stage", "current", "eyebrow"]),
        &str_at(payload, &["stage", "current", "title"]),
        &str_at(payload, &["stage", "current", "body"]),
        false,
    );
    render_pair_grid(html, payload, &["stage", "modes"], "mode-grid", true);
    html.push_str("</section><section class=\"section stage-moments\">");
    section_heading(
        html,
        &str_at(payload, &["labels", "stageStatic", "creativePlan"]),
        &str_at(payload, &["labels", "stageStatic", "sceneChapters"]),
        "",
        false,
    );
    render_pair_grid(html, payload, &["stage", "moments"], "stage-moment-grid", false);
    html.push_str("</section><section class=\"section dark-band\">");
    section_heading(
        html,
        &str_at(payload, &["t", "selected", "eyebrow"]),
        &str_at(payload, &["t", "selected", "title"]),
        &str_at(payload, &["t", "selected", "body"]),
        false,
    );
    render_instagram_grid(html, payload, &["posts", "stage"], "featured");
    html.push_str("</section><section class=\"section split-media\">");
    section_heading(
        html,
        &str_at(payload, &["labels", "stageStatic", "voiceMusic"]),
        &str_at(payload, &["t", "voice", "title"]),
        &str_at(payload, &["t", "voice", "body"]),
        false,
    );
    html.push_str("<div class=\"media-grid\">");
    render_media_placeholder(
        html,
        "Audio-reactive voice scene",
        "planned stage media",
        &str_at(payload, &["t", "voice", "sampleSet"]),
        "light",
    );
    render_media_placeholder(
        html,
        "Piano light scene",
        "planned stage media",
        &str_at(payload, &["t", "music", "piano"]),
        "light",
    );
    html.push_str("</div></section></main>");
}

fn render_casting(html: &mut String, payload: &Value) {
    let profile_name = str_at(payload, &["profile", "name"]);
    html.push_str("<main class=\"casting-page\"><section class=\"casting-hero\"><div class=\"casting-photo\"><img src=\"");
    attr(html, &str_at(payload, &["profile", "headshot"]));
    html.push_str("\" alt=\"");
    attr(html, &format!("Portrait of {profile_name}"));
    html.push_str("\" width=\"1080\" height=\"1080\" /></div><div><p class=\"eyebrow\">");
    text(html, &str_at(payload, &["t", "casting", "eyebrow"]));
    html.push_str("</p><h1>");
    text(html, &profile_name);
    html.push_str("</h1><p>");
    text(html, &str_at(payload, &["t", "casting", "intro"]));
    html.push_str("</p><div class=\"hero-actions\">");
    button(
        html,
        "primary",
        &format!("mailto:{}", str_at(payload, &["profile", "email"])),
        &str_at(payload, &["t", "casting", "contact"]),
        "",
    );
    button(
        html,
        "secondary",
        &str_at(payload, &["paths", "cv"]),
        &str_at(payload, &["t", "casting", "download"]),
        " download",
    );
    html.push_str("</div></div></section><section class=\"casting-layout\"><aside class=\"fact-panel\"><h2>");
    text(html, &str_at(payload, &["t", "casting", "facts"]));
    html.push_str("</h2><dl>");
    for row in array_at(payload, &["casting", "factRows"]) {
        html.push_str("<dt>");
        text(html, &pair_str(row, 0));
        html.push_str("</dt><dd>");
        text(html, &pair_str(row, 1));
        html.push_str("</dd>");
    }
    html.push_str("</dl></aside><div class=\"casting-main\"><section><h2>");
    text(html, &str_at(payload, &["t", "casting", "selected"]));
    html.push_str("</h2>");
    render_instagram_grid(html, payload, &["posts", "casting"], "casting-grid");
    html.push_str("</section><section><h2>");
    text(html, &str_at(payload, &["t", "casting", "showreel"]));
    html.push_str("</h2>");
    render_media_placeholder(
        html,
        "Acting showreel",
        "required media",
        &str_at(payload, &["t", "acting", "placeholder"]),
        "light",
    );
    html.push_str("</section><section><h2>");
    text(html, &str_at(payload, &["t", "casting", "languages"]));
    html.push_str("</h2><div class=\"compact-list\">");
    for row in array_at(payload, &["t", "languageRows"]) {
        html.push_str("<p><strong>");
        text(html, &pair_str(row, 0));
        html.push_str("</strong> — ");
        text(html, &pair_str(row, 1));
        html.push_str(" — ");
        text(html, &pair_str(row, 2));
        html.push_str("</p>");
    }
    html.push_str("</div></section><section><h2>");
    text(html, &str_at(payload, &["t", "casting", "voice"]));
    html.push_str("</h2>");
    render_media_placeholder(
        html,
        "Voice samples",
        "required media",
        &str_at(payload, &["t", "voice", "sampleSet"]),
        "light",
    );
    html.push_str("</section><section><h2>");
    text(html, &str_at(payload, &["t", "casting", "skills"]));
    html.push_str("</h2>");
    render_skill_grid(html, payload, true);
    html.push_str("</section><section><h2>");
    text(html, &str_at(payload, &["t", "casting", "credits"]));
    html.push_str("</h2><div class=\"credits-table\" role=\"table\" aria-label=\"");
    attr(html, &str_at(payload, &["t", "casting", "credits"]));
    html.push_str("\"><div role=\"row\">");
    for header in array_at(payload, &["t", "casting", "table"]) {
        html.push_str("<strong role=\"columnheader\">");
        text(html, &value_str(header));
        html.push_str("</strong>");
    }
    html.push_str("</div>");
    for row in array_at(payload, &["t", "casting", "rows"]) {
        html.push_str("<div role=\"row\">");
        if let Some(cells) = row.as_array() {
            for cell in cells {
                html.push_str("<span role=\"cell\">");
                text(html, &value_str(cell));
                html.push_str("</span>");
            }
        }
        html.push_str("</div>");
    }
    html.push_str("</div></section><section><h2>");
    text(html, &str_at(payload, &["t", "casting", "missing"]));
    html.push_str("</h2><div class=\"compact-list\">");
    for item in array_at(payload, &["casting", "contentPlan"]) {
        html.push_str("<p><strong>");
        text(html, &field_str(item, "title"));
        html.push_str("</strong> — ");
        text(html, &field_str(item, "needed"));
        html.push_str("</p>");
    }
    html.push_str("</div></section></div></section></main>");
}

fn render_instagram_grid(html: &mut String, payload: &Value, path: &[&str], extra_class: &str) {
    html.push_str("<div class=\"instagram-grid");
    if !extra_class.is_empty() {
        html.push(' ');
        attr(html, extra_class);
    }
    html.push_str("\">");
    for post in array_at(payload, path) {
        render_instagram_card(html, post);
    }
    html.push_str("</div>");
}

fn render_instagram_card(html: &mut String, post: &Value) {
    html.push_str("<article class=\"instagram-card\"><a href=\"");
    attr(html, &field_str(post, "href"));
    html.push_str("\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"Open ");
    attr(html, &field_str(post, "title"));
    html.push_str(" on Instagram\"><img src=\"");
    attr(html, &field_str(post, "image"));
    html.push_str("\" alt=\"");
    attr(html, &field_str(post, "alt"));
    html.push_str("\" loading=\"lazy\" /><div><p class=\"eyebrow\">");
    text(html, &field_str(post, "category"));
    html.push_str("</p><h3>");
    text(html, &field_str(post, "title"));
    html.push_str("</h3><p>");
    text(html, &field_str(post, "note"));
    html.push_str("</p></div></a></article>");
}

fn render_media_placeholder(html: &mut String, title: &str, category: &str, note: &str, tone: &str) {
    html.push_str("<article class=\"media-placeholder ");
    attr(html, tone);
    html.push_str("\"><div class=\"media-mark\" aria-hidden=\"true\"><span></span></div><div><p class=\"eyebrow\">");
    text(html, category);
    html.push_str("</p><h3>");
    text(html, title);
    html.push_str("</h3><p>");
    text(html, note);
    html.push_str("</p></div></article>");
}

fn render_language_grid(html: &mut String, payload: &Value) {
    html.push_str("<div class=\"language-grid\">");
    for row in array_at(payload, &["t", "languageRows"]) {
        html.push_str("<article><h3>");
        text(html, &pair_str(row, 0));
        html.push_str("</h3><p>");
        text(html, &pair_str(row, 1));
        html.push_str("</p><span>");
        text(html, &pair_str(row, 2));
        html.push_str("</span></article>");
    }
    html.push_str("</div>");
}

fn render_skill_grid(html: &mut String, payload: &Value, compact: bool) {
    if compact {
        html.push_str("<div class=\"skill-grid compact\">");
    } else {
        html.push_str("<div class=\"skill-grid\">");
    }
    for row in array_at(payload, &["t", "skillGroups"]) {
        html.push_str("<article><h3>");
        text(html, &pair_str(row, 0));
        html.push_str("</h3><p>");
        text(html, &pair_str(row, 1));
        html.push_str("</p></article>");
    }
    html.push_str("</div>");
}

fn render_pair_grid(
    html: &mut String,
    payload: &Value,
    path: &[&str],
    class_name: &str,
    numbered: bool,
) {
    html.push_str("<div class=\"");
    attr(html, class_name);
    html.push_str("\">");
    for (index, pair) in array_at(payload, path).iter().enumerate() {
        html.push_str("<article>");
        if numbered {
            html.push_str("<span>");
            text(html, &format!("{:02}", index + 1));
            html.push_str("</span>");
        }
        html.push_str("<h3>");
        text(html, &pair_str(pair, 0));
        html.push_str("</h3><p>");
        text(html, &pair_str(pair, 1));
        html.push_str("</p></article>");
    }
    html.push_str("</div>");
}

fn render_dot_articles(html: &mut String, payload: &Value, path: &[&str]) {
    for item in array_at(payload, path) {
        html.push_str("<article><span></span><p>");
        text(html, &value_str(item));
        html.push_str("</p></article>");
    }
}

fn section_heading(html: &mut String, eyebrow: &str, title: &str, body: &str, compact: bool) {
    html.push_str("<div class=\"section-heading");
    if compact {
        html.push_str(" compact");
    }
    html.push_str("\"><p class=\"eyebrow\">");
    text(html, eyebrow);
    html.push_str("</p><h2>");
    text(html, title);
    html.push_str("</h2>");
    if !body.is_empty() {
        html.push_str("<p>");
        text(html, body);
        html.push_str("</p>");
    }
    html.push_str("</div>");
}

fn section_heading_with_id(html: &mut String, eyebrow: &str, title: &str, body: &str, id: &str) {
    html.push_str("<div class=\"section-heading\"><p class=\"eyebrow\">");
    text(html, eyebrow);
    html.push_str("</p><h2 id=\"");
    attr(html, id);
    html.push_str("\">");
    text(html, title);
    html.push_str("</h2><p>");
    text(html, body);
    html.push_str("</p></div>");
}

fn button(html: &mut String, class_name: &str, href: &str, label: &str, attrs: &str) {
    html.push_str("<a class=\"button ");
    attr(html, class_name);
    html.push_str("\" href=\"");
    attr(html, href);
    html.push('"');
    html.push_str(attrs);
    html.push('>');
    text(html, label);
    html.push_str("</a>");
}

fn wire_locale_switchers(root: &Element) {
    let Ok(selects) = root.query_selector_all("[data-locale-switcher]") else {
        return;
    };

    for index in 0..selects.length() {
        let Some(node) = selects.item(index) else {
            continue;
        };
        let Ok(select) = node.dyn_into::<HtmlSelectElement>() else {
            continue;
        };

        let closure = Closure::<dyn FnMut(Event)>::wrap(Box::new(move |event: Event| {
            let Some(target) = event.current_target() else {
                return;
            };
            let Ok(select) = target.dyn_into::<HtmlSelectElement>() else {
                return;
            };
            let selected_index = select.selected_index();
            if selected_index >= 0 {
                if let Some(option) = select.options().item(selected_index as u32) {
                    if let Ok(option) = option.dyn_into::<HtmlOptionElement>() {
                        if let Some(locale) = option.get_attribute("data-locale") {
                            if let Some(storage) = window().and_then(|w| w.local_storage().ok().flatten()) {
                                let _ = storage.set_item("preferredLocale", &locale);
                            }
                        }
                    }
                }
            }
            if let Some(window) = window() {
                let _ = window.location().set_href(&select.value());
            }
        }));

        let _ = select.add_event_listener_with_callback("change", closure.as_ref().unchecked_ref());
        closure.forget();
    }
}

fn wire_hero_videos(root: &Element) {
    let Ok(videos) = root.query_selector_all("[data-hero-video]") else {
        return;
    };

    for index in 0..videos.length() {
        let Some(node) = videos.item(index) else {
            continue;
        };
        let Ok(video) = node.dyn_into::<HtmlVideoElement>() else {
            continue;
        };
        video.set_muted(true);
        let _ = video.play();

        let play_video = video.clone();
        let closure = Closure::<dyn FnMut(Event)>::wrap(Box::new(move |_| {
            play_video.set_muted(true);
            let _ = play_video.play();
        }));
        let _ = video.add_event_listener_with_callback("canplay", closure.as_ref().unchecked_ref());
        closure.forget();
    }
}

fn wire_language_canvases(root: &Element) {
    let Ok(canvases) = root.query_selector_all("[data-language-canvas]") else {
        return;
    };

    for index in 0..canvases.length() {
        let Some(node) = canvases.item(index) else {
            continue;
        };
        if let Ok(canvas) = node.dyn_into::<HtmlCanvasElement>() {
            start_language_canvas(canvas);
        }
    }
}

fn wire_stage_canvases(root: &Element) {
    let Ok(canvases) = root.query_selector_all("[data-stage-hero-canvas]") else {
        return;
    };

    for index in 0..canvases.length() {
        let Some(node) = canvases.item(index) else {
            continue;
        };
        if let Ok(canvas) = node.dyn_into::<HtmlCanvasElement>() {
            start_stage_canvas(canvas);
        }
    }
}

fn wire_testimonial_canvases(root: &Element) {
    let Ok(stages) = root.query_selector_all("[data-testimonial-stage]") else {
        return;
    };

    for index in 0..stages.length() {
        let Some(node) = stages.item(index) else {
            continue;
        };
        if let Ok(stage) = node.dyn_into::<HtmlElement>() {
            start_testimonial_canvas(stage);
        }
    }
}

fn start_language_canvas(canvas: HtmlCanvasElement) {
    let Some(ctx) = canvas_context(&canvas) else {
        return;
    };
    let languages = Rc::new(languages_from_canvas(&canvas));
    let pointer = Rc::new(RefCell::new(Pointer { x: 0.62, y: 0.4 }));
    let frame = Rc::new(RefCell::new(0.0));
    let reduced = prefers_reduced_motion();

    resize_canvas(&canvas, &ctx);
    draw_language_canvas(&canvas, &ctx, &languages, &pointer.borrow(), *frame.borrow());

    let draw_slot: Rc<RefCell<Option<Closure<dyn FnMut()>>>> = Rc::new(RefCell::new(None));
    let draw_slot_ref = draw_slot.clone();
    let canvas_ref = canvas.clone();
    let ctx_ref = ctx.clone();
    let languages_ref = languages.clone();
    let pointer_ref = pointer.clone();
    let frame_ref = frame.clone();

    *draw_slot_ref.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        if !reduced {
            *frame_ref.borrow_mut() += 0.012;
        }
        draw_language_canvas(
            &canvas_ref,
            &ctx_ref,
            &languages_ref,
            &pointer_ref.borrow(),
            *frame_ref.borrow(),
        );
        if !reduced {
            if let (Some(window), Some(callback)) = (window(), draw_slot.borrow().as_ref()) {
                let _ = window.request_animation_frame(callback.as_ref().unchecked_ref());
            }
        }
    }) as Box<dyn FnMut()>));

    if !reduced {
        if let (Some(window), Some(callback)) = (window(), draw_slot_ref.borrow().as_ref()) {
            let _ = window.request_animation_frame(callback.as_ref().unchecked_ref());
        }
    }

    let move_canvas = canvas.clone();
    let move_ctx = ctx.clone();
    let move_languages = languages.clone();
    let move_pointer = pointer.clone();
    let move_frame = frame.clone();
    let pointer_closure =
        Closure::<dyn FnMut(PointerEvent)>::wrap(Box::new(move |event: PointerEvent| {
            let rect = move_canvas.get_bounding_client_rect();
            let width = rect.width().max(1.0);
            let height = rect.height().max(1.0);
            *move_pointer.borrow_mut() = Pointer {
                x: (event.client_x() as f64 - rect.left()) / width,
                y: (event.client_y() as f64 - rect.top()) / height,
            };
            if reduced {
                draw_language_canvas(
                    &move_canvas,
                    &move_ctx,
                    &move_languages,
                    &move_pointer.borrow(),
                    *move_frame.borrow(),
                );
            }
        }));
    let _ = canvas.add_event_listener_with_callback(
        "pointermove",
        pointer_closure.as_ref().unchecked_ref(),
    );
    pointer_closure.forget();

    attach_resize(canvas, ctx, move || {});
}

fn draw_language_canvas(
    canvas: &HtmlCanvasElement,
    ctx: &CanvasRenderingContext2d,
    languages: &[Language],
    pointer: &Pointer,
    frame: f64,
) {
    let width = canvas.client_width() as f64;
    let height = canvas.client_height() as f64;
    if width <= 0.0 || height <= 0.0 {
        return;
    }

    ctx.clear_rect(0.0, 0.0, width, height);
    ctx.set_fill_style_str("#171412");
    ctx.fill_rect(0.0, 0.0, width, height);

    let gradient = ctx.create_linear_gradient(0.0, 0.0, width, height);
    let _ = gradient.add_color_stop(0.0, "rgba(143, 36, 60, 0.38)");
    let _ = gradient.add_color_stop(0.48, "rgba(185, 133, 59, 0.16)");
    let _ = gradient.add_color_stop(1.0, "rgba(40, 109, 103, 0.32)");
    ctx.set_fill_style_canvas_gradient(&gradient);
    ctx.fill_rect(0.0, 0.0, width, height);

    ctx.set_line_width(1.0);
    for i in 0..7 {
        let y = 50.0 + i as f64 * ((height - 100.0) / 6.0);
        ctx.set_stroke_style_str(&format!(
            "rgba(255, 253, 248, {})",
            0.08 + i as f64 * 0.01
        ));
        ctx.begin_path();
        ctx.move_to(34.0, y);
        ctx.line_to(width - 34.0, y);
        ctx.stroke();
    }

    let denom = (languages.len().saturating_sub(1)).max(1) as f64;
    for (index, language) in languages.iter().enumerate() {
        let y = 58.0 + index as f64 * ((height - 116.0) / denom);
        let sway = (frame + index as f64 * 0.8).sin() * 18.0;
        let control_x = width * pointer.x + sway;
        let control_y = y + (pointer.y - 0.5) * 72.0;
        let accent = match index % 3 {
            0 => "#b9853b",
            1 => "#8f243c",
            _ => "#2f8f86",
        };

        ctx.set_stroke_style_str(accent);
        ctx.set_global_alpha(0.42);
        ctx.set_line_width(2.0);
        ctx.begin_path();
        ctx.move_to(42.0, y);
        ctx.bezier_curve_to(control_x, control_y, control_x + 60.0, control_y, width - 48.0, y);
        ctx.stroke();

        ctx.set_global_alpha(0.9);
        ctx.set_fill_style_str("rgba(255, 253, 248, 0.9)");
        ctx.set_font("700 12px Inter, system-ui, sans-serif");
        let _ = ctx.fill_text(&language.name, 54.0, y - 8.0);
        ctx.set_font("11px Inter, system-ui, sans-serif");
        ctx.set_fill_style_str("rgba(255, 253, 248, 0.6)");
        let _ = ctx.fill_text(&language.uses, (width * 0.52).min(360.0), y - 8.0);
    }
    ctx.set_global_alpha(1.0);
}

fn start_stage_canvas(canvas: HtmlCanvasElement) {
    let Some(ctx) = canvas_context(&canvas) else {
        return;
    };
    let languages = Rc::new(languages_from_canvas(&canvas));
    let theme = canvas
        .get_attribute("data-theme")
        .unwrap_or_else(|| "constellation".to_string());
    let pointer = Rc::new(RefCell::new(Pointer { x: 0.5, y: 0.5 }));
    let frame = Rc::new(RefCell::new(0.0));
    let reduced = prefers_reduced_motion();

    resize_canvas(&canvas, &ctx);
    draw_stage_canvas(&canvas, &ctx, &languages, &theme, &pointer.borrow(), *frame.borrow());

    let draw_slot: Rc<RefCell<Option<Closure<dyn FnMut()>>>> = Rc::new(RefCell::new(None));
    let draw_slot_ref = draw_slot.clone();
    let canvas_ref = canvas.clone();
    let ctx_ref = ctx.clone();
    let languages_ref = languages.clone();
    let theme_ref = theme.clone();
    let pointer_ref = pointer.clone();
    let frame_ref = frame.clone();

    *draw_slot_ref.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        if !reduced {
            *frame_ref.borrow_mut() += 0.01;
        }
        draw_stage_canvas(
            &canvas_ref,
            &ctx_ref,
            &languages_ref,
            &theme_ref,
            &pointer_ref.borrow(),
            *frame_ref.borrow(),
        );
        if !reduced {
            if let (Some(window), Some(callback)) = (window(), draw_slot.borrow().as_ref()) {
                let _ = window.request_animation_frame(callback.as_ref().unchecked_ref());
            }
        }
    }) as Box<dyn FnMut()>));

    if !reduced {
        if let (Some(window), Some(callback)) = (window(), draw_slot_ref.borrow().as_ref()) {
            let _ = window.request_animation_frame(callback.as_ref().unchecked_ref());
        }
    }

    let move_canvas = canvas.clone();
    let move_ctx = ctx.clone();
    let move_languages = languages.clone();
    let move_theme = theme.clone();
    let move_pointer = pointer.clone();
    let move_frame = frame.clone();
    let pointer_closure =
        Closure::<dyn FnMut(PointerEvent)>::wrap(Box::new(move |event: PointerEvent| {
            let rect = move_canvas.get_bounding_client_rect();
            let width = rect.width().max(1.0);
            let height = rect.height().max(1.0);
            *move_pointer.borrow_mut() = Pointer {
                x: (event.client_x() as f64 - rect.left()) / width,
                y: (event.client_y() as f64 - rect.top()) / height,
            };
            if reduced {
                draw_stage_canvas(
                    &move_canvas,
                    &move_ctx,
                    &move_languages,
                    &move_theme,
                    &move_pointer.borrow(),
                    *move_frame.borrow(),
                );
            }
        }));
    let _ = canvas.add_event_listener_with_callback(
        "pointermove",
        pointer_closure.as_ref().unchecked_ref(),
    );
    pointer_closure.forget();

    attach_resize(canvas, ctx, move || {});
}

fn draw_stage_canvas(
    canvas: &HtmlCanvasElement,
    ctx: &CanvasRenderingContext2d,
    languages: &[Language],
    theme: &str,
    pointer: &Pointer,
    frame: f64,
) {
    let width = canvas.client_width() as f64;
    let height = canvas.client_height() as f64;
    if width <= 0.0 || height <= 0.0 {
        return;
    }

    ctx.clear_rect(0.0, 0.0, width, height);
    ctx.set_fill_style_str("#100f0e");
    ctx.fill_rect(0.0, 0.0, width, height);

    let palette = match theme {
        "mountains" => [
            "rgba(92, 124, 118, 0.4)",
            "rgba(185, 133, 59, 0.14)",
            "rgba(14, 22, 22, 0.98)",
        ],
        "amber" => [
            "rgba(219, 161, 72, 0.4)",
            "rgba(122, 54, 34, 0.28)",
            "rgba(20, 14, 12, 0.98)",
        ],
        "opera" => [
            "rgba(204, 175, 105, 0.38)",
            "rgba(128, 21, 42, 0.3)",
            "rgba(12, 10, 10, 0.98)",
        ],
        "sunflower" => [
            "rgba(244, 194, 77, 0.38)",
            "rgba(40, 87, 154, 0.28)",
            "rgba(10, 18, 30, 0.98)",
        ],
        "velvet" => [
            "rgba(143, 36, 60, 0.42)",
            "rgba(83, 19, 34, 0.28)",
            "rgba(12, 8, 9, 0.98)",
        ],
        _ => [
            "rgba(47, 143, 134, 0.34)",
            "rgba(143, 36, 60, 0.18)",
            "rgba(16, 15, 14, 0.96)",
        ],
    };

    if let Ok(bg) = ctx.create_radial_gradient(
        width * pointer.x,
        height * pointer.y,
        20.0,
        width * 0.52,
        height * 0.42,
        width.max(height),
    ) {
        let _ = bg.add_color_stop(0.0, palette[0]);
        let _ = bg.add_color_stop(0.38, palette[1]);
        let _ = bg.add_color_stop(1.0, palette[2]);
        ctx.set_fill_style_canvas_gradient(&bg);
        ctx.fill_rect(0.0, 0.0, width, height);
    }

    if theme == "mountains" {
        for range in 0..3 {
            ctx.set_fill_style_str(&format!(
                "rgba(255, 253, 248, {})",
                0.08 + range as f64 * 0.045
            ));
            ctx.begin_path();
            ctx.move_to(0.0, height);
            for i in 0..=8 {
                let x = (width / 8.0) * i as f64;
                let y = height * (0.52 + range as f64 * 0.11) - (i as f64 * 1.6 + range as f64).sin() * 70.0;
                ctx.line_to(x, y);
            }
            ctx.line_to(width, height);
            ctx.close_path();
            ctx.fill();
        }
    }

    if theme == "sunflower" {
        ctx.set_stroke_style_str("rgba(244, 194, 77, 0.18)");
        for i in 0..36 {
            let angle = i as f64 * (std::f64::consts::TAU / 36.0) + frame * 0.2;
            ctx.begin_path();
            ctx.move_to(width * 0.68, height * 0.5);
            ctx.line_to(
                width * 0.68 + angle.cos() * width,
                height * 0.5 + angle.sin() * width,
            );
            ctx.stroke();
        }
    }

    if theme == "velvet" || theme == "opera" {
        for i in 0..7 {
            let x = (width / 6.0) * i as f64 + (frame + i as f64).sin() * 16.0;
            let curtain = ctx.create_linear_gradient(x - 80.0, 0.0, x + 80.0, 0.0);
            let _ = curtain.add_color_stop(0.0, "rgba(0,0,0,0)");
            let _ = curtain.add_color_stop(
                0.5,
                if theme == "opera" {
                    "rgba(185,133,59,0.14)"
                } else {
                    "rgba(143,36,60,0.22)"
                },
            );
            let _ = curtain.add_color_stop(1.0, "rgba(0,0,0,0)");
            ctx.set_fill_style_canvas_gradient(&curtain);
            ctx.fill_rect(x - 120.0, 0.0, 240.0, height);
        }
    }

    if theme == "amber" {
        ctx.set_stroke_style_str("rgba(219, 161, 72, 0.18)");
        ctx.set_line_width(1.0);
        for i in 0..10 {
            ctx.begin_path();
            ctx.move_to(0.0, height * (0.18 + i as f64 * 0.08));
            ctx.bezier_curve_to(
                width * 0.35,
                height * (0.05 + i as f64 * 0.08),
                width * 0.7,
                height * (0.3 + i as f64 * 0.06),
                width,
                height * (0.12 + i as f64 * 0.08),
            );
            ctx.stroke();
        }
    }

    for i in 0..5 {
        let x = width * (0.12 + i as f64 * 0.18) + (frame + i as f64).sin() * 24.0;
        let cone = ctx.create_linear_gradient(x, 0.0, width * 0.5, height);
        let _ = cone.add_color_stop(0.0, "rgba(255, 253, 248, 0.16)");
        let _ = cone.add_color_stop(1.0, "rgba(255, 253, 248, 0)");
        ctx.set_fill_style_canvas_gradient(&cone);
        ctx.begin_path();
        ctx.move_to(x, 0.0);
        ctx.line_to(x + 160.0, height);
        ctx.line_to(x - 160.0, height);
        ctx.close_path();
        ctx.fill();
    }

    let center_x = width * 0.66;
    let center_y = height * 0.52;
    let denom = languages.len().max(1) as f64;
    for (index, language) in languages.iter().enumerate() {
        let angle = frame + index as f64 * (std::f64::consts::TAU / denom);
        let radius = width.min(height) * (0.22 + (index % 2) as f64 * 0.06);
        let x = center_x + angle.cos() * radius;
        let y = center_y + angle.sin() * radius * 0.62;
        let hue = match index % 3 {
            0 => "#b9853b",
            1 => "#8f243c",
            _ => "#2f8f86",
        };

        ctx.set_stroke_style_str("rgba(255, 253, 248, 0.16)");
        ctx.begin_path();
        ctx.move_to(center_x, center_y);
        ctx.line_to(x, y);
        ctx.stroke();

        ctx.set_fill_style_str(hue);
        ctx.begin_path();
        let _ = ctx.arc(x, y, 6.0, 0.0, std::f64::consts::TAU);
        ctx.fill();

        ctx.set_fill_style_str("rgba(255, 253, 248, 0.86)");
        ctx.set_font("700 13px Inter, system-ui, sans-serif");
        let _ = ctx.fill_text(&language.name, x + 12.0, y + 4.0);
    }
}

fn start_testimonial_canvas(stage: HtmlElement) {
    let Some(canvas_element) = stage
        .query_selector("[data-testimonial-canvas]")
        .ok()
        .flatten()
    else {
        return;
    };
    let Ok(canvas) = canvas_element.dyn_into::<HtmlCanvasElement>() else {
        return;
    };
    let Some(ctx) = canvas_context(&canvas) else {
        return;
    };
    let pointer = Rc::new(RefCell::new(Pointer { x: 0.62, y: 0.34 }));
    let frame = Rc::new(RefCell::new(0.0));
    let reduced = prefers_reduced_motion();

    resize_canvas_to_stage(&canvas, &ctx, &stage);
    draw_testimonial_canvas(&canvas, &ctx, &pointer.borrow(), *frame.borrow());

    let move_stage = stage.clone();
    let move_pointer = pointer.clone();
    let move_canvas = canvas.clone();
    let move_ctx = ctx.clone();
    let move_frame = frame.clone();
    let pointer_closure =
        Closure::<dyn FnMut(PointerEvent)>::wrap(Box::new(move |event: PointerEvent| {
            let rect = move_stage.get_bounding_client_rect();
            let width = rect.width().max(1.0);
            let height = rect.height().max(1.0);
            let point = Pointer {
                x: ((event.client_x() as f64 - rect.left()) / width).clamp(0.0, 1.0),
                y: ((event.client_y() as f64 - rect.top()) / height).clamp(0.0, 1.0),
            };
            let _ = move_stage
                .style()
                .set_property("--mx", &format!("{:.2}%", point.x * 100.0));
            let _ = move_stage
                .style()
                .set_property("--my", &format!("{:.2}%", point.y * 100.0));
            *move_pointer.borrow_mut() = point;
            if reduced {
                draw_testimonial_canvas(
                    &move_canvas,
                    &move_ctx,
                    &move_pointer.borrow(),
                    *move_frame.borrow(),
                );
            }
        }));
    let _ = stage.add_event_listener_with_callback(
        "pointermove",
        pointer_closure.as_ref().unchecked_ref(),
    );
    pointer_closure.forget();

    let draw_slot: Rc<RefCell<Option<Closure<dyn FnMut()>>>> = Rc::new(RefCell::new(None));
    let draw_slot_ref = draw_slot.clone();
    let canvas_ref = canvas.clone();
    let ctx_ref = ctx.clone();
    let pointer_ref = pointer.clone();
    let frame_ref = frame.clone();

    *draw_slot_ref.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        if !reduced {
            *frame_ref.borrow_mut() += 0.012;
        }
        draw_testimonial_canvas(&canvas_ref, &ctx_ref, &pointer_ref.borrow(), *frame_ref.borrow());
        if !reduced {
            if let (Some(window), Some(callback)) = (window(), draw_slot.borrow().as_ref()) {
                let _ = window.request_animation_frame(callback.as_ref().unchecked_ref());
            }
        }
    }) as Box<dyn FnMut()>));

    if !reduced {
        if let (Some(window), Some(callback)) = (window(), draw_slot_ref.borrow().as_ref()) {
            let _ = window.request_animation_frame(callback.as_ref().unchecked_ref());
        }
    }

    let resize_stage = stage.clone();
    let resize_canvas = canvas.clone();
    let resize_ctx = ctx.clone();
    let resize_closure = Closure::<dyn FnMut()>::wrap(Box::new(move || {
        resize_canvas_to_stage(&resize_canvas, &resize_ctx, &resize_stage);
    }));
    if let Some(window) = window() {
        let _ = window.add_event_listener_with_callback("resize", resize_closure.as_ref().unchecked_ref());
    }
    resize_closure.forget();
}

fn draw_testimonial_canvas(
    canvas: &HtmlCanvasElement,
    ctx: &CanvasRenderingContext2d,
    pointer: &Pointer,
    frame: f64,
) {
    let width = canvas.client_width() as f64;
    let height = canvas.client_height() as f64;
    if width <= 0.0 || height <= 0.0 {
        return;
    }

    ctx.clear_rect(0.0, 0.0, width, height);
    let center_x = width * pointer.x;
    let center_y = height * pointer.y;

    for i in 0..12 {
        let y = height * (0.12 + i as f64 * 0.07);
        let wave = (frame * 1.8 + i as f64 * 0.72).sin() * 42.0;
        ctx.begin_path();
        ctx.move_to(-60.0, y);
        ctx.bezier_curve_to(width * 0.24, y + wave, center_x, center_y + wave * 0.5, width + 60.0, y - wave);
        ctx.set_stroke_style_str(if i % 3 == 0 {
            "rgba(207, 155, 40, 0.34)"
        } else {
            "rgba(126, 167, 220, 0.18)"
        });
        ctx.set_line_width(if i % 3 == 0 { 1.4 } else { 0.8 });
        ctx.stroke();
    }

    for i in 0..46 {
        let phase = frame + i as f64 * 1.37;
        let x = ((phase * 0.61).sin() + 1.0) / 2.0 * width;
        let y = ((phase * 0.43).cos() + 1.0) / 2.0 * height;
        let radius = 1.1 + (i % 5) as f64 * 0.28;
        ctx.begin_path();
        let _ = ctx.arc(x, y, radius, 0.0, std::f64::consts::TAU);
        ctx.set_fill_style_str(if i % 4 == 0 {
            "rgba(255, 218, 122, 0.62)"
        } else {
            "rgba(255, 253, 248, 0.24)"
        });
        ctx.fill();
    }
}

fn attach_resize<F>(canvas: HtmlCanvasElement, ctx: CanvasRenderingContext2d, on_resize: F)
where
    F: Fn() + 'static,
{
    let closure = Closure::<dyn FnMut()>::wrap(Box::new(move || {
        resize_canvas(&canvas, &ctx);
        on_resize();
    }));
    if let Some(window) = window() {
        let _ = window.add_event_listener_with_callback("resize", closure.as_ref().unchecked_ref());
    }
    closure.forget();
}

fn canvas_context(canvas: &HtmlCanvasElement) -> Option<CanvasRenderingContext2d> {
    canvas
        .get_context("2d")
        .ok()
        .flatten()
        .and_then(|ctx| ctx.dyn_into::<CanvasRenderingContext2d>().ok())
}

fn resize_canvas(canvas: &HtmlCanvasElement, ctx: &CanvasRenderingContext2d) {
    let rect = canvas.get_bounding_client_rect();
    let dpr = window()
        .map(|window| window.device_pixel_ratio().min(2.0))
        .unwrap_or(1.0);
    canvas.set_width((rect.width().max(1.0) * dpr).floor() as u32);
    canvas.set_height((rect.height().max(1.0) * dpr).floor() as u32);
    let _ = ctx.set_transform(dpr, 0.0, 0.0, dpr, 0.0, 0.0);
}

fn resize_canvas_to_stage(
    canvas: &HtmlCanvasElement,
    ctx: &CanvasRenderingContext2d,
    stage: &HtmlElement,
) {
    let rect = stage.get_bounding_client_rect();
    let dpr = window()
        .map(|window| window.device_pixel_ratio().min(2.0))
        .unwrap_or(1.0);
    canvas.set_width((rect.width().max(1.0) * dpr).floor() as u32);
    canvas.set_height((rect.height().max(1.0) * dpr).floor() as u32);
    let _ = canvas.style().set_property("width", &format!("{}px", rect.width()));
    let _ = canvas.style().set_property("height", &format!("{}px", rect.height()));
    let _ = ctx.set_transform(dpr, 0.0, 0.0, dpr, 0.0, 0.0);
}

fn languages_from_canvas(canvas: &HtmlCanvasElement) -> Vec<Language> {
    let raw = canvas
        .get_attribute("data-languages")
        .unwrap_or_else(|| "[]".to_string());
    let Ok(value) = serde_json::from_str::<Value>(&raw) else {
        return Vec::new();
    };
    let Some(rows) = value.as_array() else {
        return Vec::new();
    };

    rows.iter()
        .map(|row| {
            if let Some(array) = row.as_array() {
                Language {
                    name: array.first().and_then(Value::as_str).unwrap_or_default().to_string(),
                    uses: array.get(2).and_then(Value::as_str).unwrap_or_default().to_string(),
                }
            } else {
                Language {
                    name: row.get("name").and_then(Value::as_str).unwrap_or_default().to_string(),
                    uses: row.get("uses").and_then(Value::as_str).unwrap_or_default().to_string(),
                }
            }
        })
        .collect()
}

fn redirect_gate(payload: &Value) {
    let Some(window) = window() else {
        return;
    };
    let supported: Vec<String> = array_at(payload, &["locales"])
        .iter()
        .map(|locale| value_str(locale))
        .collect();
    let stored = window
        .local_storage()
        .ok()
        .flatten()
        .and_then(|storage| storage.get_item("preferredLocale").ok().flatten());
    let browser = window
        .navigator()
        .language()
        .unwrap_or_else(|| "en".to_string())
        .chars()
        .take(2)
        .collect::<String>()
        .to_lowercase();
    let target = stored
        .filter(|locale| supported.iter().any(|supported| supported == locale))
        .or_else(|| {
            if supported.iter().any(|locale| locale == &browser) {
                Some(browser)
            } else {
                None
            }
        })
        .unwrap_or_else(|| "en".to_string());
    let base = str_at(payload, &["base"]);
    let normalized_base = if base.ends_with('/') {
        base
    } else {
        format!("{base}/")
    };
    let _ = window.location().replace(&format!("{normalized_base}{target}/"));
}

fn prefers_reduced_motion() -> bool {
    window()
        .and_then(|window| window.match_media("(prefers-reduced-motion: reduce)").ok().flatten())
        .map(|media| media.matches())
        .unwrap_or(false)
}

fn window() -> Option<Window> {
    web_sys::window()
}

fn value_at<'a>(value: &'a Value, path: &[&str]) -> Option<&'a Value> {
    let mut current = value;
    for key in path {
        current = current.get(*key)?;
    }
    Some(current)
}

fn array_at<'a>(value: &'a Value, path: &[&str]) -> &'a [Value] {
    value_at(value, path)
        .and_then(Value::as_array)
        .map(Vec::as_slice)
        .unwrap_or(&[])
}

fn str_at(value: &Value, path: &[&str]) -> String {
    value_at(value, path)
        .and_then(Value::as_str)
        .unwrap_or_default()
        .to_string()
}

fn field_str(value: &Value, key: &str) -> String {
    value
        .get(key)
        .and_then(Value::as_str)
        .unwrap_or_default()
        .to_string()
}

fn field_bool(value: &Value, key: &str) -> bool {
    value.get(key).and_then(Value::as_bool).unwrap_or(false)
}

fn value_str(value: &Value) -> String {
    value.as_str().unwrap_or_default().to_string()
}

fn pair_str(value: &Value, index: usize) -> String {
    value
        .as_array()
        .and_then(|array| array.get(index))
        .and_then(Value::as_str)
        .unwrap_or_default()
        .to_string()
}

fn text(html: &mut String, value: &str) {
    for ch in value.chars() {
        match ch {
            '&' => html.push_str("&amp;"),
            '<' => html.push_str("&lt;"),
            '>' => html.push_str("&gt;"),
            _ => html.push(ch),
        }
    }
}

fn attr(html: &mut String, value: &str) {
    for ch in value.chars() {
        match ch {
            '&' => html.push_str("&amp;"),
            '<' => html.push_str("&lt;"),
            '>' => html.push_str("&gt;"),
            '"' => html.push_str("&quot;"),
            '\'' => html.push_str("&#39;"),
            _ => html.push(ch),
        }
    }
}

fn json_attr(html: &mut String, value: &Value) {
    let raw = serde_json::to_string(value).unwrap_or_else(|_| "[]".to_string());
    attr(html, &raw);
}
