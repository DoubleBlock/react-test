
import React from 'react';
import Fruits from './Fruits';
import Vegetables from './Vegetables';

class TypesofFood extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  
  render(){
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

export default TypesofFood;
