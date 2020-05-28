import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListMovie from "./MovieList";
import AddModal from "./Modal";
import EntryPage from "./register";
import Home from "./home";

import Search from "./Search";
import { BrowserRouter, Route } from "react-router-dom";
import Favorite from "./favorite/favorite";
import FromSpinner from "./spinner"

class App extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const Spinner = FromSpinner(Home);
    return (

      <BrowserRouter>
        <div className="App">


          <Route exact path="/" component={EntryPage} />



        </div>
        <div>
          <Spinner isLoading={this.state.isLoading} />
        </div>
      </BrowserRouter>

    );
  }
}
export default App;
