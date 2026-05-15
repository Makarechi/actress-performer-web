# Artist And Creative Tech Notes

## Product Direction
The site should combine three layers:

1. Official hub: clear public center for name, work, links, contact, SEO and updates.
2. Casting mode: fast, practical profile for casting directors, voice studios and event agencies.
3. Stage mode: optional cinematic experience using light, language, voice, image and movement.

## Ideas Adapted From References
- Artist hubs: keep the main navigation short and action-oriented.
- Premium artist sites: use fewer words where strong media can carry the feeling.
- Era-based music sites: support a changeable `Current focus` block for new reels, premieres or booking pushes.
- WebGL / creative tech portfolios: make the experience feel like entering a stage, not just browsing a CV.
- Music and audio-reactive references: reserve one strong voice/music section for later audio-reactive work.
- Cinematic portfolios: organize public work as selected references, not a large unfocused gallery.

## Implementation Choice
The project now has:

- `/[locale]/` official hub.
- `/[locale]/casting/` fast casting mode.
- `/[locale]/stage/` cinematic stage mode.
- `/[locale]/work/` selected work index inspired by cinematic portfolios.

The stage mode has a canvas-based stage light and language orbit prototype. It stays optional so casting users can skip directly to the practical page.

## Added From Latest Reference Review
- Official artist hub logic: the home page now has a changeable current campaign block for newest reels, premieres, press-kit pushes or event booking.
- Cinematic portfolio logic: work is separated into Acting, Voice & dubbing, Music and Hosting instead of relying on a raw Instagram feed.
- Commercial artist-site logic: every work area points to the exact missing media that should be added later.
- Language-site logic: the work page keeps the selected language in the dropdown paths, so each market can stay in its own version.
- Locale visual direction: every language now gets a distinct visual theme across ordinary pages, not only Stage Mode.

## Locale Visual Themes
- English: constellation / international casting.
- Slovak: mountains, Bratislava, Central Europe.
- Polish: amber theatre light and literary warmth.
- Italian: opera spotlight, cinema face, musicality.
- Ukrainian: blue-gold poetic stage and sunflower-light warmth.
- Russian: red velvet, voice, dubbing and controlled dramatic tension.
