# E-Commerce Web App

A responsive e-commerce landing page built with React, TypeScript, Redux Toolkit, Redux Toolkit Query and Vanilla CSS.

This project was built as part of the Learnable Standardisation Test (LST) for Frontend Developers. The implementation follows the provided Figma design and uses the DummyJSON API for product data.

## Preview

Live Demo: https://ecommerce-web-appp.netlify.app/

## About the Project

The goal of this project was to recreate the provided e-commerce design as closely as possible while keeping the code clean, reusable and responsive.

The page includes the main sections from the design, product listings, product cards, navigation, services, testimonials, categories and other sections included in the provided design.

The project also includes Redux Toolkit and Redux Toolkit Query for managing application state and fetching product data.

## Features

- Responsive e-commerce landing page
- Product data fetched from DummyJSON
- Reusable product card component
- Shopping cart state managed with Redux Toolkit
- API requests handled with Redux Toolkit Query
- Cart quantity management
- Product price and cart total calculations
- Responsive layouts for mobile, tablet and desktop
- Loading and error handling for product requests
- Clean and reusable React components
- TypeScript throughout the project

## Tech Stack

- React – UI development
- TypeScript – Type safety
- Vite – Development and build tool
- Vanilla CSS – Styling and responsive design
- Redux Toolkit – State management
- Redux Toolkit Query – API integration and data fetching
- DummyJSON – Product data API

## API

Product information is fetched from the DummyJSON products API.

The API data is handled through Redux Toolkit Query, which keeps the data fetching logic separate from the UI components and provides caching and request state management.

## Getting Started

If you want to run the project on your own computer, follow these steps.

1. Clone the repository

git clone https://github.com/FavourEzema20/ecommerce-web-app.git

2. Open the project folder

cd ecommerce-web-app

3. Install the dependencies

npm install

4. Start the development server

npm run dev

Vite will provide a local URL in the terminal. Open that URL in your browser to view the application.

## Build

To create a production build, run:

npm run build

To preview the production build locally:

npm run preview

## Project Structure

The project is organized into reusable components, pages, Redux state, API services, types and styles.

src/
├── app/
│ ├── hook.ts
│ └── store.ts
│
├── components/
│ ├── Footer.tsx
│ ├── Header.tsx
│ └── ProductCard.tsx
│
├── features/
│ └── cart/
│ └── cartSlice.ts
│
├── pages/
│ ├── Cart.tsx
│ ├── Home.tsx
│ └── Products.tsx
│
├── services/
│ └── productsApi.ts
│
├── styles/
│ ├── cart.css
│ ├── categories.css
│ ├── footer.css
│ ├── global.css
│ ├── header.css
│ ├── hero.css
│ ├── posts.css
│ ├── products.css
│ ├── responsive.css
│ ├── services.css
│ └── testimonial.css
│
└── types/
└── product.ts

## Responsive Design

The page was built to work across different screen sizes.

The layout adapts for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Responsive CSS is used to adjust layouts, spacing, typography and other elements depending on the screen size.

## State Management

Redux Toolkit is used to manage the shopping cart state.

The cart keeps track of selected products and their quantities. Actions are used to add products and update their quantities while the Redux store makes the cart state available across the application.

## API Integration

Redux Toolkit Query is used for fetching product data from DummyJSON.

This keeps the API logic separate from the components and makes it easier to handle loading, successful responses and errors.

## Environment Variables

The current version of the project does not require any environment variables to run because the product API used by the application does not require a private API key.

If environment variables are added in the future, sensitive ".env" files should not be committed to the repository.

## Deployment

The project was deployed using Netlify.

Live URL: https://ecommerce-web-appp.netlify.app/

## Development Notes

The main focus of the implementation was to:

- Follow the provided Figma design
- Keep the interface responsive
- Use reusable React components
- Keep state management separate from UI components
- Use Redux Toolkit Query for API requests
- Keep the code readable and easy to maintain

## Assessment Scope

For this test, the required submission scope is the e-commerce landing page based on the provided design.

The project also contains supporting product and cart functionality used during development.

## Author

Favour Ezema

Frontend Developer

Built with React, TypeScript, Redux Toolkit and Vanilla CSS.
