import React from 'react';
import 'styles/Search.css';
import 'styles/UsersList.css';

const Search = (props) => {
  const users = props.restaurantsFiltred.map((restaurant) => (
    <div key={restaurant.restaurantId}>
      <h1>{restaurant.name}</h1>
      <br />
      <p>{restaurant.address.city}</p>
      <p>{restaurant.address.street}</p>
      <p>{restaurant.address.buildingNumber}</p>
    </div>
  ));
  return (
    <>
      <h1 className="search-title">Wyszukaj restaurację:</h1>
      <div className="restaurant-search-container">
        <form className="searcher-container" onSubmit={props.handleSearch}>
          <input
            type="text"
            value={props.searchName}
            onChange={props.handleSearchNameChange}
            name="searcher-input"
            className="searcher-input"
            placeholder="Podaj nazwę..."
          />
          <button type="submit">Wyszukaj</button>
        </form>
        <div className="filter-container users">{users}</div>
      </div>
    </>
  );
};

export default Search;
