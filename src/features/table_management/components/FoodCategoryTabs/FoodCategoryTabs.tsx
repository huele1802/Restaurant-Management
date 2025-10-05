import React from "react"
import { Button, Space } from "antd"

export const FoodCategoryTabs: React.FC = () => {
    return (
        <Space wrap style={{ marginBottom: 16 }}>
            <Button type="primary" shape="round">
                Tất cả
            </Button>
            <Button shape="round">Đồ nhậu</Button>
            <Button shape="round">Lẩu</Button>
            <Button shape="round">Đồ nướng</Button>
            <Button shape="round">Đồ uống</Button>
        </Space>
    )
}
