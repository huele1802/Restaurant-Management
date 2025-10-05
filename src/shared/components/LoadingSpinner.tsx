import React from "react"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

interface LoadingSpinnerProps {
    size?: "small" | "default" | "large"
    tip?: string
    minHeight?: string | number
}

const defaultIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "large",
    tip = "Đang tải dữ liệu...",
    minHeight = "300px",
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: minHeight,
            }}
        >
            <Spin indicator={defaultIcon} size={size} tip={tip} />
        </div>
    )
}

export default LoadingSpinner
