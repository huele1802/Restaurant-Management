import { Card, Flex, Typography } from "antd"
import React from "react"
import styles from "./ApplicationButton.module.css"
import { useNavigate } from "react-router-dom"

const { Title } = Typography

interface ApplicationButtonProps {
    icon?: string
    name?: string
    path?: string
}

export const ApplicationButton: React.FC<ApplicationButtonProps> = ({
    icon,
    name,
    path,
}) => {
    const navigate = useNavigate()

    return (
        <Flex vertical align="center" gap="small">
            <Card
                className={styles.appContainer}
                onClick={() => path && navigate(path)}
            >
                <img src={icon} className="h-20 w-20 object-contain" />
            </Card>
            <Title level={4} style={{ color: "#fff" }}>
                {name}
            </Title>
        </Flex>
    )
}
