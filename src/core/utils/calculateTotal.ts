import type { OrderItem } from "@shared/types/order"

export const calculateTotal = (items: OrderItem[]): number => {
    const total = items.reduce(
        (sum, item) => sum + item.food.price * item.quantity,
        0
    )
    return Math.round(total * 100) / 100 // chỉ giữ 2 số sau dấu chấm
}
