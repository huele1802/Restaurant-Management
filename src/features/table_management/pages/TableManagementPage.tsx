import { Button, Flex, Space } from "antd"
import React, { useEffect, useState } from "react"
import styles from "./TableManagementPage.module.css"
import { ArrowLeftOutlined } from "@ant-design/icons"
import {
    FoodCatalog,
    OrderDetailsView,
    TableSelectionView,
} from "../components"
import type { TableItem } from "@shared/types/table"
import { TableService } from "../services/TableService"
import type { Order, OrderItem } from "@shared/types/order"
import { useNavigate } from "react-router-dom"

const TableManagementPage: React.FC = () => {
    const navigate = useNavigate()

    const [selectedTable, setSelectedTable] = useState<TableItem | null>(null)
    const [orderOfTable, setOrderOfTable] = useState<Order | null>(null)

    useEffect(() => {
        if (selectedTable && selectedTable.id) {
            const order = TableService.getOrderByTableId(selectedTable?.id)
            if (order) setOrderOfTable(order)
            else setOrderOfTable(null)
        }
    }, [selectedTable])

    const handleAddItem = (item: OrderItem) => {
        setOrderOfTable((prev) => {
            if (!prev) {
                return {
                    id: Date.now(),
                    date: new Date().toISOString(),
                    customerName: "",
                    waiterName: "",
                    tableId: selectedTable ? selectedTable.id : 0,
                    items: [item],
                }
            }

            const existing = prev.items.find(
                (i) => i.food.id === item.food.id && i.note === item.note
            )

            if (existing) {
                return {
                    ...prev,
                    items: prev.items.map((i) =>
                        i.food.id === item.food.id && i.note === item.note
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                }
            }

            return { ...prev, items: [...prev.items, item] }
        })
    }

    const handleUpdateQuantity = (foodId: number, quantity: number) => {
        setOrderOfTable((prev) => {
            if (!prev) return prev
            return {
                ...prev,
                items: prev.items
                    .map((i) => (i.food.id === foodId ? { ...i, quantity } : i))
                    // Xoá luôn nếu quantity <= 0 (tuỳ bạn)
                    .filter((i) => i.quantity > 0),
            }
        })
    }

    return (
        <Flex vertical className={styles.tableContainer}>
            <Space style={{ marginBottom: "30px" }}>
                <Button
                    type="primary"
                    shape="circle"
                    size="small"
                    onClick={() => navigate("/")}
                    icon={<ArrowLeftOutlined />}
                />
                <p className="text-base font-bold text-[#0088FF]">Quay lại</p>
            </Space>
            <Flex gap="middle" className="w-full">
                <Flex vertical className="flex-1 min-w-0" gap="middle">
                    <FoodCatalog onAddToCart={(food) => handleAddItem(food)} />
                    <TableSelectionView
                        selectedTable={selectedTable}
                        onTableSelect={setSelectedTable}
                    />
                </Flex>
                <div className="w-96">
                    <OrderDetailsView
                        table={selectedTable}
                        orderOfTable={orderOfTable}
                        onQuantityChange={handleUpdateQuantity}
                    />
                </div>
            </Flex>
        </Flex>
    )
}

export default TableManagementPage
