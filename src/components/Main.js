import React, { Component } from 'react';
import FoodList from '../components/FoodList';


class Main extends Component {

    render () {

        return (
            <div className="main-section"id='main'>
                <h1>React Daily News</h1>
                <FoodList />
               

            </div>
        )
    }
}

export default Main;