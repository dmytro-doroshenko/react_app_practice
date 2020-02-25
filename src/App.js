import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./components/count/Count";
import ButtonPlusOne from "./components/button/ButtonPlusOne";
import ButtonPlusHundred from "./components/button/ButtonPlusHundred";
import ButtonMinusOne from "./components/button/ButtonMinusOne";
import ButtonMinusHundred from "./components/button/ButtonMinusHundred";
import ButtonReset from "./components/button/ButtonReset";

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor');
        this.state = {
            count: 0,
        };
        //this.handler = this.handler.bind(this)

    }
// state = {count: 1,
//         data: null,}


    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       console.log('prevProps');
       console.log(prevProps);
        console.log('prevState');
        console.log(prevState);


    }

    handler = (number) => {
        if (this.state.count + parseInt(number) >= 0) {
            this.setState({count: this.state.count + number})
        }
    };

    reset = () => {
        this.setState({count: 0})
    }

    render() {
          console.log('render');
          const {count} = this.state;
          return (
              <div className="App">
                  <Count count={count}/>
                  <ButtonPlusOne myFunc = {this.handler}/>
                  <ButtonMinusOne myFunc = {this.handler}/>
                  <ButtonPlusHundred myFunc = {this.handler}/>
                  <ButtonMinusHundred myFunc = {this.handler}/>
                  <ButtonReset myFunc={this.reset}/>
              </div>
          );
  }
}

export default App;
