import React from 'react';

import LobbyView from './Views/LobbyView'
import GameView from './Views/GameView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <LobbyView></LobbyView>
    </>               
  );
}

export default App;
