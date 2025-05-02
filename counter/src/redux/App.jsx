import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CounterDecre, CounterIncre, RoleBack } from './actions/actionMethod';
const App = () => {
  const selectCount = useSelector(state => state.counter);
  let EmptArray = [];
  const selecthistory = useSelector(state => state.history || EmptArray);

  const dispatch = useDispatch();
  const [showhistory, setshowhistory] = useState(true)
  return (
    <>
      <div className='relative h-[100vh] w-[100%]'>
        <div className='mt-30 ml-30 flex gap-5'>
          <div>
            <div onClick={() => setshowhistory(!showhistory)}>
              Show History
            </div>
            <div className={`${showhistory ? 'hidden' : 'block'}`}>
              {selecthistory.map((data, index) => {
                return (
                  <div key={index}>
                    <p>{data}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div onClick={() => dispatch(RoleBack())}>
            Roleback
          </div>
        </div>
        <div className="flex gap-3 items-center absolute top-[50%] left-1/2 transfrom translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-black text-white p-2 rounded-[5px]" onClick={() => dispatch(CounterDecre(-1))}>
            DecreMent
          </div>
          <div>
            {selectCount}
          </div>
          <div className="bg-black text-white p-2 rounded-[5px]" onClick={() => dispatch(CounterIncre(1))}>
            IncreMent
          </div>
        </div>
      </div>
    </>
  )
}

export default App