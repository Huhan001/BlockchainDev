import React, {Component} from "react";
import Card from "../components/Card";
import '../index.css'
import Searchbox from "../components/Searchbox";
import Scroll from "../components/scroll";




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
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
           return  response.json();
        }).then(users => {
            this.setState({robots: users});
        })
    }

    onSearchchange = (event) => {
        this.setState({searchfiled: event.target.value});
    }
    
    render() {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfiled.toLocaleLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'> Loading ...</h1>
        } else {
            return (
                <div className= 'tc'>
                    <div>
                        <h1 className='headingfont'> Robot Friends</h1><hr className='lineinmiddle'/>
                        <Searchbox searchChange = {this.onSearchchange}/>
                    </div>
                    <Scroll>
                    <div className= 'shadow-5'>
                        {filteredrobots.map(robot => (
                            <Card key = {robot.name} id={robot.id} name={robot.name} email={robot.email}/>
                            ))}
                    </div>
                    </Scroll> 
                </div>
                );
        }
    }
}


export default App;