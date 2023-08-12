import { ButtonHTMLAttributes } from "react";

export interface InputSelectableDTO extends ButtonHTMLAttributes<HTMLButtonElement> {
    selected: boolean;
}