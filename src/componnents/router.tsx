import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import MaisInformacoes from "../pages/MaisInformacoes"
import Estacionamentos from "../pages/Estacionamentos"
import EstacionamentoInfo from "../pages/EstacionamentoInfo"


const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/mais-informacoes" element={<MaisInformacoes/>}></Route>
                <Route path="/estacionamentos" element={<Estacionamentos/>}></Route>
                <Route path="/estacionamento/:id" element={<EstacionamentoInfo/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;