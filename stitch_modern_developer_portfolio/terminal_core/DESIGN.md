---
name: Terminal Core
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c0c7d4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b919d'
  outline-variant: '#414752'
  surface-tint: '#a2c9ff'
  primary: '#a2c9ff'
  on-primary: '#00315c'
  primary-container: '#58a6ff'
  on-primary-container: '#003a6b'
  inverse-primary: '#0060aa'
  secondary: '#74dd7e'
  on-secondary: '#003910'
  secondary-container: '#007f2d'
  on-secondary-container: '#c4ffc2'
  tertiary: '#ffb77c'
  on-tertiary: '#4d2700'
  tertiary-container: '#e48f43'
  on-tertiary-container: '#5a2e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004882'
  secondary-fixed: '#90fa97'
  secondary-fixed-dim: '#74dd7e'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#00531b'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77c'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3900'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  code-md:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin: 48px
  container-max: 1280px
---

## Brand & Style

This design system is built for the "hacker-chic" aesthetic, blending the raw, functional power of a CLI with the polished refinement of a high-end code editor. The brand personality is technical, precise, and authoritative, targeting a peer audience of engineers, technical recruiters, and CTOs.

The visual style is a hybrid of **Brutalism** and **Minimalism**. It utilizes structured grids, monospaced typography, and syntax-based color coding to signal expertise. The emotional response is one of trust in technical competence—evoking the feeling of "looking under the hood" of a high-performance machine. Key characteristics include sharp corners, scanline textures, and a systematic approach to information hierarchy.

## Colors

The palette is rooted in a "Pure Dark" philosophy. The background uses a deep black to maximize contrast for syntax-inspired accents. 

- **Primary (Neon Blue):** Used for primary actions, current directory indicators, and function names.
- **Secondary (Neon Green):** Used for success states, "Available for Work" indicators, and string literals.
- **Tertiary (Neon Orange):** Used for warnings, variables, and decorative accents.
- **Neutral:** A range of deep grays derived from the dark background to handle borders, grid lines, and inactive text.

Color application follows syntax highlighting logic: different types of content (tags, attributes, text) are assigned specific colors to enhance scannability.

## Typography

This design system utilizes a high-contrast typographic pairing. **Space Grotesk** serves as the primary typeface for headers and UI labels; its technical, geometric construction bridges the gap between a standard sans-serif and a monospace font. For long-form reading and body copy, **Inter** provides maximum legibility and a neutral professional tone.

All headlines should be treated as "Code Blocks" or "Command Inputs," often preceded by a `>` or `$` prompt. Use uppercase for labels and status indicators to reinforce the institutional, terminal-like feel.

## Layout & Spacing

The layout is governed by a **Fixed Grid** system that mimics the structural rigidity of an IDE. A 12-column grid provides the framework, but components are often offset to create "terminal window" compositions.

A subtle background grid pattern (1px lines every 24px) should be visible at low opacity to ground the elements. Spacing follows a strict 4px base unit. Vertical rhythm is emphasized through the use of "Line Numbers" on the far left of the main content sections, as if the entire website is a single open file in an editor.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Bold Borders** rather than traditional shadows. 

1.  **The Base:** The deep black (#0A0A0A) background is the lowest level.
2.  **The Canvas:** A 1px grid overlay defines the primary workspace.
3.  **The Windows:** Content containers use a slightly lighter surface color (#161B22) and are defined by 1px solid borders in a neutral gray (#30363D).
4.  **The Interaction:** Active elements or "hovered windows" may glow slightly using a low-spread outer glow in the primary accent color, mimicking a CRT monitor bloom.

Terminal "Window" components should feature a header bar with three colored dots (red, yellow, green) in the top-left corner to simulate a macOS or Linux window manager.

## Shapes

The design system uses a **Sharp (0px)** roundedness philosophy. In a terminal environment, everything is pixel-perfect and rectangular. All buttons, cards, input fields, and window containers must have 90-degree corners.

The only exception is the three "window control" dots, which are perfect circles. All other UI icons should be stroke-based and maintain a geometric, technical aesthetic.

## Components

### Buttons
Primary buttons are solid blocks of the accent color with black text. Secondary buttons are "Ghost" style with 1px borders. All buttons should show a "block cursor" `_` character that blinks on hover.

### Cards (Terminal Windows)
Cards should look like editor panes. They feature a top bar with a file name (e.g., `project.tsx`) and window controls. Content inside the card should be indented, often accompanied by line numbers on the left.

### Chips (Syntax Tags)
Tags for skills (e.g., "React", "Node.js") should look like code parameters or variables. Example: `const skill = 'React'`. They should use syntax-specific coloring (e.g., orange for strings).

### Input Fields
Inputs are styled as command-line prompts. They start with a `$` or `>` prefix. Instead of a standard text cursor, use a thick block cursor that mimics the classic terminal input experience.

### Status Indicators
Include a "System Status" component in the header or footer, showing "Uptime", "Current Branch", and "Latency" to lean into the technical narrative.