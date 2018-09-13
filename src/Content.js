import React, { Component } from 'react';
import Favorites from './Favorites';
import User from './User';
import Product from './Product';

class Content extends Component {
    constructor(prop){
        super(prop);
        this.addProduct = this.addProduct.bind(this);
        this.changeActive = this.changeActive.bind(this);
        this.state = {
            product : [
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
            ],
            isActive : true
        };
    }

    addProduct(){
        alert(this.refs.nameProduct.value+' | '+this.refs.priceProduct.value);
    }

    changeActive(){
        /*if (this.state.isActive === true){
            this.setState({
                isActive: false
            });
        }else{
            this.setState({
                isActive: true
            });
        }*/
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        let elements = this.state.product.map((product, index) => {
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
        let elementsTable = this.state.product.map((product, index) => {
            return  <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                                <td>{product.price}</td>
                    </tr>
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
                <div className="container mt-4">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elementsTable}
                        </tbody>
                    </table>
                    <button className="btn btn-dark" onClick={this.changeActive}>
                        Active: {this.state.isActive? "On" : "Off"}
                    </button>
                </div>
            </div>
        );
    }
}

export default Content;
