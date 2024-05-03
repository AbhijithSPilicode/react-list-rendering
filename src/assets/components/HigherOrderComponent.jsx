import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderFilteredItems = (userType) => {
        const data = this.state.userData;
        const filteredData = data.filter(item => item.user_type === userType);
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderFilteredItemsWithJ = () => {
        const data = this.state.userData;
        const filteredData = data.filter(item => item.name.startsWith('J'));
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderFilteredItemsBasedonAge = () => {
        const data = this.state.userData;
        const filteredData = data.filter(item => item.age > 28 && item.age <= 50);
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                    <span>Age: {item.age}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    
    render() {
        return (
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()} </ul>
                </div>

                <h1>Display based on user types</h1>
                <div className="display-box">
                    <h2>Designers</h2>
                    <ul>{this.renderFilteredItems('Designer')}</ul>
                </div>

                <div className="display-box">
                    <h2>Filter all data starting with J</h2>
                    <ul>{this.renderFilteredItemsWithJ()}</ul>
                </div>

                <div className="display-box">
                    <h2>Filter All data Age between 28 and 50</h2>
                    <ul>{this.renderFilteredItemsBasedonAge()}</ul>
                </div>


            </React.Fragment>
            
        );
    }
}

export default HigherOrderComponent;
