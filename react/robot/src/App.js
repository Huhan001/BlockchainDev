import React, {Component} from "react";
import Card from "./Card";
import {robots} from "./robots";
import './index.css'
import Searchbox from "./Searchbox";




// once more i must be working with classes, if i want the state to work. which i a way to access information
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfiled: ''
        }
    }
    
    componentDidMount() {
        this.setState({robots: robots});
    }

    onSearchchange = (event) => {
        this.setState({searchfiled: event.target.value});
    }
    
    render() {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfiled.toLocaleLowerCase());
        })
        return (
            <div className= 'tc'>
                <div>
                    <h1 className='headingfont'> Robot Friends</h1><hr className='lineinmiddle'/>
                    <Searchbox searchChange = {this.onSearchchange}/>
                </div>
                <div className= 'shadow-5'>
                    {filteredrobots.map(robot => (
                        <Card key = {robot.name} id={robot.id} name={robot.name} email={robot.email}/>
                        ))}
                </div>
            </div>
            );
    }
}


export default App;