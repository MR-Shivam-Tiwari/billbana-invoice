# BillBana — GST Invoice Generator

An original, dependency-free invoice generator that runs entirely in the browser: add items, set GST per item, and print or save a clean invoice as PDF. No backend, no sign-up, no data leaves the page.

## Features
- Line items with qty, rate and per-item GST %; live subtotal, GST and grand total
- Business / client details, invoice number and date
- Print stylesheet that hides controls for a clean PDF invoice

## Run / deploy
Open `index.html` in a browser, or deploy the folder as a static site:
```bash
npx vercel deploy
```
Works on Vercel, Netlify or any static host with zero build configuration.

## Files
- `index.html` — page structure · `styles.css` — layout + print styles · `app.js` — invoice logic

## Interview points
- Why client-side: instant, private, zero hosting cost for this use case — and when a backend would be needed (saved invoices, multi-user, numbering rules).
- Extension ideas: saved invoices in localStorage, UPI QR on the invoice, INR amount-in-words, a Next.js version with accounts and PDF export.
