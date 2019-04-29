import React from "react";
import Header from './Header';
import Body from './Body';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
            <Header></Header>
            <Body></Body>
            </div>
            
        )
    }
}

export default App;