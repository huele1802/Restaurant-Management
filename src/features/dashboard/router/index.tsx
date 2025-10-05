import type React from "react"
import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const DashboardPage = lazy(
    () => import("@features/dashboard/pages/DashboardPage")
)

const DashboardRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<DashboardPage />} />
        </Routes>
    )
}

export default DashboardRoutes
