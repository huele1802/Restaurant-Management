import {
    ArrowLeftOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons"
import { formatDate, formatTime } from "@core/utils/formatDateTime"
// import { TableService } from "@features/table_management/services/TableService"
import type { Order } from "@shared/types/order"
import type { TableItem } from "@shared/types/table"
import { Button, Card, Flex, Space, Typography } from "antd"
import React, { useEffect, useState } from "react"
import {
    OrderInfo,
    OrderItemView,
    PaymentModal,
    TotalAmount,
} from "@features/table_management/components"

const { Text, Title } = Typography

interface OrderDetailsViewProps {
    table: TableItem | null
    orderOfTable: Order | null
    onQuantityChange: (foodId: number, quantity: number) => void
}

export const OrderDetailsView: React.FC<OrderDetailsViewProps> = ({
    table,
    orderOfTable,
    onQuantityChange,
}) => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <Flex vertical className="w-96" gap="middle">
            <Flex gap="middle">
                <Card className="flex-1">
                    <Flex gap="large">
                        <CalendarOutlined style={{ color: "#0088FF" }} />
                        <Text type="secondary" className="text-sm">
                            {formatDate(currentTime)}
                        </Text>
                    </Flex>
                    <Flex gap="large">
                        <ClockCircleOutlined style={{ color: "#0088FF" }} />
                        <Text type="secondary" className="text-sm">
                            {formatTime(currentTime)}
                        </Text>
                    </Flex>
                </Card>
                <Card className="flex items-center">
                    <Flex align="center" gap="small" className="m-2">
                        <ArrowLeftOutlined />
                        <Title level={5}>Đơn hàng trước đó</Title>
                    </Flex>
                </Card>
            </Flex>
            <Card className="min-h-72 flex flex-col justify-center">
                <Title
                    level={4}
                    className="text-center"
                    style={{ paddingBottom: 10 }}
                >
                    Đơn hàng
                </Title>
                {!table && (
                    <div className="flex justify-center">
                        <Text type="secondary">
                            Vui lòng chọn bàn để bắt đầu tạo đơn hàng
                        </Text>
                    </div>
                )}

                {table && table.status === "Occupied" && (
                    <div>
                        <div className="mt-8 border border-dashed border-gray-300 w-full rounded-2xl">
                            {orderOfTable && (
                                <OrderInfo
                                    table={table.name}
                                    floor={table.floor}
                                    order={orderOfTable}
                                />
                            )}
                            <div className="border-b border-dashed border-gray-300" />
                            <Space
                                direction="vertical"
                                className="h-60 w-full min-h-60"
                                style={{
                                    paddingInline: 12,
                                    paddingTop: 12,
                                    overflowY: "auto",
                                }}
                            >
                                {orderOfTable?.items.map((item, idx) => (
                                    <OrderItemView
                                        key={idx}
                                        item={item}
                                        onQuantityChange={onQuantityChange}
                                        last={
                                            idx ===
                                            orderOfTable.items.length - 1
                                        }
                                    />
                                ))}
                            </Space>
                            <div className="border-b border-dashed border-gray-300" />
                            <TotalAmount items={orderOfTable?.items ?? []} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Flex
                                gap="middle"
                                className="w-3/4"
                                style={{ marginBlock: 10 }}
                            >
                                <Button
                                    color="default"
                                    variant="outlined"
                                    className="flex-1"
                                >
                                    Lưu
                                </Button>
                                <Button
                                    color="default"
                                    variant="outlined"
                                    className="flex-1"
                                >
                                    Huỷ
                                </Button>
                            </Flex>
                            <Flex gap="middle" className="w-3/4">
                                <Button
                                    color="green"
                                    variant="solid"
                                    className="flex-1"
                                >
                                    Xuất hoá đơn
                                </Button>
                                <Button
                                    color="danger"
                                    variant="solid"
                                    className="flex-1"
                                    onClick={showModal}
                                >
                                    Thanh toán
                                </Button>
                            </Flex>
                        </div>
                    </div>
                )}
            </Card>
            {orderOfTable && (
                <PaymentModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    order={orderOfTable}
                />
            )}
        </Flex>
    )
}

{
    /* <Input placeholder="Borderless" variant="borderless" /> */
}
