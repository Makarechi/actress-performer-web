# coding_standards.md

## Goal
Сделать код простым, предсказуемым и удобным для поддержки. Сайт может быть красивым и технически сильным, но не должен становиться монстром.

## General principles
- TypeScript by default.
- Components small and focused.
- Content separated from presentation.
- Media data not hardcoded across components.
- No magic strings for locales.
- No heavy client JavaScript without reason.
- Accessibility built in, not added later.

## Naming
Use clear names:

```txt
HeroSection
ShowreelBlock
VoiceSampleCard
LanguageBadge
CastingFacts
ContactBlock
PressKitDownloads
```

Avoid vague names:

```txt
Block1
NiceSection
SuperCard
ContentThing
```

## Folder suggestion
```txt
src/
  components/
    common/
    media/
    sections/
    casting/
  content/
  data/
  layouts/
  pages/
  styles/
  utils/
```

## Component rules
A component should:

- have a clear purpose;
- receive typed props;
- not fetch unrelated data;
- not contain long localized strings inline;
- be easy to test visually.

## Styling
Acceptable:

- Tailwind;
- CSS Modules;
- scoped CSS;
- design tokens.

Avoid:

- random inline styles everywhere;
- global CSS hacks;
- unnecessary animation libraries;
- hardcoded breakpoints scattered everywhere.

## Media loading
- Images below first screen lazy loaded.
- Video embeds lazy loaded.
- Audio not preloaded aggressively.
- Width/height specified to avoid layout shift.
- Hero image optimized and prioritized.

## SEO component
Every page should provide:

- title;
- description;
- canonical;
- og image;
- locale;
- hreflang alternatives.

## Error handling
- Broken media should fail gracefully.
- Missing translation should fallback predictably.
- Missing optional field should not render empty labels.

## Accessibility checklist in code review
- semantic HTML;
- alt attributes;
- keyboard focus;
- aria labels where needed;
- real buttons for actions;
- real links for navigation;
- sufficient contrast.

## Pull request checklist
- [ ] Page works on mobile.
- [ ] No console errors.
- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Media optimized.
- [ ] SEO metadata present.
- [ ] Text reviewed.
- [ ] No private data leaked.

