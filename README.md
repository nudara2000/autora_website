# Autora Spare Parts Website

This version is intentionally simple and works with Node.js 18.

## Start the website

1. Open Terminal inside this folder.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the address shown in Terminal.

## Easy editing

- Edit products and categories in `src/data.js`.
- Edit each section inside `src/components`.
- Edit colours and design in `src/App.css`.

## Component files

- `PartsCatalogue.jsx` — search, filters and product cards
- `Categories.jsx` — category buttons
- `WhyAutora.jsx` — business information
- `Contact.jsx` — contact form
- `Header.jsx` — logo and navigation
- `Hero.jsx` — opening section
- `Footer.jsx` — bottom section

## Adding product photos

Place photos inside the `public/images` folder. Then set a product image in
`src/data.js`, for example:

```js
image: "/images/headlight.jpg"
```
