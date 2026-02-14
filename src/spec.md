# Specification

## Summary
**Goal:** Replace the site header logo image while keeping the existing asset path unchanged.

**Planned changes:**
- Update `frontend/public/assets/generated/pachavda-wordmark-logo.dim_800x300.png` to visually match the newly uploaded logo (`download-1.webp`) and ensure it is web-optimized.
- Verify the header logo rendered by `frontend/src/components/site/SiteHeader.tsx` displays correctly on mobile and desktop without layout issues.

**User-visible outcome:** The website header shows the new uploaded logo while all existing UI references to the logo continue to work (same image path).
