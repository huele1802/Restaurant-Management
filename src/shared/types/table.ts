// export interface TableItem {
//     id: number
//     name: string
//     floor: number
//     status: "Available" | "Occupied" | "Reserved"
//     date?: string
// }

interface BaseTableItem {
    id: number
    name: string
    floor: number
}

interface AvailableOrOccupiedTable extends BaseTableItem {
    status: "Available" | "Occupied"
    date?: string
}

interface ReservedTable extends BaseTableItem {
    status: "Reserved"
    date: string
    reservationTime: string
    customerName: string
}

export type TableItem = AvailableOrOccupiedTable | ReservedTable
