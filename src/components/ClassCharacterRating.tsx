import React from 'react';
import './CharacterRating.css';
import { Character } from '../fma-data';

type CharacterRatingsProps = {
    characters: Character[];
};

class CharacterRatings extends React.Component<CharacterRatingsProps> {
    render() {
        const { characters } = this.props;
        return (
            <section id="character-ratings">
                <h4>Top Characters</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skillset</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.map((character, index) => (
                            <tr key={character.name} className={index % 2 === 0 ? 'dark' : 'light'}>
                                <td>{character.name}</td>
                                <td>{character.skillset}</td>
                                <td>{character.votes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default CharacterRatings;