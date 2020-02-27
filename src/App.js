import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import ButtonPlusOne from "./components/button/ButtonPlusOne";
import ButtonPlusHundred from "./components/button/ButtonPlusHundred";
import ButtonMinusOne from "./components/button/ButtonMinusOne";
import ButtonMinusHundred from "./components/button/ButtonMinusHundred";
import ButtonReset from "./components/button/ButtonReset";
import Input from "./components/input/Input";
import ButtonSendInput from "./components/button/ButtonSendInput";

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

    handler = (number) => {
        if (this.state.count + parseInt(number) >= 0) {
            this.setState({count: this.state.count + number})
        }
    };

    input = (number) => {
        if ( parseInt(number) >= 0) {
            this.setState({count: parseInt(number)})
        }
    };

    getNumber = (number) => {
        this.setState({number: number})
    }

    reset = () => {
        this.setState({count: 0, number: ''})
    }

    render() {
          const {count, number} = this.state;
          return (
              <div className="App">
                  <Count count={count}/>
                  <ButtonPlusOne myFunc = {this.handler}/>
                  <ButtonMinusOne myFunc = {this.handler}/>
                  <ButtonPlusHundred myFunc = {this.handler}/>
                  <ButtonMinusHundred myFunc = {this.handler}/>
                  <ButtonReset myFunc={this.reset}/>
                  <Input myFunc = {this.getNumber} value={number}/>
                  <ButtonSendInput myFunc = {this.input} number = {number}/>

              </div>
          );
  }
}

export default App;
