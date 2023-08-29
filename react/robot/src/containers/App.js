import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import '../index.css'
import Searchbox from "../components/Searchbox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/ErrorBoundary";



function App() {
    const [robots, setRobots] = useState([])
    const [searchfiled, setSearchfiled] = useState("")


    useEffect(() => {
        const fetching = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const response = await fetch(url);
            const data = await response.json();
            setRobots(data);
        }
    fetching();
        }, [])


    const onSearchchange = (event) => {
        setSearchfiled(event.target.value);
    }

    const filteredrobots = robots.filter(robots => {
        return robots.name.toLocaleLowerCase().includes(searchfiled.toLocaleLowerCase());
    })

    
    if (robots.length === 0) {
        return <h1 className='tc'> Loading ...</h1>
    } else {
        return (
            <div className= 'tc'>
                <div>
                    <h1 className='headingfont'> Robot Friends</h1><hr className='lineinmiddle'/>
                    <Searchbox searchChange = {onSearchchange}/>
                </div>
                <Scroll>
                    <ErrorBoundary>
                        <div className= 'shadow-5'>
                            {filteredrobots.map(robot => (
                                <Card key = {robot.name} id={robot.id} name={robot.name} email={robot.email}/>
                                ))}
                        </div>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
    }
}


export default App;