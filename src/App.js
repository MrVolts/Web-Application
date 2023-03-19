import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home.js'
import Products from './pages/products.js'
import ExampleProductDesc from './pages/productmenu.js'
import Abt from './pages/about.js'
import Productbrowser from './pages/productsmain'
import QAPage from'./pages/qanda.js'
import CheckoutPage from './pages/checkout.js';
import './index.css';




export default function Main() {
    return (
        <div className="main-csss">
            <BrowserRouter>
                <Routes>
                <Route path="/QandA" element={<QAPage/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/about" element={<Abt/>} />
                <Route path="/productslist/exampleproduct" element={<ExampleProductDesc/>} />
                <Route path="/productslist" element={<Productbrowser/>} />
                <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={(
                        <div>
                            <h2>Test page</h2>s
                        </div>
                    )} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
