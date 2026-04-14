# 🛒 DigiTools — Digital Tools Marketplace

> A premium digital tools buying website built with React.js, featuring a fully functional cart, product catalog, pricing plans, and responsive design.

---

## 🚀 Features

- **Smart Cart System** — Add/remove products with live count in the navbar, total price calculation, and a one-click checkout flow
- **Toggle View** — Seamlessly switch between the Products catalog and Cart view in one section
- **Toast Notifications** — Real-time feedback on every cart action using React Toastify

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | UI library & component architecture |
| **React Context API** | Global cart state management |
| **React Toastify** | Toast notification system |
| **CSS Modules (per-component)** | Scoped, maintainable styles |
| **Manrope (Google Fonts)** | Typography |
| **Font Awesome** | Social & UI icons |

---

## 📁 Project Structure

```
src/
├── assets/           # Images and icons
├── components/
│   ├── Navbar/       # Sticky nav with cart badge
│   ├── Banner/       # Hero section
│   ├── Stats/        # Key metrics strip
│   ├── MainSection/  # Products/Cart tab toggle
│   ├── ProductGrid/  # 3-column product layout
│   ├── ProductCard/  # Individual product card
│   ├── CartSection/  # Cart view with total
│   ├── CartItem/     # Single cart row
│   ├── StepsSection/ # How it works
│   ├── PricingCard/  # Single pricing plan
│   └── Footer/       # Site footer
├── context/
│   └── CartContext.js  # Cart state & actions
├── data/
│   ├── products.js     # Product catalog (8 items)
│   └── pricing.js      # Pricing plans data
├── App.js
├── App.css
├── index.js
└── index.css
```

---

## ⚙️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start

# 3. Build for production
npm run build
```

---

## 📸 Sections

1. **Navbar** — Sticky, with logo, nav links, cart icon badge
2. **Banner** — Hero with heading, description, CTA buttons, and image
3. **Stats** — 50K+ users, 200+ tools, 4.9★ rating, 99% satisfaction
4. **Products / Cart** — Toggle between product grid and cart
5. **How It Works** — 3-step process with numbered cards
6. **Pricing** — Starter / Professional / Enterprise plans
7. **Footer** — Brand info, links, social icons

---

*Built with ❤️ for the A-6 Digital Tools Assignment*
