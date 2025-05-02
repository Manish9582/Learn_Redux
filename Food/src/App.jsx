import React, { useState } from 'react'
import FetchingData from './component/FetchingData'
import { useDispatch, useSelector } from 'react-redux'
import { Addcard } from './redux/actions/condition';
import Showcard from './component/Showcard';

const App = () => {
  const moveData = useSelector(state => state.moveData.move);

  const dispatch = useDispatch();
  const AddtocardFun = (data) => {
    dispatch({
      type: Addcard,
      payload: {
        sendmove: moveData,
        sendId: data
      }
    })
  }
  const [showCardDetail, setshowCardDetail] = useState(true)

  const selectacrd = useSelector(state => state.cardData.card);
  
  const goToSecondPage = () => {
    setshowCardDetail(!showCardDetail)
  }
  return (
    <>
      <div className='bg-pink-100 w-[100%] px-20 py-2'>
        <div className='flex justify-between items-center'>
          <div>
            Logo
          </div>
          <div onClick={()=>setshowCardDetail(!showCardDetail)} className='cursor-pointer'>
            Home
          </div>
          <div className='flex gap-2'>
            <div onClick={goToSecondPage} className='cursor-pointer'>
              AddCard
            </div>
            {selectacrd.length > 0 ? (
              <div>{selectacrd.length}</div>
            ) : (
              <div>{ }</div>
            )}
          </div>
        </div>
      </div>
      <FetchingData />
      {showCardDetail ? (
        <div className='max-w-[1400px] mx-auto grid grid-cols-6 gap-3'>
          {moveData.map((data) => {
            return (
              <div key={data.id} className='bg-gray-100 rounded-md'>
                <div>
                  <img src={data.image} alt="" />
                </div>
                <div className='px-2 py-1'>
                  <div>
                    <p className='w-[100%] h-[25px] text-nowrap overflow-hidden text-ellipsis'>{data.name}</p>
                  </div>
                  <div className='flex justify-between my-2'>
                    <p>{data.caloriesPerServing}</p>
                    <div className='bg-black text-white p-1 rounded-[3px]' onClick={() => AddtocardFun(data.id)}>
                      AddCard
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div> <Showcard /></div>
      )}


    </>
  )
}

export default App