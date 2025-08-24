# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

EMN-Quartz is a customized Quartz v4 installation - a static site generator that transforms Markdown content into fully functional websites. This specific instance is configured for "Erlend Mekker Nice" (EMN), a Norwegian business site for pedalboard and technical solutions.

Quartz v4 is built with TypeScript, uses esbuild for bundling, and employs a plugin-based architecture for extensibility. The site is configured in Norwegian locale with custom branding and color scheme.

## Essential Development Commands

### Build and Development
```bash
# Build the site for production
npx quartz build

# Build and serve locally with hot reload (development)
npx quartz build --serve

# Build with bundle analysis
npx quartz build --bundleInfo

# Serve documentation locally
npm run docs
```

### Code Quality and Testing
```bash
# Type check and format validation
npm run check

# Format code with Prettier
npm run format

# Run tests
npm test

# Performance profiling
npm run profile
```

### Content Management
```bash
# Create new content (interactive setup)
npx quartz create

# Watch and rebuild on content changes (when serving)
npx quartz build --serve
```

## Architecture Overview

### Core Components

**Build System (`quartz/build.ts`)**
- Main build orchestrator that processes Markdown files
- Uses workers for parallel processing when >128 files
- Implements hot-reload via WebSocket (port 3001) and HTTP server (port 8080)
- Pipeline: Parse → Transform → Filter → Emit

**Plugin System**
- **Transformers**: Process content through various stages (FrontMatter, Syntax Highlighting, etc.)
- **Filters**: Remove unwanted content (RemoveDrafts)  
- **Emitters**: Generate output files (ContentPage, Assets, etc.)

**Component System (`quartz/components/`)**
- React-like TSX components for layout and UI
- Uses Preact for rendering to static HTML
- Components can declare CSS, beforeDOMLoaded, and afterDOMLoaded scripts
- Layout configured in `quartz.layout.ts`

### Configuration Files

**`quartz.config.ts`**
- Main configuration for plugins, transformers, filters, and emitters
- Site-specific settings (title, theme, analytics, locale)

**`quartz.layout.ts`** 
- Defines page layout components and their positioning
- Separate layouts for content pages vs list pages

**`package.json`**
- Node.js 20+ and npm 9.3.1+ required
- Main scripts and dependencies defined here

### Content Structure
- All content lives in `content/` directory
- Markdown files with frontmatter support
- Assets and images stored alongside content
- Ignores patterns: `private`, `templates`, `.obsidian`

### Build Process
1. **CLI Bootstrap** (`bootstrap-cli.mjs`): Parses args, transpiles TypeScript
2. **Content Processing**: Recursively processes Markdown files
3. **Plugin Pipeline**: Transforms → Filters → Emitters  
4. **Asset Generation**: Bundles CSS/JS, processes images
5. **Static Output**: Generates site in `public/` directory

### Key Features
- Hot-reload development server
- Single Page Application (SPA) routing
- Obsidian compatibility (wikilinks, backlinks)
- Plugin extensibility
- TypeScript throughout
- Sass/SCSS styling support

### Customizations for EMN
- Norwegian locale (`no-NB`)  
- Custom orange/brown color scheme
- Shantell Sans typography
- Custom footer links (Pixelfed, Instagram, Band)
- Plausible analytics configured
- Some components disabled (Search, Explorer, Graph)

## Common Development Workflows

**Adding New Content**
1. Create `.md` files in `content/` directory
2. Use frontmatter for metadata
3. Site rebuilds automatically when serving

**Modifying Layout**
1. Edit `quartz.layout.ts` to change component placement
2. Components are imported from `quartz/components/index.ts`

**Custom Styling**
1. Global styles in `quartz/styles/custom.scss`
2. Component-specific styles in individual component files

**Plugin Development**
1. Create plugins in `quartz/plugins/` directory
2. Export and configure in `quartz.config.ts`

**Component Development**  
1. Create `.tsx` files in `quartz/components/`
2. Export in `quartz/components/index.ts`
3. Use in layouts via `Component.YourComponent()`
