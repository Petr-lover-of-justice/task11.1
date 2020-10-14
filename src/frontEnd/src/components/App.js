import React from 'react';
import AppRouter from './AppRouter'

export default function App(props) {

  return (
    <div>
      <div>
        HEADER
     </div>
      <AppRouter />
      <div>
        FOOTER
      </div>
    </div>
  );
}