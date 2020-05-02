import React from 'react';
import Hand from './Components/Hand'
import Deck from './Components/Deck'
import Stack from './Components/Stack'
import InfoBoard from './Components/InfoBoard';

function App() {
  return (
    <div>
      <h1 className="text-3xl mt-3 text-center font-bold">Uno</h1>
      <div className="flex justify-around mt-20">
        <Deck></Deck>
        <Stack></Stack>
        <InfoBoard></InfoBoard>
      </div>
      <Hand></Hand>
    </div>
  );
}

export default App;
