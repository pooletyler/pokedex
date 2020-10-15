import React, { FC } from 'react';
import SpinningPokeball from '../SpinningPokeball/SpinningPokeball';
import './Loading.scss';

const Loading: FC<any> = () => {
  return (
    <div className="Loading-container">
      <SpinningPokeball />
    </div>
  );
};

export default Loading;
