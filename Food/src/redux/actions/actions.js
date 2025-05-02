import { Addcard, addData, checkLoader, removecarddata } from "./condition"

export const loaderFun = (data) => {
    return {
        type: checkLoader,
        payload:data
    }
}

export const AddDataFun = (data) => {
    return {
        type: addData,
        payload: data
    }
}

export const AddCardFun = (data) => {
    return {
        type: Addcard,
        payload: data
    }
}

export const DeleteFun = (data) => {
    return {
        type: removecarddata,
        payload: data
    }
}