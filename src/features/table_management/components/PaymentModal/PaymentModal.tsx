import type { Order } from "@shared/types/order"
import { Flex, Modal, Select, Typography } from "antd"
import React, { useState } from "react"

const { Text } = Typography

interface PaymentModalProps {
    isModalOpen: boolean
    setIsModalOpen: (isOpenModal: boolean) => void
    order: Order
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    order,
}) => {
    const [paymentMethod, setPaymentMethod] = useState<string>("cash")
    const [step, setStep] = useState<number>(1)

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal
            title="Thanh toán"
            closable={{ "aria-label": "Custom Close Button" }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            height={200}
            okText="Tiếp tục"
            cancelText="Huỷ"
        >
            {step === 1 && (
                <Flex gap="large" vertical>
                    <Text type="secondary">
                        Vui lòng chọn phương thức thanh toán
                    </Text>
                    <Select
                        value={paymentMethod}
                        onChange={setPaymentMethod}
                        options={[
                            { value: "cash", label: "Tiền mặt" },
                            { value: "bank-transfer", label: "Chuyển khoản" },
                        ]}
                    />
                </Flex>
            )}
            {step === 2 && (
                <Flex gap="large" vertical>
                    <Text type="secondary">
                        Vui lòng chọn phương thức thanh toán
                    </Text>
                    <Select
                        value={paymentMethod}
                        onChange={setPaymentMethod}
                        options={[
                            { value: "cash", label: "Tiền mặt" },
                            { value: "bank-transfer", label: "Chuyển khoản" },
                        ]}
                    />
                </Flex>
            )}
            {step === 3 && (
                <Flex gap="large" vertical>
                    <Text type="secondary">
                        Vui lòng chọn phương thức thanh toán
                    </Text>
                    <Select
                        value={paymentMethod}
                        onChange={setPaymentMethod}
                        options={[
                            { value: "cash", label: "Tiền mặt" },
                            { value: "bank-transfer", label: "Chuyển khoản" },
                        ]}
                    />
                </Flex>
            )}
        </Modal>
    )
}
