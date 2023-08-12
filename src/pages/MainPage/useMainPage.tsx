import { useEffect, useState } from "react"
import { Expense } from "../../shared/Models/Expense"
import api from "../../services/api";


export const useMainPage = () => {
    const [valuesInfo, setValuesInfo] = useState({deposits:0, expenses: 0, total: 0});
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        getExpenses();
    }, [])

    const getExpenses = () => {
        api.get('/expense')
            .then(res => {
                setExpenses(res.data)
                const parsed = res.data.reduce((prev: any, curr: Expense) => {
                    return {
                        deposits: prev.deposits + (curr.type === 1 ? curr.value : 0),
                        expenses: prev.expenses + (curr.type === 2 ? curr.value : 0),
                        total: prev.total + (curr.value * (curr.type === 1 ? 1 : -1))
                    }
                }, valuesInfo)
                setValuesInfo(parsed)
            })
    }

    return {expenses, valuesInfo}
}
