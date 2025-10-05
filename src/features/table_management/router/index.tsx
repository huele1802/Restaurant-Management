import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const TableManagementPage = lazy(() => import("@features/table_management/pages/TableManagementPage"))

const TableRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<TableManagementPage />} />
        </Routes>
    )
}

export default TableRoutes