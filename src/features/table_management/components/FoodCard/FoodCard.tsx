import { PlusOutlined } from "@ant-design/icons"
import type { FoodItem } from "@shared/types/food"
import type { OrderItem } from "@shared/types/order"
import { Button, Card, Flex, Modal, Radio, Space, Typography } from "antd"
import React, { useState } from "react"

const { Text, Title } = Typography

interface Props {
    item: FoodItem
    onAddToCart: (food: OrderItem) => void
}

export const FoodCard: React.FC<Props> = ({ item, onAddToCart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedNote, setSelectedNote] = useState<string | null>(null)

    const addToCart = (note: string) => {
        const orderItem: OrderItem = {
            note: note,
            quantity: 1,
            food: item,
            id: null,
        }
        onAddToCart(orderItem)
    }

    const clickAdd = () => {
        if ((item.level?.length ?? 0) > 0) showModal()
        else {
            addToCart("")
        }
    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        if (selectedNote) {
            addToCart(selectedNote)
            setIsModalOpen(false)
            setSelectedNote(null)
        }
    }

    const handleCancel = () => {
        setSelectedNote(null)
        setIsModalOpen(false)
    }

    return (
        <Card
            hoverable
            cover={
                <img
                    alt={item.name}
                    src={item.image}
                    style={{
                        height: 120,
                        objectFit: "cover",
                        borderRadius: 12,
                    }}
                />
            }
            style={{ width: 200, borderRadius: 12 }}
        >
            <Title level={5} style={{ marginBottom: 0 }}>
                {item.name}
            </Title>

            <div className="h-4">
                <Text type="secondary" style={{ fontSize: 12 }}>
                    {item.level &&
                        item.level.length > 0 &&
                        "(Must choose level)"}
                </Text>
            </div>

            <Space
                style={{
                    marginTop: 8,
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Text strong style={{ color: "#1677ff" }}>
                    GNF {item.price}
                </Text>
                <Button
                    onClick={() => {
                        clickAdd()
                    }}
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                />
            </Space>
            <Modal
                title={item.name}
                closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Flex gap="large">
                    <img
                        alt={item.name}
                        src={item.image}
                        style={{
                            height: 200,
                            width: 300,
                            objectFit: "cover",
                            borderRadius: 12,
                        }}
                    />
                    <Radio.Group
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                        }}
                        onChange={(e) => {
                            setSelectedNote(e.target.value)
                        }}
                        value={selectedNote}
                        options={item.level?.map((level) => ({
                            value: level,
                            label: <p>{level}</p>,
                        }))}
                    />
                </Flex>
            </Modal>
        </Card>
    )
}
