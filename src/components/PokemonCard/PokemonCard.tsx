import React, { FC } from 'react';
import './PokemonCard.scss';

interface Props {
  name?: string;
  id?: string | number;
  image?: string;
  types?: string[];
}

const PokemonCard: FC<Props> = (props: Props) => {
  const { name, id, image, types } = props;

  return (
    <div className="PokemonCard-container">
      <div className="PokemonCard-imageContainer">
        <img className="PokemonCard-image" src={image} alt={name} />
      </div>
      <div className="PokemonCard-descriptionContainer">
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
};

export default PokemonCard;
