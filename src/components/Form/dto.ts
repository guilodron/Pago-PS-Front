import { Expense } from "../../shared/Models/Expense";

export interface FormDTO {
    expense?: Expense;
    mode: 'detail' | 'create';
}