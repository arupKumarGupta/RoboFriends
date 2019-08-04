import React from 'react';
import {CardList} from '../components/Card-List';
import { SearchBox } from '../components/Search-Box';
import './App.css'; 
import { Scroll } from '../components/Scroll';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchText: '',
        }
    }

    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
       .then(users=>this.setState({robots: users}));
    }
    render() {
        return (
            <div className="main tc">
                <h1 className="tc">ROBOFRIENDS</h1>
                <SearchBox searchEvent={this.searchEvent} searchText={this.state.searchText}/>
                <Scroll>
                    <CardList robots={this.state.robots}/>
                </Scroll>
            </div>
        );
    }
    searchEvent = (event) => {
        const text = event.target.value;
        const searchedResult = this.state.robots.filter(robo => robo.name.toLowerCase().includes(text.toLowerCase()));
        this.setState({robots: searchedResult,searchText:text});
        
     }
 
}
export default App;