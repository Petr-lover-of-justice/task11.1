import React from 'react';

export default function SignIn(props) {
  const [userId, setUserId] = React.useState();
  const handleChange1 = event => {
    setUserId(event.target.value);
  };

  return (
    <React.Fragment>
      <h1> Авторизация </h1>
      <div>
        <p>Введите свой ID</p>
        <input onChange={handleChange1}></input>
        <button>Войти</button>
        <h1> Ваш ID {userId} </h1>
      </div>
    </React.Fragment>

  );
}