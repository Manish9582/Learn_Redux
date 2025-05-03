import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddataFun, dataDeleteFun, dataEditFun, DeleteAllFun } from './redux/actions/actionFun';

const App = () => {
  const showList = useSelector(state => state.data || [])
  const [valueAdd, setvalueAdd] = useState('');
  const [updateData, setupdateData] = useState("True");
  const [indexNumber, setindexNumber] = useState('')
  const dispatch = useDispatch();
  const submitTodo = () => {
    dispatch(adddataFun(valueAdd, 1))
    setvalueAdd('')
  }
  const setEdit = (id) => {
    setupdateData("False");
    setindexNumber(id)
  }

  const submitEditData = () => {
    dispatch(dataEditFun(valueAdd, indexNumber));
    setvalueAdd('')

  }
  return (
    <>
      <div className='max-w-[600px] mx-auto mt-40'>
        <div className=' p-3 shadow-md rounded-2xl'>
          <div className='flex h-[40px]'>
            <input type="text" value={valueAdd} onInput={(e) => setvalueAdd(e.target.value)} placeholder='Enter your task'
              className='w-[100%] pl-2 border border-green-800 outline-none rounded-l-[5px]' />
            <div className='h-[100%]'>
              {updateData === "True" ? (
                <input type="submit" value='Add' className='bg-green-600 px-5 text-white rounded-r-[5px] h-[100%]' onClick={submitTodo} />
              ) : (
                <input type="submit" value='Update' className='bg-green-600 px-5 text-white rounded-r-[5px]  h-[100%]' onClick={submitEditData}/>
              )
              }
            </div>
          </div>
        </div>
        <div>
          {showList.map((data, index) => {
            return (
              <div className='w-[100%] flex justify-between px-3 mt-4 items-center' key={index}>
                <p>{data.storeTodo}</p>
                <div className='flex gap-6 items-center'>
                  <p className='bg-yellow-400 text-white p-3 py-1 rounded-md' onClick={() => setEdit(data.storeTodoid)}>Edit</p>
                  <p className='bg-red-700 text-white p-3 py-1 rounded-md' onClick={() => dispatch(dataDeleteFun(data.storeTodoid))}>Delete</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='flex justify-between mt-9 items-center'>
          <div>
            <p>Delete All Items</p>
          </div>
          <div className='bg-red-800 text-white p-3 py-1 rounded-md' onClick={()=>dispatch(DeleteAllFun())}>Delete All</div>
        </div>
      </div>
    </>
  )
}

export default App