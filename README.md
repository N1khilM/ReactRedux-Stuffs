React & Redux Practice Lab

A collection of React and Redux Toolkit projects and mini-demos built to practice state management, asynchronous data fetching, and real-world UI workflows.

🚀 Projects & Modules

1. E-Commerce Cart & Product Catalog

A functional store interface demonstrating async product fetching, search/category filtering, and synchronized cart state management.

Tech: React, Redux Toolkit, DummyJSON API

Key Features:

Async thunk (fetchProducts) to pull live product data.

Multi-condition search by keyword and category.

Cart operations: Add to cart, increment/decrement quantity, and remove items.

Real-time subtotal and grand total calculations.

Responsive product grid with image aspect-ratio handling via CSS object-fit.

(More modules and mini-apps will be added here as the repository grows.)

🛠 Tech Stack

Frontend: React (Hooks, Functional Components)

State Management: Redux Toolkit (createSlice, createAsyncThunk), React-Redux

Styling: CSS Flexbox / Inline Styles

Data Source: DummyJSON (https://dummyjson.com/)

📂 Project Structure

src/
├── app/
│   └── store.js             # Redux store configuration
├── features/
│   ├── ProductSlice.js      # Product fetching and cart logic
│   └── SearchSlice.js       # Search query and category filter state
└── components/
├── ProductList.jsx      # Product grid with image formatting
├── CartList.jsx         # Cart display with quantity controls
└── Search.jsx           # Filter and search inputs

⚙️ Getting Started

Clone the repository:
git clone https://github.com/your-username/ReactRedux-Stuffs.git
cd ReactRedux-Stuffs

Install dependencies:
npm install

Start the development server:
npm run dev   # or npm start

📌 Concepts Explored

Managing centralized global state with Redux Toolkit slices.

Handling asynchronous states (loading, fulfilled, rejected).

Deriving calculated values (totals, subtotals) using JavaScript array reducers.

Handling varying API data structures (arrays of image URLs vs. single thumbnails).
