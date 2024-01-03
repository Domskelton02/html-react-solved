import React from 'react';
import './CharacterCard.css';
import { Character } from '../fma-data';

type CharacterCardProps = Pick<Character, 'name' | 'nickName' | 'imageUrl' | 'background'>;

const CharacterCard: React.FC<CharacterCardProps> = ({ name, nickName, imageUrl, background }) => {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {}
        {nickName && <h4>{nickName}</h4>}
      </div>
      <img src={imageUrl} alt={name} />
      <p>{background}</p>
    </div>
  );
};

export default CharacterCard;
