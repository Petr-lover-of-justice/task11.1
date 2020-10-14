import React from 'react';

export default function PlayerInput(props) {

  return (
    <div style={{ marginTop: "10px" }}>
      <input placeholder="Player1" onChange={props.handleChange1} />
      <input placeholder="Player2" onChange={props.handleChange2} />
    </div>
  )
}


