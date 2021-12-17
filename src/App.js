import React, { useState } from 'react';
import './App.css';

import ViewPage from './components/ViewPage';
import EditPage from './components/EditPage';



function App() {

  const [isEdit, setIsEdit] = useState(true)
  const [cards, setCards] = useState([])

  const handleClick = () => {
    setIsEdit(!isEdit)
  }

  const addCard = (front, back) => {
    setCards([...cards, { front, back }])
  }

  const handleDelete = (index) => {
    const card = [...cards]
    card.splice(index, 1);
    setCards(card);
  }

  return (
    <div>

      {isEdit ?
        <EditPage
          cards={cards}
          handleClick={handleClick} addCard={addCard} deleteCard={handleDelete} /> :

        <ViewPage
          cards={cards}
          handleClick={handleClick} />}
    </div>
  );
}

export default App;
