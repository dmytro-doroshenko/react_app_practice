import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor');
        this.state = {
            count: 0,
            number: ''
        };
        //this.handler = this.handler.bind(this)

    }
// state = {count: 1,
//         data: null,}


    // componentDidMount() {
    //     console.log('componentDidMount');
    // }
    //
    // componentWillUnmount() {
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //    console.log('prevProps');
    //    console.log(prevProps);
    //     console.log('prevState');
    //     console.log(prevState);
    //
    //
    // }

    changeCounter = (number) => {
        // function function takes a number and adds it to an existing one in memory, provided that the result is greater than or equal to zero
        if (this.state.count + parseInt(number) >= 0) {
            this.setState({count: this.state.count + parseInt(number)})
        }
    };

    setNumber = (number) => {
        // function tracks the value in the input area and stores it in memory
        this.setState({number: number})
    }

    reset = () => {
        // function resets the counter's value
        this.setState({count: 0, number: ''})
    }

    render() {
          const {count, number} = this.state;
          return (
              <div className="App">
                  <Count count={count}/>
                  <Button change = {this.changeCounter} reset = {this.reset}/>
                  <Input track = {this.setNumber} change = {this.changeCounter} value = {number}/>

              </div>
          );
  }
}

export default App;
