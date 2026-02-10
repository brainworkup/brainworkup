# GitHub Copilot Instructions for BrainWorkup Repository

## Project Overview

This is a Quarto-based static website for BrainWorkup Neuropsychology, a neuropsychology practice in Southern California. The site provides information about neuropsychological services, conditions treated, and contact information.

## Tech Stack

- **Static Site Generator**: Quarto (https://quarto.org/)
- **Deployment**: Netlify (https://www.netlify.com/)
- **Content Format**: Quarto Markdown (.qmd files)
- **Styling**: Custom CSS with theme.scss (Cosmo theme base)
- **Analytics**: Google Analytics (G-HW85H7H8P6)
- **Search**: Algolia search integration
- **Build Output**: `_site/` directory

## Build and Deploy Commands

```bash
# Preview the site locally (port 3000)
quarto preview

# Build the site
quarto render

# The site deploys automatically via Netlify when pushed to main branch
```

## Repository Structure

- `*.qmd` files: Quarto markdown content pages
- `_quarto.yml`: Main site configuration
- `theme.scss`: Custom theme styling
- `styles.css`: Additional custom styles
- `netlify.toml`: Netlify deployment and plugin configuration
- `_headers`: HTTP headers configuration for security and performance
- `_site/`: Build output directory (git-ignored, auto-generated)
- `_includes/`: HTML includes for headers and scripts
- `R/`: R scripts (if any)

## Content Organization

The site is organized into several main sections:
- **Services**: Pediatric, adult, and forensic neuropsychology services
- **Conditions**: ADHD, dyslexia, autism, executive function, concussion, etc.
- **About**: Information about Dr. Joey Trampush
- **FAQ**: Frequently asked questions
- **Contact**: Contact information and scheduling
- **Blog**: Blog posts (currently in draft mode)

## Coding Standards and Best Practices

### Quarto/Markdown Files
- Use `.qmd` extension for Quarto markdown files
- Follow existing frontmatter structure with YAML metadata
- Include proper SEO metadata (title, description, keywords)
- Use semantic HTML when embedding HTML in markdown
- Ensure all pages have proper meta tags for Open Graph and Twitter cards

### Styling
- Primary color scheme: Dark gray navbar (#33373f) with light foreground
- Link color: #AA336A
- Font size: 1.2em with line stretch of 1.14
- Use existing CSS classes and styles before creating new ones
- Follow the Cosmo theme conventions

### Content Guidelines
- Maintain professional, accessible language appropriate for healthcare
- Follow APA style for clinical terminology
- Ensure HIPAA compliance - never include patient information
- Use inclusive, person-first language when discussing conditions
- Keep content accurate and evidence-based

### Performance and SEO
- Optimize images (prefer .webp format)
- Use proper alt text for accessibility
- Include structured data where appropriate
- Maintain sitemap.xml
- Follow existing cache control headers in netlify.toml
- Use lazy loading for images when appropriate

### Security
- Never commit credentials or API keys
- Follow existing security headers in netlify.toml and _headers
- Ensure all external links open in new windows (link-external-newwindow: true)
- Maintain Content Security Policy settings

## Important Conventions

1. **Draft Content**: Set `draft: true` in frontmatter to prevent pages from rendering in production
2. **Navigation**: Update `_quarto.yml` navbar/sidebar when adding new sections
3. **Redirects**: Add redirects to netlify.toml for URL changes
4. **Mobile First**: Ensure responsive design for all pages
5. **Accessibility**: Include proper ARIA labels and semantic HTML

## Files to Never Modify Without Explicit Request

- `CNAME`: Domain configuration
- `netlify.toml`: Deployment configuration (except for adding redirects)
- `_headers`: Security headers (critical for site security)
- `manifest.json`: PWA manifest
- `.gitignore`: Git ignore rules
- `LICENSE`: MIT license file

## Testing and Validation

- Preview all changes locally with `quarto preview` before committing
- Check responsive design on mobile, tablet, and desktop viewports
- Validate that navigation works correctly after structural changes
- Test any new links to ensure they're not broken
- Verify SEO metadata is complete for new pages

## Common Tasks

### Adding a New Page
1. Create a new `.qmd` file in the appropriate directory
2. Add proper YAML frontmatter with title, description, keywords
3. Update `_quarto.yml` to include the page in navigation
4. Preview locally to verify rendering

### Updating Styles
1. Modify `theme.scss` for theme-level changes
2. Modify `styles.css` for custom overrides
3. Keep styles consistent with existing design system

### Adding Blog Posts
1. Create new `.qmd` file in `blog/` directory
2. Include proper frontmatter with date, author, categories
3. Ensure `draft: false` when ready to publish
4. Blog index will automatically update

## Boundaries and Constraints

- **Do not** modify patient-facing content without explicit medical/clinical review
- **Do not** change branding elements (logo, colors) without approval
- **Do not** remove or alter security headers
- **Do not** commit build artifacts from `_site/` directory
- **Do not** modify Netlify plugin configuration without understanding implications
- **Do not** change domain redirects without verification
- **Do not** alter Google Analytics or Algolia search configuration

## Additional Notes

- The site uses Quarto's freeze feature to cache computations
- Algolia search is configured for the Netlify deployment
- Multiple domain redirects point to brainworkup.org
- The site is optimized for Core Web Vitals performance
- PWA manifest is configured for mobile app-like experience
