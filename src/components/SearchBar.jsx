import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-icon">
                <i className="fas fa-search"/>
            </div>
            <input type="text" name="search" placeholder="Rechercher"/>
        </div>
    );
}

export default SearchBar;
