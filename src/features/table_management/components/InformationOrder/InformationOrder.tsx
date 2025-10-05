import { formatDateTimeToDate } from "@core/utils/formatDateTime"
import type { Order } from "@shared/types/order"
import { Flex, Tag, Typography } from "antd"
import React from "react"
import styles from "./InformationOrder.module.css"

const { Title, Text } = Typography

interface InformationOrderProps {
    table: string
    floor: number
    order: Order
}

export const InformationOrder: React.FC<InformationOrderProps> = ({
    table,
    floor,
    order,
}) => {
    return (
        <div className="w-full">
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Title style={{ fontSize: 14 }}>Ngày tạo đơn:</Title>
                <Text>{formatDateTimeToDate(order?.date ?? "")}</Text>
            </Flex>
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Title style={{ fontSize: 14 }}>Khách hàng:</Title>
                <Text>{order?.customerName}</Text>
            </Flex>
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Title style={{ fontSize: 14 }}>Thu ngân:</Title>
                <Text>Lê Thị C</Text>
            </Flex>
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Title style={{ fontSize: 14 }}>Nhân viên:</Title>
                <Text>{order?.waiterName}</Text>
            </Flex>
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Title style={{ fontSize: 14 }}>Bàn:</Title>
                <Tag color="#5296E5" className={styles.tableTag}>
                    {table} | Tầng {floor}
                </Tag>
            </Flex>
        </div>
    )
}
