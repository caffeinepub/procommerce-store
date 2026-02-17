# Specification

## Summary
**Goal:** Build a professional, Amazon/Shopify-like e-commerce storefront template with a cohesive theme, key store pages, a demo catalog of up to 100 products (with local static images), cart flow, and a persisted contact/inquiry form.

**Planned changes:**
- Create a consistent, responsive storefront UI theme (colors, typography, spacing, components) with English user-facing copy.
- Implement pages and navigation: Home, Catalog (product listing), Product Detail, Cart, Checkout (mock/demo), and Contact.
- Add a branding header with a static logo image area and a search bar (UI; may filter catalog).
- Implement product catalog support (up to 100 items) with product images, title, price, category, optional rating, short description, plus catalog grid with filtering and sorting.
- Seed 100 demo products and reference locally stored static product images (no external hotlinking).
- Implement cart functionality: add to cart, adjust quantity, remove items, and show subtotal/estimated total.
- Build a polished Home page with a hero section, featured categories/collections, and featured products linking to product details.
- Add footer/contact area displaying a business email plus a contact form with validation; persist submitted inquiries in the backend and expose retrieval via a backend query.
- Add and render generated static images under `frontend/public/assets/generated` (logo, hero, category visuals, product imagery).

**User-visible outcome:** Users can browse a fully themed storefront, search/filter/sort a demo catalog, view product details, manage a cart through a mock checkout, and submit a contact form that is saved and retrievable—using locally bundled images for a premium template feel.
