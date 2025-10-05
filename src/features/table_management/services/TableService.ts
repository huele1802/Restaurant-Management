import { mockFoods } from "@/mocks/mockFoods"
import { mockOrderCarts } from "@/mocks/mockOrders"
import { mockTables } from "@/mocks/mockTables"
import type { FoodItem } from "@shared/types/food"
import type { Order } from "@shared/types/order"
import type { TableItem } from "@shared/types/table"

export const TableService = {
    getFloors(): number[] {
        return Array.from(new Set(mockTables.map((t) => t.floor)))
    },

    getTablesByFloor(floor: number): TableItem[] {
        return mockTables.filter((t) => t.floor === floor)
    },

    getAllTables(): TableItem[] {
        return mockTables
    },

    async getFoods(): Promise<FoodItem[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockFoods), 300) // delay 300ms giả API
        })
    },

    getOrderByTableId(tableId: number): Order | undefined {
        return mockOrderCarts.find((order) => order.tableId === tableId)
    },
}
