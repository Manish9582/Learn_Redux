import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddDataFun, loaderFun } from '../redux/actions/actions'
import axios from "axios";


const FetchingData = () => {
    const selectLoader = useSelector(state => state.moveData.loader)
    const dispatch = useDispatch()
    const fetchData = async () => {
        dispatch(loaderFun(false));
        try {
            const response = await axios.get("https://dummyjson.com/recipes");
            dispatch(AddDataFun(response.data.recipes));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 3000);
    }, []);

    if (selectLoader) {
        return <h1>Data is loading .... </h1>;
    }
}

export default FetchingData