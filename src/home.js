import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListMovie from "./MovieList";
import AddModal from "./Modal";
import EntryPage from "./register";
import { Route, BrowserRouter, NavLink, Link } from "react-router-dom";
import Search from "./Search";
import Favorite from "./favorite/favorite";
import ReactModal from 'react-modal'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false,
      movies: [
        {
          id: 1,
          title: "Bad boy",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21MdGN2Y21qbVRFRWNtcGptbW1tbW5JeHZj.jpg",
          rating: "5",
          year: "2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          title: " the wild",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21ZcGJtRXZjdk51Y21zamxhbWJsbG12.jpg",
          rating: "4",
          year: "2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 3,
          title: "EXTRACTION",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21ZcEVtVHBMY0VjUHZOZ2FtVHJOag.jpg",
          rating: "5",
          year: "2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 4,
          title: " ENDGAME",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21MY212bWptdm12bWpFY21ibUVtSGNtRW1FY3dQ.jpg",
          rating: "3",
          year: "2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 5,
          title: "ALADIN",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21MTll2bW12Y211Y3ZjUGxQbUVhd0Nq.jpg",
          rating: "4",
          year: "2019",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 6,
          title: "Bad Trip",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21ZcEVtb2NtYm1hY21iS2F2Y2NOVFln.jpg",
          rating: "3",
          year: "2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 7,
          title: "DOLITTLE",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21MdGNtWW9jbWJFY21vY21iUHhtbVB2dw.jpg",
          rating: "4",
          year: "2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 8,
          title: "Spider-Man",
          image:
            "https://pic.egybest.net/i/WmFwZndlY3ZOWWptVGJtdWNtSWFtSWxhYVBtZw.jpg",
          rating: "5",
          year: "2017",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 9,
          title: "Jumanji",
          image:
            "https://cdn-static.egybest.net/serve/movies/art-2799680260-x300.jpg",
          rating: "5",
          year: "2019",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {

          id: 10,
          title: "FRANKIE",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21MY212bWptam1qbXVjbWJtSFVURWNOdmN3.jpg",
          rating: "2",
          year: "2018",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 11,
          title: "Z",
          image:
            "https://pic.egybest.net/i/WmFwZndlY21MY212dmNtVHBqRWNjd2FtYm1ZcFR2bXY.jpg",
          rating: "3",
          year: "2019",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 12,
          title: "Sonic",
          image:
            "https://cdn-static.egybest.net/serve/movies/art-2838056871-x300.jpg",
          rating: "3",
          year: "2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
      ],
      keyword: "",
      ratenote: "",
      listfav: [],

      showModal: false

    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  addToFavorite = (id) => {
    const data = this.state.movies.find((item) => item.id === id);
    this.setState({
      listfav: [...this.state.listfav, data],
    });

  };
  deleteToFavorite = id => {
    const hapus = this.state.listfav.filter(item => item.id !== id);
    this.setState({ listfav: hapus });
  }; 60
  ChangeValue = (input) => {
    this.setState({
      userInput: input,
    });
  };
  filterRate = (count) => {
    this.setState({ rate: count });
  };
  add = (NewMovie) => {
    this.setState({
      movies: this.state.movies.concat(NewMovie),
    });
    console.log(this.listfav);
  };
  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  search = (newSearch) => {
    this.setState({ keyword: newSearch });
  };

  rate = (newRate) => {
    this.setState({ ratenote: newRate });
  };
  render() {
    return (
      <div>
        <h1 id="h1">
          <img
            className="app-logo"
            className="img"
            src="https://lh3.googleusercontent.com/CtJZQ5wzxkjm6H9fvmmujKJSN9TytDqvmvl_vkWPfi62gObAZWHCGCenm0SKjZEzwO0"
            alt="MovieSearch"
          />{" "}
          MG Movies
        </h1>

        <div className="navbar">
          <Search search={(y) => this.search(y)} rate={(r) => this.rate(r)} />
          <div>
            <button className="btn1" onClick={this.handleOpenModal}>Favorite</button>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              className="Modal"
              overlayClassName="Overlay"
              onRequestClose={this.handleCloseModal}
            >


              <Favorite
                listfav={this.state.listfav}
                delete={this.deleteToFavorite}
                addToFavorite={this.addToFavorite}
              />

              <button color="warning" onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </div>
        </div>

        <div className="container">
          <ListMovie
            listfav={this.state.listfav}
            movies={this.state.movies.filter(
              (el) =>
                el.rating >= this.state.ratenote &&
                el.title
                  .toUpperCase()
                  .includes(this.state.keyword.toUpperCase().trim())
            )}
            add={this.addToFavorite}
          />
        </div>
        <AddModal addmovie={(y) => this.add(y)} />
      </div>

    );
  }
}
export default Home;
