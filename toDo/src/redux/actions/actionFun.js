import { addData, ClearAll, dataDelete, dataEdit } from "./constants"

export const adddataFun=(data,index)=>{
    return{
        type:addData,
        payload:data,
        indexVal:index
    }
}

export const dataDeleteFun=(data)=>{
    return{
        type:dataDelete,
        payload:data,
    }
}
export const dataEditFun=(data ,id)=>{
    return{
        type:dataEdit,
        payload:data,
        indexVall:id
    }
}
export const DeleteAllFun=()=>{
    return{
        type:ClearAll,
        payload:[]
    }
}
