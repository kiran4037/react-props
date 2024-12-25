import React from 'react';
export default function Image1(props){
  return (
    <div>
      <h1>props example3</h1>
      <img 
      src="{props.a}" 
      heiht="{props.b}"
      width="{props.c}"
      />
    </div>
  )
}