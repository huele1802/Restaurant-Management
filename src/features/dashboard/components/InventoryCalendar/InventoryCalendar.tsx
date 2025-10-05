import { CalendarOutlined } from "@ant-design/icons"
import { Button, Calendar, Popover, type CalendarProps } from "antd"
import type React from "react"
import type { Dayjs } from "dayjs"

interface InventoryCalendarProps {
    value?: Dayjs
    onChange?: (day: Dayjs) => void
}

export const InventoryCalendar: React.FC<InventoryCalendarProps> = ({
    value,
    onChange,
}) => {
    const handlePanelChange: CalendarProps<Dayjs>["onPanelChange"] = (
        date
        // mode
    ) => {
        onChange?.(date)
    }

    const handleSelect = (date: Dayjs) => {
        onChange?.(date)
    }

    return (
        <Popover
            className="shadow-lg"
            placement="bottom"
            trigger="click"
            content={
                <Calendar
                    className="w-2xs"
                    value={value}
                    fullscreen={false}
                    onPanelChange={handlePanelChange}
                    onSelect={handleSelect}
                />
            }
        >
            <Button size="large">
                <CalendarOutlined className="text-xl" />
            </Button>
        </Popover>
    )
}