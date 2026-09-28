import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Deploy from './pages/Deploy.jsx'
import Pricing from './pages/Pricing.jsx'
import Roadmap from './pages/Roadmap.jsx'
import Builders from './pages/Builders.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/deploy" element={<Deploy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/builders" element={<Builders />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
