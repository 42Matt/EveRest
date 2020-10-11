import React from 'react';
import 'styles/UsersList.css';

const UsersList = (props) => {
  const users = props.restaurants.map((restaurant) => (
    <div key={restaurant.restaurantId}>
      <h1>{restaurant.name}</h1>
      <br />
      <p>{restaurant.address.city}</p>
      <p>{restaurant.address.street}</p>
      <p>{restaurant.address.buildingNumber}</p>
    </div>
  ));
  return <div className="users">{users}</div>;
};

export default UsersList;
