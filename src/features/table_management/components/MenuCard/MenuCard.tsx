import SearchInput from "@shared/components/SearchInput"
import { Button, Card, Flex, Space, Spin } from "antd"
import React from "react"
import styles from "./MenuCard.module.css"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useFoods } from "@features/table_management/hooks/useFoods"
import {
    FoodCard,
    FoodCategoryTabs,
} from "@features/table_management/components"
import type { OrderItem } from "@shared/types/order"

interface MenuCardProps {
    onAddToCart: (food: OrderItem) => void
}

export const MenuCard: React.FC<MenuCardProps> = ({onAddToCart}) => {
    const { foods, loading } = useFoods()

    return (
        <Card
            title="Danh mục các món"
            extra={
                <SearchInput placeholder="Nhập tên món ăn..." iconSize={20} />
            }
            className={styles.customCard}
        >
            <Space
                direction="vertical"
                style={{ paddingInline: "15px", width: "100%" }}
            >
                <FoodCategoryTabs />
                <Flex justify="space-between" style={{ marginBottom: 16 }}>
                    <Button shape="circle" icon={<LeftOutlined />} />
                    <Button shape="circle" icon={<RightOutlined />} />
                </Flex>
            </Space>
            <div className={`overflow-x-auto min-w-0 ${styles.hideScrollbar}`}>
                {loading ? (
                    <Spin />
                ) : (
                    <Flex gap={20}>
                        {foods.map((food, idx) => (
                            <div
                                key={food.id}
                                style={{
                                    marginBottom: 15,
                                    marginInlineStart: idx === 0 ? 15 : 0,
                                    paddingInlineEnd:
                                        idx === foods.length - 1 ? 15 : 0,
                                    flexShrink: 0,
                                }}
                            >
                                <FoodCard item={food} onAddToCart={onAddToCart} />
                            </div>
                        ))}
                    </Flex>
                )}
            </div>
        </Card>
    )
}
