import React, { Component } from 'react';

class Favorites extends Component {
    render() {
        var product = [
            {
                id: 1,
                name: 'Xiaomi Mi Mix',
                price: 9990000
            },
            {
                id: 2,
                name: 'Xiaomi Mi Mix',
                price: 9990000
            },
            {
                id: 3,
                name: 'Xiaomi Mi Mix',
                price: 9990000
            }
        ];
        var elements = product.map((product, index) => {
            return  (
                <div key={product.id}>
                    <h4>Tên sản phẩm: {product.name}</h4>
                    <p>Giá: {product.price}</p>
                </div>
            );
        });
        return (
            <div className="card">
                <img src="" alt=""/>
                <div className="card-body">
                    {elements}
                </div>
            </div>
        );
    }
}

export default Favorites;
