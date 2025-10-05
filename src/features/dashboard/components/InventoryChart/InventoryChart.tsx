import React from "react"
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"

const data = [
    { date: "19/7/2025", value1: 10, value2: 8 },
    { date: "22/7/2025", value1: 12, value2: 14 },
    { date: "25/7/2025", value1: 18, value2: 11 },
    { date: "28/7/2025", value1: 25, value2: 19 },
    { date: "01/8/2025", value1: 20, value2: 22 },
    { date: "05/8/2025", value1: 28, value2: 26 },
    { date: "10/8/2025", value1: 26, value2: 30 },
    { date: "19/8/2025", value1: 32, value2: 31 },
]

export const InventoryChart: React.FC = () => {
    return (
        <ResponsiveContainer height={125} className="w-full">
            <LineChart
                data={data}
                margin={{ left: -38, top: 16, right: 0, bottom: -15 }}
            >
                <CartesianGrid strokeDasharray="3 3" fill="#f0f8ff" />
                <XAxis dataKey="date" className="text-[10px] font-bold" />
                <YAxis className="text-[10px] font-bold" />
                <Tooltip />
                <Line type="monotone" dataKey="value1" stroke="red" />
                <Line type="monotone" dataKey="value2" stroke="green" />
            </LineChart>
        </ResponsiveContainer>
    )
}
