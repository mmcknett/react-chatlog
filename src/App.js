import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const toggleHeart = (id) => {
    const newEntries = entries.map(
      (entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        }
        return entry;
      }
    );

    setEntries(newEntries);
  };


  let currentLikes = 0;
  for (const entry of entries) {
    if (entry.liked === true) {
      currentLikes += 1;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{currentLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} toggleHeartCallback={toggleHeart} />
      </main>
    </div>
  );
};

export default App;
