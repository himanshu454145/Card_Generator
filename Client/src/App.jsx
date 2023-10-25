import { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { title: 'Item 1', content: 'Description 1' },
  ]);

  const cardGenerator = () => {
    const newObject = {
      title: `Item ${cards.length + 1}`,
      content: `Description ${cards.length + 1}`,
    };

    setCards([...cards, newObject]);
  }

  return (
    <div className='app'>
      <button onClick={cardGenerator}>Add Card</button>
      <div className='card-container'>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
