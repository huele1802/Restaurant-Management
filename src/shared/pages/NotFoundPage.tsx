import React from "react"
import { Result, Button } from "antd"
import { useNavigate } from "react-router-dom"

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate("/")
    }

    return (
        <div style={{ padding: "50px 20px", textAlign: "center" }}>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang bạn đang tìm kiếm không tồn tại."
                extra={
                    <Button type="primary" size="large" onClick={handleGoHome}>
                        Về Trang Chủ
                    </Button>
                }
            />
        </div>
    )
}

export default NotFoundPage
