import { Card, Col, Flex, Select, Tag, Typography } from "antd"
import React, { useEffect, useState } from "react"
import styles from "./TableSelectionView.module.css"
import type { TableItem } from "@shared/types/table"
import { TableService } from "@features/table_management/services/TableService"

const { Title, Text } = Typography

interface TableQuantity {
    available: number
    occupied: number
    reserved: number
}
const statusColors: Record<TableItem["status"], string> = {
    Available: "bg-[#5296E5]",
    Occupied: "bg-[#C4C4C4]",
    Reserved: "bg-[#FF5F57]",
}

interface TableSelectionViewProps {
    selectedTable: TableItem | null
    onTableSelect: (table: TableItem | null) => void
}

export const TableSelectionView: React.FC<TableSelectionViewProps> = ({
    selectedTable,
    onTableSelect,
}) => {
    const [activeFloor, setActiveFloor] = useState<number>(1)
    const [tables, setTables] = useState<TableItem[] | null>(null)
    const [quantity, setQuantity] = useState<TableQuantity | null>(null)
    // const [selectedTable, setSelectedTable] = useState<TableItem | null>(null)

    const floors = TableService.getFloors()

    const getData = (floor: number) => {
        const tablesByFloor = TableService.getTablesByFloor(floor)
        setTables(tablesByFloor)

        const statusCount: TableQuantity = {
            available: tablesByFloor.filter((t) => t.status === "Available")
                .length,
            occupied: tablesByFloor.filter((t) => t.status === "Occupied")
                .length,
            reserved: tablesByFloor.filter((t) => t.status === "Reserved")
                .length,
        }
        setQuantity(statusCount)
    }

    useEffect(() => {
        getData(activeFloor)
    }, [activeFloor])

    const handleChange = (value: number) => {
        setActiveFloor(value)
        onTableSelect(null)
    }

    return (
        <Card className={styles.customCard}>
            <Flex
                align="center"
                justify="space-between"
                className={styles.separationCard}
            >
                <Flex vertical>
                    <Title level={4}>Chọn bàn</Title>
                    <Flex align="center" gap={4}>
                        <Text>Ca:</Text>
                        <span className="bg-[#FF9D00] text-white text-[12px] rounded-full leading-5">
                            {"\u2003Tối\u2003"}
                        </span>
                    </Flex>
                </Flex>

                <Select
                    defaultValue={activeFloor}
                    value={activeFloor}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={floors.map((floor) => ({
                        value: floor,
                        label: `Tầng ${floor}`,
                    }))}
                />
            </Flex>
            <Flex
                align="center"
                justify="space-between"
                style={{ marginBlock: 20 }}
            >
                <Flex gap={10} align="center">
                    <Text className={styles.statusText}>Đang trống:</Text>
                    <Tag
                        className={`${styles.statusCount} ${styles.available}`}
                    >
                        {quantity?.available}
                    </Tag>
                    <Text className={styles.statusText}>Đang dùng:</Text>
                    <Tag className={`${styles.statusCount} ${styles.occupied}`}>
                        {quantity?.occupied}
                    </Tag>
                    <Text className={styles.statusText}>Đặt trước:</Text>
                    <Tag className={`${styles.statusCount} ${styles.reserved}`}>
                        {quantity?.reserved}
                    </Tag>
                </Flex>
                <Flex gap={20}>
                    <Text className={styles.selectingText}>Đang chọn:</Text>
                    {selectedTable && (
                        <Tag className={styles.selectingTable}>
                            {selectedTable.name}
                        </Tag>
                    )}
                </Flex>
            </Flex>
            <Flex
                wrap
                gap="small"
                justify="space-between"
                style={{ marginBlock: 20 }}
            >
                {tables?.map((table) => (
                    <Col
                        onClick={() => onTableSelect(table)}
                        key={table.id}
                        className={`size-24 flex items-center justify-center font-bold text-white 
                            ${statusColors[table.status]} 
                            ${selectedTable === table && "border-2 border-dashed border-black"}`}
                    >
                        {table.name}
                    </Col>
                ))}
            </Flex>
        </Card>
    )
}
