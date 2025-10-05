import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button } from "antd"
import React from "react"

type CounterProps = {
    value?: number
    onChange?: (value: number) => void
    // onQuantityChange: (foodId: number, quantity: number) => void
    min?: number
    max?: number
}

export const Counter: React.FC<CounterProps> = ({
    value = 1,
    onChange,
    min = 1,
    max = 99,
}) => {
    const increase = () => {
        if (value < max) onChange?.(value + 1)
    }

    const decrease = () => {
        if (value > min) onChange?.(value - 1)
    }

    return (
        <div className="flex items-center gap-3">
            <Button
                type="primary"
                icon={<MinusOutlined style={{fontSize: 12}} />}
                onClick={decrease}
                style={{ background: "#1A72DD", height: 20, width: 20 }}
            />
            <span
                style={{
                    fontSize: "14px",
                    lineHeight: 1,
                    textAlign: "center",
                }}
            >
                {value}
            </span>
            <Button
                type="primary"
                icon={<PlusOutlined style={{fontSize: 12}}/>}
                onClick={increase}
                style={{ background: "#1A72DD", height: 20, width: 20 }}
            />
        </div>
    )
}
