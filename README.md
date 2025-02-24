# Daily Drive Sourcing

Daily Drive Sourcing is a web application for sourcing auto parts from various suppliers. It provides real-time inventory, fast delivery, and verified suppliers.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Supabase (for authentication and database)

## Features

- **Real-Time Availability**: Access live inventory data from our network of suppliers
- **Fast Delivery**: Get parts delivered quickly with estimated delivery times
- **Verified Suppliers**: All suppliers are vetted and certified for quality
- **User Authentication**: Sign in and sign up functionality via Supabase
- **Shopping Cart**: Add parts to your cart and proceed to checkout
- **Order Tracking**: Monitor delivery progress of your orders
- **Notifications**: Receive notifications for order updates, price drops, and stock availability
- **Search and Filters**: Search for parts and apply various filters
- **Theme Support**: Light/Dark mode toggle functionality
- **Vehicle Wizard**: Step-by-step vehicle part selection
- **Responsive Layout**: Mobile-friendly design

## Project Structure

src/ ├── components/ # Reusable UI components ├── pages/ # Main application pages ├── store/ # State management ├── hooks/ # Custom React hooks ├── lib/ # External service configurations ├── data/ # Mock data and constants └── types.ts # TypeScript type definitions

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/MuiaN/Daily-Drive-Sourcing.git
   cd Daily-Drive-Sourcing

2. Install dependencies:
   npm install
   # or
   yarn install

3. Configure environment variables: Create a .env file with your Supabase credentials:
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Start the development server:
   npm run dev
   # or
   yarn dev

Available Scripts
   npm run dev - Start development server
   npm run build - Build for production
   npm run lint - Run ESLint
   npm run preview - Preview production build

Development
The project uses:
   TypeScript for type safety
   ESLint for code linting
   Tailwind CSS for styling
   Supabase for backend services

Key Components
   AuthModal.tsx - Handles user authentication
   Layout.tsx - Main application layout
   PartCard.tsx - Display individual part information
   SearchFilters.tsx - Search and filtering functionality
   ThemeToggle.tsx - Theme switching
   VehicleWizard.tsx - Step-by-step vehicle part selection

State Management
   authStore.ts - Authentication state management
   cartStore.ts - Shopping cart state management

Contributing
   Fork the repository
   Create your feature branch (git checkout -b feature/AmazingFeature)
   Commit your changes (git commit -m 'Add some AmazingFeature')
   Push to the branch (git push origin feature/AmazingFeature)
   Open a Pull Request

License
   This project is licensed under the MIT License - see the LICENSE file for details.






