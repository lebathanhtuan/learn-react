import React, { Component } from 'react';

class Favorites extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.addToCart1 = this.addToCart1.bind(this);
    }

    addToCart1(){
        alert(this.props.name);
    }

    addToCart2 = () => {
        alert(this.props.name);
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="card">
                    <img src="" alt=""/>
                    <div className="card-body">
                        <h4>{this.props.name}</h4>
                        <p>{this.props.price} VND</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-light" onClick={this.addToCart1}>Add to cart 1</button>
                        <button className="btn btn-light" onClick={this.addToCart2}>Add to cart 2</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Favorites;
