export type FoodLevel = "Rare" | "Medium" | "Well-done" | "Mild" | "Spicy";

export interface FoodItem {
    id: number
    name: string
    price: number
    image: string
    note?: string
    level?: FoodLevel[]
}
