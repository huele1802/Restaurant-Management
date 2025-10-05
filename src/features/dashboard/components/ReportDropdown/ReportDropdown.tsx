import React from "react"
import { Select, Space } from "antd"
import type { SelectProps } from "antd"

interface ReportDropdownProps {
    value?: string
    onChange?: (option: string) => void
}

const reportOptions: SelectProps["options"] = [
    { value: "inventory", label: "Xuất / Nhập kho" },
    { value: "revenue", label: "Tổng doanh thu" },
]

export const ReportDropdown: React.FC<ReportDropdownProps> = ({
    value,
    onChange,
}) => {
    return (
        <Space direction="vertical" className="w-full shadow-lg">
            <Select
                size="large"
                className="flex-1 shadow-2xl w-full"
                // defaultValue="inventory"
                onChange={onChange}
                value={value}
                options={reportOptions}
            />
        </Space>
    )
}
