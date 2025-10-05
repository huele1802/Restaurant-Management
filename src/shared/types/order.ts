import type { FoodItem } from "./food"

export interface Order {
    id: number
    date: string
    customerName: string
    waiterName: string
    tableId: number
    items: OrderItem[]
}

export interface OrderItem {
    id: number | null
    food: FoodItem
    note?: string
    quantity: number
}
