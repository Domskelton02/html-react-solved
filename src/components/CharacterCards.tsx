import { Character } from "../fma-data";
import CharacterCard from "./CharacterCard";

type CharacterCardsProps = {
    characters: Character[];
}

const CharacterCards = ({ characters }: CharacterCardsProps) => {
    return (
        <section id="character-cards">
            {characters.map((character: Character) => (
                <CharacterCard
                    key={character.name}
                    name={character.name}
                    nickName={character.nickName}
                    imageUrl={character.imageUrl}
                    background={character.background}
                />
            ))}
        </section>
    )
}

export default CharacterCards;