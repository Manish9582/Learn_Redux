import { Decre, Incre, roleback } from "./contants"

export const CounterIncre = (data) => {
    return {
        type: Incre,
        payload: data
    }
}

export const CounterDecre = (data) => {
    return {
        type: Decre,
        payload: data
    }
}

export const RoleBack=()=>{
    return {
        type: roleback
    }
}