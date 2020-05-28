import React, { Component } from "react";
import "./Modal.css"







class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            title: "",
            image: "",
            rating: "",
            year: ""
        };
    }

    handelChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    addNewMovie = () => {
        this.props.addmovie({ ...this.state })
    }

    render() {
        return (
            <div>


                <div className="add" show={this.state.show} onHide={this.handleShow}>




                    <div>
                        <div>
                            <label>Title:</label>
                            <input type="text" name="title" onChange={this.handelChange}
                                value={this.state.value} />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input type="text" name="image" value={this.state.value}
                                onChange={this.handelChange} />
                        </div>
                        <div>
                            <label>Rating:</label>
                            <input type="text" name="rating" value={this.state.value}
                                onChange={this.handelChange} />
                        </div>
                        <div>
                            <label>Year:</label>
                            <input type="text" name="year" value={this.state.value}
                                onChange={this.handelChange} />
                        </div>
                    </div>



                    <button className="button" onClick={this.addNewMovie} >Add Movie</button>

                </div>
            </div>
        );
    }
}

export default AddModal;