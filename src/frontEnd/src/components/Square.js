import React from 'react';

export default function Square(props) {
  const handleClick = (e) => {
    console.log(e.target)
    props.onClick(e)
  }
  return (
    <button style={{ backgroundColor: "white", borderWidth: 4 }} className="square" onClick={handleClick}>
      {props.value}
    </button>
  );
}