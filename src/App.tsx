import React from 'react';
import Header from './components/Header';
import CharacterRatings from './components/CharacterRating';
import CharacterCard from './components/CharacterCard';
import { data as characters } from './fma-data';

const App: React.FC = () => {
  const sortedCharacters = [...characters].sort((a, b) => b.votes - a.votes).slice(0, 5);

  return (
    <div>
      <Header />
      <CharacterRatings characters={sortedCharacters} />
      {characters.map((character) => (
        <CharacterCard
          key={character.name}
          name={character.name}
          nickName={character.nickName}
          imageUrl={character.imageUrl}
          background={character.background}
        />
      ))}
    </div>
  );
};

export default App;
