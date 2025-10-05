import { Flex, Typography } from "antd"
import React from "react"
import styles from "./TotalAmount.module.css"
import type { OrderItem } from "@shared/types/order"
import { calculateTotal } from "@core/utils/calculateTotal"

const { Title, Text } = Typography

interface TotalAmountProps {
    items: OrderItem[]
}

export const TotalAmount: React.FC<TotalAmountProps> = ({ items }) => {
    return (
        <div className="w-full">
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Text>Tạm tính:</Text>
                <Text className={styles.temporaryPrice}>
                    {calculateTotal(items)}
                </Text>
            </Flex>
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Text>Giảm giá:</Text>
                <Text className={styles.discount}>-0</Text>
            </Flex>
            <Flex
                justify="space-between"
                align="center"
                className={styles.container}
            >
                <Text>Tổng:</Text>
                <Text className={styles.finalPrice}>
                    {calculateTotal(items)}
                </Text>
            </Flex>
            <Flex align="center" gap={4} className={styles.container}>
                <Title style={{ fontSize: 14 }}>Phương thức thanh toán:</Title>
                <Text>chưa có</Text>
            </Flex>
        </div>
    )
}
