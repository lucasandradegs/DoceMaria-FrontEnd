import { Routes, Route } from "react-router-dom"

import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { DeviceMenu } from "../pages/DeviceMenu"


export function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/menu" element={<DeviceMenu />} />
        </Routes>
    )
}