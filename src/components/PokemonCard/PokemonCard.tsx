import React, { FC, useState } from 'react';
import './PokemonCard.scss';

interface Props {
  name?: string;
  id?: string | number;
  image?: string;
  types?: string[];
  abilities?: string[];
  moves?: string[];
  varieties?: string[];
}

const PokemonCard: FC<Props> = (props: Props) => {
  const [expanded, setExpanded] = useState(false);

  const { name, id, image, types, abilities, moves, varieties } = props;

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setExpanded(!expanded);
    }
  };

  return (
    <div
      className={`PokemonCard-container${
        (expanded && ' PokemonCard-containerExpanded') || ''
      }`}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      role="button"
      tabIndex={0}
    >
      <div className="PokemonCard-imageContainer">
        {!expanded && (
          <img
            className="PokemonCard-image"
            src={
              image ||
              'https://vignette.wikia.nocookie.net/pokemon-glitch/images/8/8e/Spr_3r_000.png/revision/latest?cb=20130324000249'
            }
            alt={name}
          />
        )}
      </div>
      <div
        className={`PokemonCard-descriptionContainer${
          (expanded && ' PokemonCard-descriptionContainerExpanded') || ''
        }`}
      >
        <div className="PokemonCard-descriptionContainerText">
          <span className="PokemonCard-descriptionContainerDescriptor">
            Type:
          </span>
          {`  ${types[0]}`}
          {types[1] && ` / ${types[1]}`}
        </div>
        <div className="PokemonCard-descriptionContainerText">
          <span className="PokemonCard-descriptionContainerDescriptor">
            Name:
          </span>
          {`  ${name}`}
        </div>
        <div className="PokemonCard-descriptionContainerText">
          <span className="PokemonCard-descriptionContainerDescriptor">
            No:
          </span>
          {`  ${id}`}
        </div>
        {expanded && (
          <>
            <div className="PokemonCard-descriptionContainerText">
              <span className="PokemonCard-descriptionContainerDescriptor">
                Abilities:
              </span>
              {` ${abilities.map((ability) => {
                return ` ${ability}`;
              })}`}
            </div>
            <div className="PokemonCard-descriptionContainerText">
              <span className="PokemonCard-descriptionContainerDescriptor">
                Moves:
              </span>
              {` ${moves.map((move) => {
                return ` ${move}`;
              })}`}
            </div>
            <div className="PokemonCard-descriptionContainerText">
              <span className="PokemonCard-descriptionContainerDescriptor">
                Varieties:
              </span>
              {` ${varieties.map((variety) => {
                return ` ${variety}`;
              })}`}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

PokemonCard.defaultProps = {
  name: '??????????',
  id: '000',
  image:
    'https://vignette.wikia.nocookie.net/pokemon-glitch/images/8/8e/Spr_3r_000.png/revision/latest?cb=20130324000249',
  types: [''],
  abilities: [''],
  moves: [''],
  varieties: [''],
};

export default PokemonCard;
