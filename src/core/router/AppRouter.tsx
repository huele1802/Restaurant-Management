import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoadingSpinner from "@shared/components/LoadingSpinner"

const DashboardRoutes = lazy(() => import("@features/dashboard/router"))
const TableRoutes = lazy(() => import("@features/table_management/router"))

const NotFoundPage = lazy(() => import("@shared/pages/NotFoundPage"))
// const LoginPage = lazy(() => import('../../features/authentication/pages/LoginPage'));

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<DashboardRoutes />} />
                    <Route path="/table" element={<TableRoutes />} />

                    <Route path="/home" element={<Navigate to="/" replace />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRouter
