import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteFun } from '../redux/actions/actions';

const Showcard = () => {
    const selectacrd = useSelector(state => state.cardData.card)
    const dipatch=useDispatch();
    const RemoveCardData = (data) => {
        dipatch(DeleteFun(data))
    }
    return (
        <div className='max-w-[1000px] mx-auto'>
            {selectacrd.map((data ,index) => {
                return (
                    <div key={index} className='bg-gray-100 rounded-md flex w-[100%] justify-between items-center my-2 pr-6'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[300px] h-[200px]'>
                                <img src={data.image} alt="" className='w-[100%] h-[100%] object-cover' />
                            </div>
                            <div className='w-[100%]'>
                                <p className='w-[100%]'>{data.name}</p>
                                <p>{data.caloriesPerServing}</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-black text-white p-1 rounded-[3px]' onClick={() => AddtocardFun(data.id)}>
                                AddCard
                            </div>
                            <div className='bg-red-500 text-white p-1 rounded-[3px] mt-3 text-center' onClick={() => RemoveCardData(data.id)}>
                                Remove
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Showcard