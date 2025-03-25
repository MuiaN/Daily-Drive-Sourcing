import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import PartSelector from './pages/PartSelector';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Suppliers from './pages/Suppliers';
import Dealerships from './pages/Dealerships';
import FAQ from './pages/FAQ';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnsWarranty from './pages/ReturnsWarranty';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import { useAuthStore } from './store/authStore';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="parts" element={<PartSelector />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="dealerships" element={<Dealerships />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="shipping" element={<ShippingPolicy />} />
          <Route path="returns" element={<ReturnsWarranty />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route
            path="orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;