import React, { Component } from 'react';

class User extends Component {
    showInfoUser(user){
        if(user.status){
            return  <p>{user.status? 'Active' : 'Pending'}</p>
        }
    }
    render() {
        var user = {
            name: 'Lê Bá Thanh Tuấn',
            email: 'lebathanhtuan@gmail.com',
            status: true
        }
        return (
            <div className="card">
                <img src="" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">{user.email}</p>
                    {this.showInfoUser(user)}
                </div>
            </div>
        );
    }
}

export default User;
