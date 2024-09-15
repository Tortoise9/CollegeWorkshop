import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ServicePage from './components/ServicePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import Layout from './layout/Layout.jsx'
import DynamicPage from './components/DynamicPage.jsx'
import ProductPage from './components/ProductPage.jsx'
import ProductDetail from './components/ProductDetail.jsx'



 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dynamic/:id" element={<DynamicPage/>} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path='/products' element= { <ProductPage/> } />
          <Route path='/products/:id' element= { <ProductDetail/> } />
          
        </Routes>
        
        </Layout>
      
        
  
    </BrowserRouter>
  </StrictMode>
)
