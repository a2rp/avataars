# Random Avataars Documentation

## Overview

Random Avataars is a modern React application for generating unique avatars using DiceBear.

The application provides multiple avatar styles, random style generation, individual style variations, PNG downloads, and direct SVG copying.

The project is designed with a reusable component-based structure and is deployed using GitHub Pages.

## Live Application

https://a2rp.github.io/avataars/

## Core Features

- Generate unique DiceBear avatars
- 28 available avatar styles
- Random Style generation
- Generate variations within a selected style
- Scrollable avatar style selector
- Display the actual generated style
- Generate a unique seed for each avatar
- Download avatars as PNG
- Export PNG images at 1024 x 1024 resolution
- Copy generated SVG markup
- Toast notifications for important actions
- Responsive interface
- Reusable React components
- Custom project branding
- GitHub Pages deployment

## Technology Stack

The project uses:

- React
- Vite
- JavaScript
- DiceBear
- styled-components
- React Icons
- React Toastify
- html-react-parser
- copy-to-clipboard
- ESLint
- gh-pages

## Project Architecture

The application separates the generator logic, presentation components, styles, and shared data.

```text
avataars/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── preview.png
├── src/
│   ├── components/
│   │   ├── AvatarControls/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── AvatarPreview/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   ├── Footer/
│   │   │   ├── index.jsx
│   │   │   └── styled.js
│   │   └── Header/
│   │       ├── index.jsx
│   │       └── styled.js
│   ├── data/
│   │   └── links.js
│   ├── App.jsx
│   ├── avataarStyles.js
│   ├── index.css
│   ├── main.jsx
│   ├── randomAvataar.jsx
│   └── styled.js
├── .gitignore
├── DOCUMENTATION.md
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── screenshot.png
└── vite.config.js
```

## Application Entry Point

### `src/main.jsx`

This is the browser entry point of the React application.

Its responsibilities include:

- Importing the global stylesheet
- Finding the root HTML element
- Rendering the React application
- Mounting the `App` component

The application uses React's `createRoot` API.

## Application Component

### `src/App.jsx`

`App.jsx` acts as the main application wrapper.

It renders the avatar generator and configures React Toastify.

Toast notifications are used to provide feedback for operations such as:

- Successful PNG download
- Successful SVG copy
- Download errors
- Clipboard errors
- Missing generated avatar

Keeping the toast configuration at the application level allows notifications to be triggered from the generator logic without duplicating toast containers.

## Avatar Generator

### `src/randomAvataar.jsx`

This file contains the main avatar-generation logic.

It coordinates:

- Selected avatar style
- Random style mode
- Generated SVG
- Generated seed
- Generated style name
- Avatar regeneration
- PNG export
- SVG copying

The visual parts of the generator are delegated to reusable components.

### Generator State

The generator maintains information including:

- Current SVG
- Current seed
- Selected style ID
- Actual generated style name

The selected style and generated style are intentionally separate.

This is important because when **Random Style** is selected, the menu remains in Random Style mode while the actual generated avatar can belong to any of the available DiceBear styles.

## Random Style Mode

Random Style is a special option placed before the individual DiceBear styles.

When this mode is selected, the application randomly chooses one of the available avatar styles.

The general process is:

```text
Random Style selected
        ↓
Generate requested
        ↓
Choose random style index
        ↓
Get corresponding DiceBear style
        ↓
Generate unique seed
        ↓
Create avatar
        ↓
Update SVG preview
        ↓
Display actual generated style
```

Every time the user generates another avatar while Random Style remains selected, another style can be chosen.

For example:

```text
Random Style
    ↓
Notionists Neutral

Generate again
    ↓
Pixel Art

Generate again
    ↓
Bottts
```

The random selection is independent from the random seed used to generate the avatar variation.

## Fixed Style Mode

Users can also select a specific style.

For example:

```text
Micah
```

When Micah is selected, generating another avatar keeps the Micah style but creates a new variation using a new seed.

Conceptually:

```text
Micah selected
      ↓
Generate
      ↓
New seed
      ↓
New Micah avatar
```

This provides two different generation modes:

```text
Random Style
→ Random style + random variation

Specific Style
→ Fixed style + random variation
```

## Avatar Styles

### `src/avataarStyles.js`

This file contains the supported DiceBear style definitions.

The application currently provides 28 styles:

1. Adventurer
2. Adventurer Neutral
3. Avataaars
4. Avataaars Neutral
5. Big Ears
6. Big Ears Neutral
7. Big Smile
8. Bottts
9. Bottts Neutral
10. Croodles
11. Croodles Neutral
12. Fun Emoji
13. Icons
14. Identicon
15. Initials
16. Lorelei
17. Lorelei Neutral
18. Micah
19. Miniavs
20. Notionists
21. Notionists Neutral
22. Open Peeps
23. Personas
24. Pixel Art
25. Pixel Art Neutral
26. Rings
27. Shapes
28. Thumbs

Each application style associates an internal identifier and display name with the corresponding DiceBear style implementation.

This allows the UI to work with simple IDs while the generator receives the actual DiceBear style object.

## Avatar Seed

Every generated avatar receives a unique seed.

The seed is constructed using time information combined with a random numeric value.

Conceptually:

```text
timestamp + random number
```

Example:

```text
1788285008347-46283
```

The seed is supplied to DiceBear during avatar generation.

Changing the seed creates a new variation even when the selected avatar style remains unchanged.

The current seed is displayed below the avatar preview.

## DiceBear Generation

The project uses `createAvatar` from DiceBear.

Conceptually, avatar creation works like this:

```js
createAvatar(style, {
    seed: [seed],
});
```

DiceBear returns an avatar representation that can then be converted into SVG markup.

The generated SVG becomes the primary avatar representation used by the application.

## Avatar Preview Component

### `src/components/AvatarPreview/index.jsx`

The AvatarPreview component is responsible for displaying the generated avatar.

It receives information from the main generator rather than managing avatar-generation state itself.

The component displays:

- Avatar Preview label
- Actual generated style name
- Generated status
- Generated SVG
- Unique seed

This separation keeps generation logic outside the presentation component.

### `src/components/AvatarPreview/styled.js`

This file contains styles specific to the preview component.

The preview includes:

- Large avatar display area
- Grid-style background
- Responsive avatar sizing
- Generated status badge
- Seed information
- Responsive mobile adjustments

## SVG Rendering

DiceBear generates SVG markup as a string.

The project uses `html-react-parser` to render that SVG inside the React component.

Conceptually:

```text
DiceBear
   ↓
SVG string
   ↓
html-react-parser
   ↓
React-rendered avatar
```

The original SVG string remains available for exporting and clipboard operations.

## Avatar Controls Component

### `src/components/AvatarControls/index.jsx`

This component contains the interactive generator controls.

Its responsibilities include displaying:

- Random Style option
- Individual avatar styles
- Selected style state
- Generate button
- PNG download button
- SVG copy button
- Export information

The component receives callback functions from the parent generator.

This means AvatarControls handles the interface while `randomAvataar.jsx` handles the actual generation and export logic.

## Scrollable Style Menu

The avatar style selector uses a vertically scrollable menu instead of a traditional HTML select dropdown.

This provides immediate visibility of multiple styles while keeping the control panel compact.

The first item is:

```text
Random Style
```

A divider visually separates Random Style from the individual DiceBear styles.

The currently selected option receives a highlighted state and check icon.

## React Icons

React Icons are used for interface actions instead of manually maintained SVG icon markup.

Icons are used for actions such as:

- Random generation
- Regeneration
- Download
- Copy
- Selected style indication
- Portfolio
- GitHub
- CodePen
- LinkedIn
- Facebook
- YouTube
- Email
- Support

This keeps icon usage consistent and reusable.

## PNG Download

The application can export the generated avatar as a PNG image.

The process is:

```text
Generated SVG
      ↓
Create SVG Blob
      ↓
Create temporary object URL
      ↓
Load into browser Image
      ↓
Draw onto Canvas
      ↓
Convert Canvas to PNG
      ↓
Create temporary download link
      ↓
Download image
```

The canvas dimensions are:

```text
1024 x 1024
```

This produces a high-resolution square PNG suitable for profile pictures and similar uses.

Temporary object URLs are revoked after use.

## SVG Copy

The original generated SVG markup can be copied directly to the clipboard.

The application uses `copy-to-clipboard` for this operation.

When copying succeeds, a success toast is displayed.

If the copy operation fails, an error toast is displayed.

SVG is useful when the avatar needs to remain scalable without losing quality.

## Header Component

### `src/components/Header/index.jsx`

The Header component displays:

- Project logo
- Random Avataars project name
- DiceBear Avatar Generator subtitle
- Number of available styles

The logo is stored at:

```text
public/logo.png
```

Because the application is deployed under a GitHub Pages repository path, the logo uses Vite's base URL.

Conceptually:

```jsx
src={`${import.meta.env.BASE_URL}logo.png`}
```

This ensures the image works both during development and under:

```text
/avataars/
```

on GitHub Pages.

## Header Styling

### `src/components/Header/styled.js`

The Header component includes responsive styling for:

- Logo
- Brand information
- Style count badge
- Desktop layout
- Small-screen layout

On very small screens, secondary information can be reduced to preserve space.

## Footer Component

### `src/components/Footer/index.jsx`

The Footer is a reusable component containing:

- Project logo
- Copyright
- Developer attribution
- Portfolio link
- GitHub link
- CodePen link
- LinkedIn link
- Facebook link
- YouTube link
- Email link
- Support link

The copyright year is generated dynamically using JavaScript.

This prevents the year from becoming outdated.

The developer name links to the portfolio website.

## Footer Links Data

### `src/data/links.js`

Footer link information is stored separately from the Footer component.

This keeps content data separate from presentation logic.

The file contains links for:

- Portfolio
- GitHub
- CodePen
- LinkedIn
- Facebook
- YouTube
- Email
- Support

This makes future link maintenance simpler because the URLs do not need to be embedded throughout the JSX structure.

## Styling Architecture

The project uses styled-components.

Reusable components contain their own:

```text
index.jsx
styled.js
```

pair.

For example:

```text
components/
└── Header/
    ├── index.jsx
    └── styled.js
```

The pattern is repeated for:

- Header
- AvatarPreview
- AvatarControls
- Footer

The main page-level styling remains in:

```text
src/styled.js
```

Global styles remain in:

```text
src/index.css
```

This provides separation between:

```text
Global styles
Page styles
Component styles
```

## Global Styling

### `src/index.css`

The global stylesheet establishes the base application behavior.

It includes a global box-sizing reset:

```css
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

It also defines:

- Minimum viewport dimensions
- Base font size
- Background color
- Text color
- Verdana body font
- Font rendering
- Default form font inheritance
- Responsive SVG and image behavior

## Typography

The interface uses two primary font families.

### Headings

Antonio is used for major headings and prominent text.

### Body

Verdana is used for normal interface and descriptive text.

This creates a clear visual difference between display typography and functional interface text.

## Design System

The application uses a restrained neutral visual system based primarily on:

```text
Black
White
Gray
```

The interface includes:

- Rounded cards
- Subtle borders
- Light backgrounds
- Clear typography
- Strong black primary actions
- Compact badges
- Consistent spacing
- Responsive controls

The objective is to keep attention on the generated avatar while maintaining a professional interface.

## Responsive Design

The application adapts to smaller displays.

On desktop, the generator is presented in two columns:

```text
Avatar Preview | Controls
```

On narrower screens it changes to:

```text
Avatar Preview
Controls
```

Additional responsive adjustments are applied to:

- Header
- Avatar area
- Style menu
- Export buttons
- Footer
- Typography
- Spacing

## Toast Notifications

React Toastify provides feedback for user operations.

Examples include:

```text
PNG downloaded.
SVG copied to clipboard.
Generate an avatar first.
Unable to prepare the image.
Unable to download the avatar.
Unable to copy SVG.
```

The ToastContainer is configured at the application level.

## Public Assets

The `public` directory contains static application assets.

```text
public/
├── favicon.ico
├── logo.png
└── preview.png
```

### `favicon.ico`

Used as the browser favicon.

### `logo.png`

Used for project branding in the application Header and Footer.

### `preview.png`

Project preview asset.

## HTML Configuration

### `index.html`

The main HTML document contains application metadata.

It includes:

- Character encoding
- Responsive viewport
- Description metadata
- Theme color
- Favicon
- Antonio font loading
- Application title
- React root element

The application JavaScript is loaded through the Vite module entry point.

## Vite Configuration

### `vite.config.js`

Vite provides the development and production build system.

The project configures React through:

```js
react();
```

The GitHub Pages base path is:

```js
base: "/avataars/";
```

Production source maps are disabled:

```js
build: {
    sourcemap: false,
}
```

The base path is important because the application is hosted inside the `avataars` repository path rather than at the root of the GitHub Pages domain.

## ESLint

ESLint is used to check JavaScript and React code quality.

Run:

```bash
npm run lint
```

A clean lint run should complete without errors or warnings.

## Installation

Clone the repository:

```bash
git clone https://github.com/a2rp/avataars.git
```

Enter the project directory:

```bash
cd avataars
```

Install dependencies:

```bash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

## Production Build

Create a production build with:

```bash
npm run build
```

The compiled application is generated inside:

```text
dist/
```

The `dist` directory is generated output and should not be manually maintained.

## Production Preview

The production build can be tested locally with:

```bash
npm run preview
```

## GitHub Pages Deployment

The project uses the `gh-pages` package for deployment.

The deployment process is:

```text
Source code
    ↓
npm run deploy
    ↓
predeploy
    ↓
npm run build
    ↓
Vite creates dist
    ↓
gh-pages publishes dist
    ↓
GitHub Pages
```

Deploy with:

```bash
npm run deploy
```

The live application is available at:

https://a2rp.github.io/avataars/

## GitHub Pages Base Path

Since this is a repository-level GitHub Pages deployment, application assets must respect:

```text
/avataars/
```

For assets handled through Vite, `import.meta.env.BASE_URL` can be used when the runtime path needs to respect the configured base.

For example:

```jsx
<img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan" />
```

This avoids incorrect requests such as:

```text
https://a2rp.github.io/logo.png
```

and instead resolves the asset under the project deployment path.

## Available npm Scripts

### Start Development

```bash
npm run dev
```

### Run ESLint

```bash
npm run lint
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

The `predeploy` script automatically runs the production build before deployment.

## Recommended Development Workflow

A normal development cycle is:

```text
Make changes
    ↓
npm run lint
    ↓
npm run build
    ↓
Test locally
    ↓
git add .
    ↓
git commit
    ↓
git push
```

When the live application also needs updating:

```text
Make changes
    ↓
npm run lint
    ↓
npm run deploy
    ↓
git add .
    ↓
git commit
    ↓
git push
```

## Error Handling

The application checks important browser operations before reporting success.

Examples include:

- Ensuring SVG exists before export
- Checking Canvas context availability
- Handling image-loading errors
- Checking clipboard-copy result
- Revoking temporary object URLs

User-facing errors are communicated through toast notifications.

## Accessibility Considerations

Interactive elements use semantic buttons and links.

The project also includes:

- Button `type` attributes
- Descriptive image alt text
- Navigation labels
- Visible selected states
- Keyboard focus styling
- Clear button labels
- Sufficiently distinct primary actions

## Performance

The production application is built and minified by Vite.

Production source maps are disabled.

DiceBear and its avatar style collection contribute significantly to the JavaScript bundle because multiple avatar implementations are available to the generator.

The application remains fully functional even if Vite reports a chunk-size advisory during production builds. The advisory itself does not indicate a failed build.

## Browser Requirements

The application relies on modern browser features including:

- ES modules
- Blob
- Object URLs
- Canvas
- SVG
- Clipboard-related browser functionality
- Modern CSS

A current version of Chrome, Edge, Firefox, Safari, or another modern browser is recommended.

## Security and Privacy

Avatar generation happens in the browser.

The application does not require users to create an account or provide personal information to generate an avatar.

Generated avatar data is handled within the frontend application.

External navigation links are explicitly defined in the project's link configuration.

## Maintenance

When adding another DiceBear style:

1. Import the required style from the DiceBear collection.
2. Add the style definition to `src/avataarStyles.js`.
3. Provide a unique ID.
4. Provide a readable display name.
5. Verify that the new style appears in the scrollable selector.
6. Test fixed-style generation.
7. Test Random Style generation.
8. Run ESLint.
9. Run a production build.

The total style count displayed in the interface is derived from the styles collection, so it updates automatically when the collection changes.

## Testing Checklist

Before publishing an update, verify:

- Application loads successfully
- Logo loads correctly
- Favicon loads correctly
- Random Style is selectable
- Random Style generates avatars from different styles
- Specific styles remain fixed during regeneration
- Actual generated style name is displayed
- Unique seed changes when appropriate
- Avatar SVG renders correctly
- PNG download works
- Downloaded PNG is valid
- SVG copy works
- Toast notifications work
- Style menu scrolls correctly
- Desktop layout works
- Mobile layout works
- Footer links work
- Support link works
- ESLint passes
- Production build succeeds
- GitHub Pages deployment loads correctly

## Repository

GitHub:

https://github.com/a2rp/avataars

## Author

**Ashish Ranjan**  
Full-Stack Web Developer

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

## Support

Support the project and future development:

https://a2rp-donation-page.netlify.app/

## License

Random Avataars is released under the MIT License.

See:

```text
LICENSE
```

for the complete license text.

---

Copyright © 2026 Ashish Ranjan. All rights reserved.
