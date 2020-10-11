import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles/App.css';

import token from 'tokens/tokenMM';
import Nav from './Nav';
import UsersList from './UsersList';
import Map from './RestaurantsMap';
import About from './About';
import Search from './Search';
import ButtonFetchUsers from './ButtonFetchUsers';
import FormNewRestaurant from './FormNewRestaurant';
import LoginInterface from './LoginInterface';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],

      restaurantsFiltred: [],
      searchName: '',

      name: '',
      city: '',
      district: '',
      street: '',
      number: '',
      lat: 0,
      lng: 0,

      isSend: false,
      allOK: false,

      markersOnMap: [],
    };
  }

  handleFetch = () => {
    fetch('https://restaurantdotnetapi.herokuapp.com/restaurants')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          restaurants: data,
        });
      });
  };

  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://restaurantdotnetapi.herokuapp.com/restaurants?token=${token}`;

    const data = {
      name: this.state.name,
      address: {
        city: this.state.city,
        cityDistrict: this.state.district,
        street: this.state.street,
        buildingNumber: this.state.number,
        apartmentNumber: '1',
        coordinates: {
          latitude: this.state.lat,
          longitude: this.state.lng,
        },
      },
    };

    if (
      this.state.name === '' ||
      this.state.city === '' ||
      this.state.district === '' ||
      this.state.street === '' ||
      this.state.number === '' ||
      this.state.lat === '' ||
      this.state.lng === ''
    ) {
      console.log('puste');
      this.setState({
        allOK: false,
        isSend: true,
      });
    } else {
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      this.setState({
        name: '',
        city: '',
        district: '',
        street: '',
        number: '',
        isSend: true,
        allOK: true,
      });
    }
  };

  handleAlertBtn = () => {
    this.setState({
      isSend: false,
    });
  };

  handleSearchNameChange = (e) => {
    this.setState({
      searchName: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const url = `https://restaurantdotnetapi.herokuapp.com/restaurants?query=${this.state.searchName}`;
    fetch(url)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          restaurantsFiltred: data,
          searchName: '',
        }),
      )
      .catch((err) => Error('Error'));
  };

  componentDidMount() {
    // fetch API
    const url = 'https://restaurantdotnetapi.herokuapp.com/restaurants';
    console.log('componentDidMount from App.js');
    fetch(url)
      .then((data) => {
        console.log(data);
        if (!data.ok) throw new Error('Error with data fetching from the server');
        return data.json();
      })
      .then((res) => {
        console.log(res);
        return this.setState({
          restaurants: res,
        });
      })
      .catch((err) => Error('błąd'));
  }

  render() {
    return (
      <Router>
        <>
          <Nav />
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/post">
            <FormNewRestaurant
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleAlertBtn={this.handleAlertBtn}
              name={this.state.name}
              city={this.state.city}
              district={this.state.district}
              street={this.state.street}
              number={this.state.number}
              lat={this.state.lat}
              lng={this.state.lng}
              isSend={this.state.isSend}
              allOK={this.state.allOK}
            />
          </Route>
          <Route path="/get">
            <div className="list__container">
              <ButtonFetchUsers handleFetch={this.handleFetch} />
              <UsersList restaurants={this.state.restaurants} />
            </div>
          </Route>
          <Route path="/search">
            <Search
              restaurantsFiltred={this.state.restaurantsFiltred}
              searchName={this.state.searchName}
              handleSearchNameChange={this.handleSearchNameChange}
              handleSearch={this.handleSearch}
            />
          </Route>
          <Route path="/maps">
            <Map />
          </Route>
          <Route path="/login">
            <LoginInterface />
          </Route>
        </>
      </Router>
    );
  }
}

export default App;
