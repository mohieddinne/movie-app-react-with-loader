import React, { Component } from "react";
import "./App.css"
import StarRatingComponent from "react-star-rating-component";
class ListMovie extends React.Component {
  render() {
    const film = this.props.movies.map(item => (




      <div className="card-m " key={item.id}>
        <div className=" face">
          <img className="content" src={item.image} alt={item.title} />
        </div>
        <div className="icon">
          <h3> {item.title}</h3>

          <StarRatingComponent name="rate1" starCount={5} value={item.rating} />
          <h3> {item.year}</h3>
          <p>{item.description}</p>

          <button className="button" onClick={() => this.props.add(item.id)}>Add to Fav</button>


        </div>
      </div>

    ));
    return (
      <div>

        {film}
      </div>
    );
  }
}
/*  <div className="list-items">

    {this.props.movies.map((el) => (
      <div className="movie-card">
        <h3> {el.title} </h3> <img src={el.image} height="300px" />
        <h3> {el.year} </h3>{" "}
        <StarRatingComponent name="rate1" starCount={5} value={el.rating} />{" "}
        <button onClick={() => this.props.addToFavorite(el.title)}>
          add to favorite
        </button>
        <h1>{this.props.listfav.title}</h1>
      </div>
    ))}{" "}
  </div>
);
}
}*/

export default ListMovie;
