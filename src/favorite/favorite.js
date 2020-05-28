import React from "react";
import { Button } from 'reactstrap';

class Favorite extends React.Component {
  render() {

    const fav = this.props.listfav.map(item => (
      <div className="listbook" key={item.id}>
        <div className="imagenya">
          <img className="imgstyle" src={item.image} />
        </div>
        <div className="descnya">
          <h3>{item.title}</h3>
          <p>
            <br />
            <span> {item.rate}</span>
            <button color="danger" onClick={() => this.props.delete(item.id)}>
              remove </button>
          </p>
        </div>
      </div>
    ));


    return (<div> {fav}</div >);
  }
}

export default Favorite;
