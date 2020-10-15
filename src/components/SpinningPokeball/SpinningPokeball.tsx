import React, { FC } from 'react';
import './SpinningPokeball.scss';

const SpinningPokeball: FC<any> = () => {
  return (
    <div className="SpinningPokeball-container">
      <div className="SpinningPokeball-pokeball">
        <div className="SpinningPokeball-pokeballUpper">
          <div className="SpinningPokeball-pokeballInner" />
        </div>
        <div className="SpinningPokeball-pokeballMiddle" />
        <div className="SpinningPokeball-pokeballLower">
          <div className="SpinningPokeball-pokeballInner" />
        </div>
      </div>
    </div>
  );
};

export default SpinningPokeball;
