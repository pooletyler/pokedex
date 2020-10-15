import React, { FC, useState } from 'react';
import './SearchBar.scss';

interface Props {
  inputValue?: string;
  recentSearches?: string[];
  onClick?: (searchString: string) => void;
  onChange?: (inputValue: string) => void;
}

const SearchBar: FC<Props> = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const { inputValue, recentSearches, onClick, onChange } = props;

  const handleClickSearchButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const element = event.target as HTMLElement;
    element.blur();
    onClick(inputValue);
  };

  const handleClickRecentSearch = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const element = event.target as HTMLElement;
    onClick(element.innerHTML);
  };

  const handleKeyDownRecentSearch = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const element = event.target as HTMLElement;
      onClick(element.innerHTML);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  return (
    <div
      className="SearchBar-container"
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        className="SearchBar-input"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className="SearchBar-button"
        type="button"
        onClick={handleClickSearchButton}
      >
        Search
      </button>
      {recentSearches.length > 0 && isFocused && (
        <div className="SearchBar-recentSearchContainer">
          <div className="SearchBar-recentSearchTitle">Recent Searches</div>
          {recentSearches.map((recentSearch: string) => {
            return (
              <div
                className="SearchBar-recentSearch"
                onClick={handleClickRecentSearch}
                onKeyDown={handleKeyDownRecentSearch}
                role="button"
                tabIndex={0}
              >
                {recentSearch}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

SearchBar.defaultProps = {
  inputValue: '',
  recentSearches: [],
  onClick: () => {},
  onChange: () => {},
};

export default SearchBar;
