import React, { FC } from 'react';
import './SearchBar.scss';

const SearchBar: FC<any> = () => {
  return (
    <div className="SearchBar-container">
      <input className="SearchBar-input" />
      <button className="SearchBar-button" type="button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
