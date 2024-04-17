import React, { useEffect } from 'react';
import './App.css'; 
import { useDispatch } from "react-redux";
import { GET_USER_PENDING } from "./redux-saga/user/action/action";
import Data from './Components/Data';


function App() {

  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:GET_USER_PENDING});
  },[])

    return(
      <>
        <div className='App'>
          <Data/>
        </div>
      </>
    )
}

export default App;
