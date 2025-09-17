import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Portfolio from '../Pages/Portfolio'
import Contact from '../Pages/Contact'

const CustomRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />





            </Routes>
        </>
    )
}

export default CustomRoute