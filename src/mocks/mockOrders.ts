import type { FoodItem } from "@shared/types/food"
import { mockFoods } from "./mockFoods"
import type { Order } from "@shared/types/order"

const getFood = (id: number): FoodItem =>
    mockFoods.find((f) => f.id === id) || mockFoods[0]

export const mockOrderCarts: Order[] = [
    {
        id: 1,
        date: "05/10/2025 20:08:45",
        customerName: "Lý Văn B",
        waiterName: "Trần Văn C",
        tableId: 2,
        items: [
            {
                id: 1,
                food: getFood(1),
                note: "Spicy",
                quantity: 2,
            },
            {
                id: 2,
                food: getFood(2),
                note: "",
                quantity: 1,
            },
        ],
    },
    {
        id: 2,
        date: "05/10/2025 20:30:10",
        customerName: "Nguyễn Thị D",
        waiterName: "Phạm Văn E",
        tableId: 8,
        items: [
            {
                id: 3,
                food: getFood(4),
                note: "Medium",
                quantity: 4,
            },
            {
                id: 4,
                food: getFood(3),
                note: "",
                quantity: 1,
            },
        ],
    },
    {
        id: 3,
        date: "05/10/2025 21:05:00",
        customerName: "Khách lẻ",
        waiterName: "Trần Văn C",
        tableId: 31,
        items: [
            {
                id: 5,
                food: getFood(5),
                note: "",
                quantity: 3,
            },
        ],
    },
    {
        id: 4,
        date: "05/10/2025 21:07:00",
        customerName: "Khách lẻ",
        waiterName: "Nguyễn Văn D",
        tableId: 14,
        items: [
            {
                id: 7,
                food: getFood(7),
                note: "ít cay",
                quantity: 2,
            },
            {
                id: 9,
                food: getFood(9),
                note: "",
                quantity: 1,
            },
        ],
    },
]
