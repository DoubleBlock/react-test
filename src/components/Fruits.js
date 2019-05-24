import React from 'react';

class Fruits extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  
  render(){
    return (
      <div>
        <h1>Fruits:</h1>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
          <li>Pears</li>
        </ul>
      </div>
    );
  }
};

export default Fruits;