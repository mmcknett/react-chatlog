import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likes, setLikes] = useState(0);

  const toggleHeart = (id) => {
    let currentLikes = 0;
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      if (entry.liked === true) {
        currentLikes += 1;
      }
    }
    const newEntries = [...entries];
    setEntries(newEntries);
    setLikes(currentLikes);
  };

  // const countLikes = () => {
  //   let currentLikes = 0;
  //   for (const entry of entries) {
  //     if (entry.liked === true) {
  //       currentLikes += 1;
  //     }
  //   }
  //   setLikes(currentLikes);
  // };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{likes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} toggleHeartCallback={toggleHeart} />
      </main>
    </div>
  );
};

export default App;
