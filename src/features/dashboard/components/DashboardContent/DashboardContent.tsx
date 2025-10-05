import { DatePicker, Flex, Space, Typography } from "antd"
import type React from "react"
import styles from "./DashboardContent.module.css"
import { useState } from "react"
import { Dayjs } from "dayjs"
import dayjs from "dayjs"
import type { RangePickerProps } from "antd/es/date-picker"
import { mockApps } from "@shared/mocks/mockApps"
import {
    ApplicationButton,
    InventoryCalendar,
    InventoryReport,
    ReportDropdown,
} from "@features/dashboard/components"

const { RangePicker } = DatePicker
const { Title } = Typography

export const DashboardContent: React.FC = () => {
    const [selectedReport, setSelectedReport] = useState<string>("inventory")
    const [inventoryDate, setInventoryDate] = useState<Dayjs | null>(dayjs())
    const [range, setRange] = useState<[Dayjs | null, Dayjs | null] | null>(
        null
    )

    const handleRangeChange: RangePickerProps["onChange"] = (
        dates,
        dateStrings
    ) => {
        console.log("Date objects:", dates)
        console.log("Date strings:", dateStrings)

        setRange(dates)
    }

    return (
        <Flex className={styles.container} gap={36}>
            <Space
                direction="vertical"
                size="middle"
                style={{ marginBlock: 20 }}
            >
                <Flex
                    gap="middle"
                    className="w-[24rem]"
                    vertical={selectedReport == "revenue"}
                >
                    <ReportDropdown
                        value={selectedReport}
                        onChange={(val) => setSelectedReport(val)}
                    />
                    {selectedReport == "inventory" ? (
                        <InventoryCalendar
                            value={inventoryDate || dayjs()}
                            onChange={setInventoryDate}
                        />
                    ) : (
                        <RangePicker
                            size="large"
                            value={range as [Dayjs, Dayjs]}
                            onChange={handleRangeChange}
                        />
                    )}
                </Flex>

                {selectedReport == "inventory" ? (
                    <InventoryReport inventoryDate={inventoryDate || dayjs()} />
                ) : (
                    <></>
                )}
            </Space>
            <div className="w-0.25 bg-white rounded-2xl" />
            <Flex style={{ marginBlock: 14 }} vertical>
                <Title level={3} style={{ color: "#fff" }}>
                    Tất cả ứng dụng
                </Title>
                <Flex
                    wrap
                    gap={50}
                    justify="space-between"
                    style={{ marginTop: 20 }}
                >
                    {mockApps.map((app, idx) => (
                        <ApplicationButton
                            key={idx}
                            icon={app.icon}
                            name={app.title}
                            path={app.path}
                        />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}
