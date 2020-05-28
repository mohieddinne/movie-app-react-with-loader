import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import 'bootstrap/dist/css/bootstrap.min.css';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1
        }
    }
    onStarClick(nextValue) {
        this.setState({ rating: nextValue }, () => this.props.rate(this.state.rating))


    }
    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    onChange={e => this.props.search(e.target.value)}
                />

                <StarRatingComponent className="star"
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}

                />
            </div>
        )
    }
}
export default Search;