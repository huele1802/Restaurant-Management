import { Button, Card, Space } from "antd"
import React from "react"
import type { Dayjs } from "dayjs"
import styles from "./InventoryReport.module.css"
import { DoubleRightOutlined } from "@ant-design/icons"
import { InventoryChart } from "@features/dashboard/components"

interface InventoryReportProps {
    inventoryDate?: Dayjs
}

export const InventoryReport: React.FC<InventoryReportProps> = ({
    inventoryDate,
}) => {
    return (
        <Card className={styles.customCard}>
            <Card className={styles.customChartCard}>
                <Space direction="vertical" className="w-full">
                    <p className="font-bold text-xs border-b border-[#D2D2D2] inline-block">
                        Ngày:{" "}
                        <span className="text-[#0088FF]">
                            {inventoryDate?.format("DD/MM/YYYY")}
                            {"\u2003"}
                        </span>
                    </p>
                    <p className="font-bold text-xs border-b border-[#D2D2D2] w-40">
                        Nhập kho:{"\u2003\u2003"}
                        <span className="text-[#FF0000]">1090000đ</span>
                    </p>
                    <p className="font-bold text-xs border-b border-[#D2D2D2] w-40">
                        Xuất kho:{"\u00A0\u2003\u2003"}
                        <span className="text-[#27C840]">520000đ</span>
                    </p>
                    <InventoryChart />
                </Space>
            </Card>
            <div className="h-2" />
            <div className="flex justify-end">
                <Button
                    type="primary"
                    icon={<DoubleRightOutlined className="text-xs" />}
                    iconPosition="end"
                    size="small"
                    className="font-bold text-xs"
                >
                    Chi tiết
                </Button>
            </div>
        </Card>
    )
}
