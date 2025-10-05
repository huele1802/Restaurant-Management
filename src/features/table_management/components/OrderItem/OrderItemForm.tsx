import { Flex, Typography } from "antd"
import React from "react"
import { Counter } from "@features/table_management/components"
import type { OrderItem } from "@shared/types/order"
import styles from "./OrderItemForm.module.css"

const { Title, Text } = Typography

interface OrderItemProps {
    item: OrderItem
    key: number
    onQuantityChange: (foodId: number, quantity: number) => void
    last: boolean
}

export const OrderItemForm: React.FC<OrderItemProps> = ({
    item,
    key,
    onQuantityChange,
    last
}) => {
    return (
        <Flex gap={8} key={key} align="center" style={{marginBottom: last ? 12 : 0}}>
            <img src={item.food.image} className="size-14 rounded-2xl" />
            <Flex vertical className="flex-1">
                <Flex align="end" gap={2}>
                    <Title style={{ fontSize: 14 }}>{item.food.name}</Title>
                    <Text className={styles.text}>-</Text>
                    <Text className={styles.priceItemText}>
                        {item.food.price}
                    </Text>
                    {item.note && (
                        <Text className={styles.note}>- {item.note}</Text>
                    )}
                </Flex>
                <Flex
                    align="center"
                    justify="space-between"
                    style={{ marginTop: 8 }}
                >
                    <Counter
                        value={item.quantity}
                        onChange={(val) => onQuantityChange(item.food.id, val)}
                    />
                    <Text className={styles.priceText}>
                        {item.food.price * (item.quantity ?? 1)}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
