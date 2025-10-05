import { calculateTotal } from "@core/utils/calculateTotal"
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
        if (step === 1) setStep(2)
        else setIsModalOpen(false)
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
            width={400}
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
            {step === 2 &&
                (() => {
                    const totalAmount = calculateTotal(order.items)
                    const qrValue = `https://img.vietqr.io/image/${
                        import.meta.env.VITE_BANK_NAME
                    }-${import.meta.env.VITE_ACCOUNT_NUMBER}-compact.png?amount=${totalAmount}&addInfo=ThanhToanDonHang`

                    return (
                        <Flex gap="large" vertical>
                            <Select
                                value="my-order"
                                onChange={setPaymentMethod}
                                options={[
                                    {
                                        value: "my-order",
                                        label: "Đơn hàng của bạn",
                                    },
                                ]}
                            />

                            {paymentMethod !== "cash" && (
                                <Flex justify="center">
                                    <img
                                        src={qrValue}
                                        alt="QR chuyển khoản"
                                        style={{ width: 200 }}
                                    />
                                </Flex>
                            )}

                            <Flex justify="flex-end">
                                <p>
                                    <strong>Tổng tiền:</strong>{" "}
                                    {totalAmount.toLocaleString()}
                                </p>
                            </Flex>
                        </Flex>
                    )
                })()}

            {/* {step === 3 && (
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
            )} */}
        </Modal>
    )
}
