# Site Skeleton

`site-skeleton.css` is the project's shared responsive layout. New pages should reuse it instead of writing their own viewport, safe-area, typography, and button foundations.

## Choose a page layout

- **Text, activity, or card page:** Copy `page-template.html`. Use `.app-shell` and `.content-card`. The card adapts to available width and height and can scroll when content is taller than the screen.
- **Full-screen illustrated page:** Copy `artwork-page-template.html`. Use `.app-viewport` and `.responsive-artboard`. The stage fills the viewport; the shared CSS applies the selected image fit for portrait and landscape.

## Artwork fit

Set `--art-fit-portrait` and `--art-fit-landscape` on `.responsive-artboard`:

- `cover` fills the view and can crop the image edges.
- `contain` preserves the whole image and can leave empty bands around it.
- `fill` uses every pixel of the view and can distort the image.

Choose the fit once for the artwork, based on which tradeoff preserves the important content. Use portrait and landscape `<source>` images only when the composition needs to differ between orientations.

## Interactive controls

Place controls in `.artboard-overlay` as HTML elements above the image. Set their orientation-specific percentage positions with the `--control-*-portrait` and `--control-*-landscape` variables. Keep changing text, audio state, and navigation in the HTML controls; text printed into an image cannot update when a user changes state. Use a transparent `.artboard-control--hit-area` only when the artwork already contains a static control graphic and no changing label needs to be visible.

## Shared behavior

- The template includes `viewport-fit=cover`; the viewport stage uses dynamic viewport units and has no document scroll. Device status and gesture bars remain part of the operating system UI.
- Standard content pages use safe-area padding and a readable maximum width.
- Buttons have at least a 48px touch target and a visible keyboard-focus style.
- Reduced-motion preferences are respected.

## Building pages

1. Copy the matching template and update its page content, title, links, and artwork.
2. Reuse the shared classes and tokens. Add page-specific CSS only for unique artwork, hotspot positions, or interactions.
3. Check the first page that uses a new layout on a phone-sized portrait view, a phone-sized landscape view, and desktop. Pages using the same template and fit policy should not need new viewport CSS.

`index.html` and `page2.html` predate this reusable artwork template and keep their existing page-specific navigation and hotspot logic. New illustrated pages should start from `artwork-page-template.html`.
