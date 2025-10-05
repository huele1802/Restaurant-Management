import { useEffect, useState } from "react"
import type { FoodItem } from "@shared/types/food"
import { TableService } from "../services/TableService"

export const useFoods = () => {
    const [foods, setFoods] = useState<FoodItem[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        TableService.getFoods().then((data) => {
            setFoods(data)
            setLoading(false)
        })
    }, [])

    return { foods, loading }
}
