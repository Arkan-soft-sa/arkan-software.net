# arkan-software.net

Corporate website for **Arkan Software Company** (شركة أركان سوفتوير) — Riyadh, Saudi Arabia.

Static site, no build step, no dependencies. Open `index.html` or serve the folder.

```bash
python3 -m http.server 4173
```

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Single-page site: hero, services, integrations, fintech, process, about, contact |
| `assets/css/styles.css` | All styling — design tokens at the top, logical properties throughout so RTL mirrors automatically |
| `assets/js/main.js` | Arabic/English switching, mobile nav, scroll reveal, counters, form validation |
| `assets/img/logo.svg` · `logo-white.svg` · `favicon.svg` | Logo lockup rebuilt as vector from the corporate mark |
| `assets/img/riyadh-skyline.svg` · `artwork.py` | Riyadh skyline illustration and the generator that draws it |
| `robots.txt` · `sitemap.xml` | Update the domain if it ever changes |
| `.claude/launch.json` | Local preview config |
| `scratchpad/bundle.py` | Bundles the site into one ASCII-safe HTML file (for single-file hosting / previews) |

## Design system

Audited against the `modern-web-design` reference in
[freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills).

- **Contrast:** every text/surface pair clears **WCAG AAA** — 7:1 for body copy and captions,
  4.5:1 for display type. `--grad-brand` is decorative only (rails, dividers); anything carrying
  white text uses `--grad-brand-strong`, whose lightest stop still gives white 7.9:1.
- **Fluid type scale:** `--step--2` … `--step-5`, one clamp() ramp. No literal font sizes remain
  in the stylesheet apart from icon sizing.
- **Spacing scale:** `--space-2xs` … `--space-2xl`.
- **Motion tokens:** `--dur-fast/normal/slow/reveal` and `--ease`/`--ease-out`. Animation is
  transform/opacity only, so it stays on the compositor.
- **Touch targets:** `--tap` (44px) on every control, enforced at mobile widths.
- **Progressive enhancement:** reveal animations are gated behind a `js` class set in `<head>`,
  so the page renders complete when JavaScript fails.
- **Font loading:** Poppins + Inter load up front; the Arabic face (Tajawal) is fetched only when
  a visitor switches to Arabic.

## Light and dark rhythm

The fintech section's treatment — navy ground, glass cards, light type, numbered eyebrows — is
shared by three sections, and deliberately not by the rest:

| Section | Ground |
| --- | --- |
| Hero, services | light, day skyline |
| **Flow scene** | **dark** — the wiring and packets read far better on navy |
| Marquee, integrations | light / mist |
| **Fintech** | **dark** + night skyline with lit windows |
| Process, about | light / mist |
| **Contact** | **dark**, closing the page into the footer |
| Footer | `--navy-950`, a deeper tone so the closing zone reads as two layers |

Dark blocks are punctuation. If every section were dark, none of them would land.

Dark surfaces are built from measured values, not guesses: the glass card ground resolves to
`#1f2850` (white 14.2:1, secondary text 8.8:1), the form field ground to `#161d3a` (white 16.5:1,
placeholder exactly 7.0:1, error text 10.9:1). Field borders sit at 3.1:1 against the field so the
control edge is visible, and `color-scheme: dark` on the dark inputs makes the native select popup
match its surface.

Two implementation notes worth keeping:

- The flow section uses `overflow: clip`, **not** `overflow: hidden` — `hidden` makes the section a
  scroll container and the sticky pin silently stops working.
- `.section--horizon` (not `.section--dark`) reserves the bottom padding for the night skyline, so
  the other dark sections don't inherit a large empty band.

## Artwork

Original vector illustration, drawn for this site — no stock photography, no third-party assets,
nothing to licence. It is a few KB of SVG, sharp at any pixel density, and recolours from the
brand tokens.

**Logo**: the mark is a centred wordmark with a single two-faceted shard, rebuilt as vector
(`assets/img/logo.svg`, `logo-white.svg`, `favicon.svg`, and inline in the page so it uses the
page's webfont).

**Riyadh skyline** (`assets/img/artwork.py` generates it; `riyadh-skyline.svg` is the standalone
asset): Masmak Fort with its Najdi crenellations and date palms, the Riyadh TV tower,
Al Faisaliah's tapered mast and sphere, Kingdom Centre's bridged legs, a stepped
financial-district tower, the KAFD cluster, and a Najdi mosque with dome and minaret. Two
silhouette layers separate on scroll for depth. Appears three times: daylight under the hero,
after dark with lit windows under the fintech section, and as a low horizon in the footer.

**Najdi lattice** (`#najdi` SVG pattern): the triangular motif of Riyadh's mud-brick
crenellations and carved plaster, used as an architectural frieze between sections.

One rule governs every placement: **artwork never sits behind body text.** Measured: periwinkle
artwork over white only holds AAA below ~0.12 alpha — too faint to read as illustration. So each
piece gets its own text-free band, which is what lets it be rich while the page keeps 7:1
throughout. The footer skyline sits in the strip between the link columns and the legal bar for
exactly this reason.

To regenerate after editing the drawing:

```bash
python3 assets/img/artwork.py > /tmp/artwork.svg
```

## Scroll choreography

All of it is native CSS scroll-driven animation (`view-timeline` / `scroll(root)`) plus
`offset-path` — no GSAP, no Locomotive, no dependencies, nothing animating on the main thread.

| Effect | Where | Mechanism |
| --- | --- | --- |
| Reading progress rail | under the header | `animation-timeline: scroll(root block)` |
| Staggered hero entrance | hero copy + title lines | time-based `rise` keyframes with delays |
| Hero drift-out + band parallax | hero | `animation-timeline: view()`, `animation-range: exit` |
| **Pinned flow scene** | `#flow` | 260vh scroller + `position: sticky` pin; wires draw via `stroke-dashoffset`, nodes land staggered, captions hand off — all against `view-timeline-name: --flow` and `animation-range: contain …` |
| Travelling data packets | flow scene | `offset-path: path(…)` + `offset-distance`, looping only while the stage is on screen (`.is-live` via IntersectionObserver) |
| Card rise | services, integrations, steps, why | `view()` per card — no JS observer needed |
| Dark section lift | fintech | scroll-linked `scale` + top corner radius |
| Ambient ecosystem marquee | after the flow scene | two counter-running CSS tracks, paused on hover, direction-aware in RTL |

Three degradation paths, all deliberate:

1. **No scroll-timeline support** (Firefox today, older Safari) — `main.js` detects it, adds `no-sdt`,
   shows the scene in its finished state and steps the captions from the pin's scroll position.
2. **`prefers-reduced-motion`** — the scene unpins, packets and the pulse ring are removed, the
   marquee stops, and every scroll-linked animation is cancelled.
3. **Under 900px** — the scene unpins entirely and becomes a stacked, static diagram; the SVG
   wiring is hidden and replaced with short CSS connectors.

## Brand colours

Sampled from the company logo and exposed as CSS custom properties in `:root`:

Sampled from the logo: the plum wordmark, the orchid "software" line, and the lilac shard.
Darker plums are extensions of the same hue, used for grounds and type.

| Token | Value | From / used for |
| --- | --- | --- |
| `--plum-950` | `#1e0f27` | Footer ground |
| `--plum-900` | `#2a1435` | Dark sections, top bar |
| `--plum-800` | `#452452` | Headings, gradient mid |
| `--plum-700` | `#5a3168` | Tag text, deep accents |
| `--plum-600` | `#6c3f7b` | **Logo wordmark** — primary accent, eyebrows, icons |
| `--plum-500` | `#7e4c8e` | Gradient end for display type |
| `--plum-400` | `#9a6bb8` | **Logo "software"** — highlights |
| `--orchid-300` | `#af87ca` | Shard gradient start |
| `--lilac-200` | `#c9a9e0` | **Logo shard** — soft accents |
| `--lilac-100` | `#eadef3` | Chips, icon plates |
| `--mist-50` | `#f7f3fb` | **Logo ground** — section backgrounds |
| `--ink` / `--ink-soft` / `--ink-mute` | `#241628` / `#55465f` / `#5b4c65` | Type, purple-biased neutrals |
| `--on-card-mute` | `#cbbcdc` | Mute text on glass cards, where `--on-dark-mute` only reaches 6.5:1 |

Change a colour once in `:root` and it propagates everywhere.

## Contact details

Phone, fax, email, P.O. box and CR number appear in the top bar, the contact section, the footer
and the JSON-LD `Organization` block in `<head>`. Search for `4564947` / `info@arkan-software.net`
to find every instance.

## Bilingual content

English lives in the markup. Arabic lives in the `AR` object at the top of `assets/js/main.js`,
keyed by the `data-i18n` attribute on each element. Switching sets `lang` / `dir` on `<html>`,
swaps to the Tajawal typeface and mirrors the whole layout; the choice is remembered in
`localStorage`.

To add or edit copy:

1. Add the element with `data-i18n="some.key"` and the English text inside it.
2. Add `'some.key': '…'` to the `AR` object.

## Contact form

The form validates client-side (bilingual error messages) and then hands the brief to the
visitor's mail client via `mailto:`. To post it to a backend or form service instead, set the
endpoint near the top of section 6 in `assets/js/main.js`:

```js
var ENDPOINT = 'https://api.example.com/enquiries'; // POSTs JSON
```

## Notes

- Accessibility: skip link, labelled fields, `aria-invalid` on errors, `role="status"` on the
  success message, visible focus rings, and full `prefers-reduced-motion` support.
- The stat figures in the hero (`data-count` attributes on `.num`) are placeholders — replace them
  with real numbers before launch.
