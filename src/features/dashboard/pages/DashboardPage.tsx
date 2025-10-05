import { Flex } from "antd"
import type React from "react"
import styles from "./DashboardPage.module.scss"
import { DashboardContent } from "../components"

const DashboardPage: React.FC = () => {
    return (
        <Flex vertical align="center" style={{ backgroundColor: "#fff" }}>
            <h1 className={styles.title}>
                <span className={styles.highlightTitle}>ShineWay</span> - Hệ
                thống hỗ trợ vận hành nhà hàng{" "}
            </h1>

            <DashboardContent />
        </Flex>
    )
}

export default DashboardPage
