import React from 'react';
import Image from './Image';
import Image1 from './Image1';
export default function App() {
  return (
    <div>
      <h1>props example1</h1>
      <Component1 pdf="ReactNotes" link="https://mail.google.com/mail/u/0/#inbox"/>
      <Image/>
      <Image1 a="C:\Users\admin\OneDrive\Pictures\Saved Pictures\desktop-wallpaper-god-shiva.jpg" b="100px" c="200px"/>
      <Image1 a="C:\Users\admin\OneDrive\Pictures\Saved Pictures\desktop-wallpaper-god-shiva.jpg" b="100px" c="200px"/>
      <Image1 a="C:\Users\admin\OneDrive\Pictures\Saved Pictures\desktop-wallpaper-god-shiva.jpg" b="100px" c="200px"/>
    </div>
  );
}


function Component1(props){
  return( <div>
    Child component1
    <p>{props.pdf}</p>
    <p>{props.link}</p>
    </div>
 );
}
