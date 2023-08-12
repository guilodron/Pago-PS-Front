import { useState } from "react";
import { FormDTO } from "./dto";
import { Expense } from "../../shared/Models/Expense";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export const useForm = (props: FormDTO) => {
    const [expense, setExpense] = useState<Expense>(props?.expense || {} as Expense);

    const [editable, setEditable] = useState(props.mode === 'create');

    const navigate = useNavigate();

    const editExpense = () => {
        console.log('okok')
        api.put('/expense', expense)
            .then(() => {
                setEditable(false)
                alert("Update success")
            })
            .catch(() => alert("Error updating expense"));
    }

    const createExpense = () => {
        api.post('/expense', expense)
            .then(() => {
                navigate('/')
                alert("Create success")
            })
            .catch(() => alert("Error updating expense"));
    }

    const deleteExpense = () => {
        api.delete(`/expense/${expense.id}`)
            .then(() => {
                alert("Deletion success")
                navigate('/')
            })
            .catch(() => alert("Error updating expense"));
    }

    return {
        editable, 
        setEditable, 
        expense, 
        setExpense, 
        editExpense,
        createExpense,
        deleteExpense}
}