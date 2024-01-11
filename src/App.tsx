import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import CharacterRatings from './components/CharacterRating';
import { data as characters } from './fma-data';
import CharacterCards from './components/CharacterCard';


const App: React.FC = () => {
  const sortedCharacters = [...characters]
  .sort((a, b) => b.votes - a.votes)
  .slice(0, 5);

  return (
    <>
      <Header />
      <CharacterRatings characters={sortedCharacters} />
      <CharacterCards characters={characters} />
    </>
  );
};

export default App;
