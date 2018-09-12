import React, { Component } from 'react';
import Favorites from './Favorites';
import User from './User';
import Product from './Product';

class Content extends Component {
    constructor(prop){
        super(prop);
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(){
        alert(this.refs.nameProduct.value);
    }

    render() {
        let product = [
            {
                id: 1,
                name: 'Xiaomi Mi Mix',
                price: 9990000,
                status: true
            },
            {
                id: 2,
                name: 'Xiaomi Mi Mix',
                price: 9990000,
                status: true
            },
            {
                id: 3,
                name: 'Xiaomi Mi Mix',
                price: 9990000,
                status: true
            },
            {
                id: 4,
                name: 'Xiaomi Mi Mix',
                price: 9990000,
                status: true
            },
            {
                id: 5,
                name: 'Xiaomi Mi Mix',
                price: 9990000,
                status: false
            },
            {
                id: 6,
                name: 'Xiaomi Mi Mix',
                price: 9990000,
                status: false
            }
        ];
        let elements = product.map((product, index) => {
            let result = '';
            if(product.status){
                result =    <Product 
                                key={product.id}
                                name={product.name}
                                price={product.price}
                            />
            }
            return result;
        });
        return (
            <div>
                <h1>
                    Hello World
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <User />
                        </div>
                        <div className="col-md-6">                            
                            <Favorites />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-inline">
                                <label htmlFor="nameProduct">Tên sản phẩm:</label>
                                <input type="text" className="form-control m-3" ref="nameProduct"/>
                                <label htmlFor="prictProduct">Giá:</label>
                                <input type="text" className="form-control m-3" ref="priceProduct"/>
                                <button className="btn btn-dark" onClick = {this.addProduct}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        {elements}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
