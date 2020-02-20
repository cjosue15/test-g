import React from 'react';
import Navbar from './components/Navbar';

//TEST1
import Step1 from './components/Test1/Step1';

//TEST2
import Step2 from './components/Test2/Step2';

//TEST3
import Step3 from './components/Test3/Step3';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      test1: {},
      test2: {},
      test3: {}
    };
  }

  handleChange1 = event => {
    const { name, value } = event.target;
    this.setState({
      test1: {
        ...this.state.test1,
        [name]: value
      }
    });
  };

  handleChange2 = event => {
    const { name, value } = event.target;
    this.setState({
      test2: {
        ...this.state.test2,
        [name]: value
      }
    });
  };

  handleChange3 = event => {
    const { name, value } = event.target;
    this.setState({
      test3: {
        ...this.state.test3,
        [name]: value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { test1 } = this.state;
    const { test2 } = this.state;
    console.log({ test1, test2 });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 15 ? 16 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button'
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return <span></span>;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 16) {
      return (
        <button className='btn btn-primary' type='button' onClick={this._next}>
          Next
        </button>
      );
    }
    return <span></span>;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <p>Step {this.state.currentStep} </p>
          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange1}
              state={this.state}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange2}
              state={this.state}
            />

            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange3}
              state={this.state}
            />
            <div className='conten-buttons'>
              {this.previousButton()}
              {this.nextButton()}
            </div>
          </form>
          {JSON.stringify(this.state)}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
