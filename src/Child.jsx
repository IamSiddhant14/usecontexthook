import React from 'react';
import { useContext } from 'react';
import { AppContext } from './components/AppProvider';

const Child = () => {

  const userData = useContext(AppContext);

  return (
    <>
    <div>{`My name is ${userData.name} and age is ${userData.age}`}</div>
    </>
  
  )
}

export default Child;
