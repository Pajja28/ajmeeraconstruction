# Cloudflare Pages & Next.js: Fixing 404 Errors for Bots

## The Issue
After deploying a Next.js static export (`output: 'export'`) to Cloudflare Pages, users might report:
-   **Google Inspection Tool / Search Console** shows "404 Not Found" or "Soft 404".
-   Social media bots (Twitter/Facebook/LinkedIn cards) fail to load metadata.
-   Direct links work fine in browsers, but fail for crawlers.

## The Root Cause
By default, Next.js generates static files like `out/about.html`.
-   **Browsers**: Often handle `about` -> `about.html` transparently.
-   **Cloudflare Pages**: Treats URLs ending in `/` as directories.
-   **Bots**: Are strict. If they request `https://site.com/about/` and the server looks for `about/index.html` but only finds `about.html`, it returns a 404.

## The Fix: Trailing Slashes
We enabled `trailingSlash: true` in `next.config.ts`. This forces Next.js to generate **directories** instead of files:
-   **Before**: `out/about.html`
-   **After**: `out/about/index.html`

This structure matches standard web server behavior for "clean URLs" and ensures that `/about/` always resolves to an actual `index.html` file, satisfying both strict bots and browsers.

### Configuration (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This is the critical fix for Cloudflare Pages 404s
  trailingSlash: true,
  reactCompiler: true,
};
```
