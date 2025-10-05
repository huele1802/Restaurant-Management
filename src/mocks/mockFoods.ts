import type { FoodItem } from "@shared/types/food"

export const mockFoods: FoodItem[] = [
    {
        id: 1,
        name: "Salad Tuna",
        price: 500.67,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVFgT9zi-XQkVEYvFL-Bld2FkGhqwbiq9HQ&s",
        note: "Must choose level",
        level: ["Mild", "Spicy"],
    },
    {
        id: 2,
        name: "Salad Egg",
        price: 300.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwplxqkFJA-18KUlVqElhxpmsP32Q9DdZ7LQ&s",
    },
    {
        id: 3,
        name: "Wagyu Sate",
        price: 270.32,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkf0KKUvee0OdvUbUOWIPdHYV2inRmdyhSQ&s",
    },
    {
        id: 4,
        name: "Wagyu Black Paper",
        price: 34.98,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sIwNIrdJcoscw-Ej01XlGqhJnkBjJQZgUQ&s",
        note: "Must choose level",
        level: ["Rare", "Medium", "Well-done"],
    },
    {
        id: 5,
        name: "Salad Chicken",
        price: 450.0,
        image: "https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1264839352-750x750.jpg",
    },
    {
        id: 6,
        name: "Choco Lava Cake",
        price: 99.5,
        image: "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
        note: "Serve with vanilla ice cream",
        level: ["Mild", "Spicy"],
    },
    {
        id: 7,
        name: "French Fries",
        price: 55.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBt5RdbNGN2PopQ1ox14cVQI7tiXglqrAIA&s",
    },
]
