import React from 'react';
import Navbar from './components/Navbar';

//TEST1
import Step1 from './components/Test1/Step1';

//TEST2
import Step2 from './components/Test2/Step2';

//TEST3
import Step3 from './components/Test3/Step3';

//TEST4
import Step4 from './components/Test4/Step4';

import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      test1: {},
      test2: {},
      test3: {},
      test4: {}
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

  handleChange4 = event => {
    const { name, value } = event.target;
    this.setState({
      test4: {
        ...this.state.test4,
        [name]: value
      }
    });
  };

  handleSubmit = event => {
    const { test1 } = this.state;
    const { test2 } = this.state;
    const { test3 } = this.state;
    const { test4 } = this.state;

    console.log({ test1, test2, test3, test4 });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 19 ? 20 : currentStep + 1;
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

    if (
      currentStep === 2 ||
      currentStep === 6 ||
      currentStep === 7 ||
      currentStep === 12 ||
      currentStep === 13 ||
      currentStep === 17 ||
      currentStep === 18 ||
      currentStep === 21
    ) {
      return <span></span>;
    }

    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button'
          onClick={this._prev}
        >
          Anterior
        </button>
      );
    }
    return <span></span>;
  }

  nextButton() {
    let currentStep = this.state.currentStep;

    if (currentStep === 5 || currentStep === 11 || currentStep === 16) {
      return null;
    }

    if (currentStep < 20) {
      return (
        <button className='btn btn-primary' type='button' onClick={this._next}>
          Siguiente
        </button>
      );
    }
    return null;
  }

  callBackTimer = (seconds, minutes, step) => {
    if (seconds === 0 && minutes === 0) {
      switch (step) {
        case 1:
          this.setState({
            currentStep: 6
          });
          break;
        case 2:
          this.setState({
            currentStep: 12
          });
          break;
        case 3:
          this.setState({
            currentStep: 17
          });
          break;
        case 4:
          this.handleSubmit();
          this.setState({
            currentStep: 21
          });
          break;
        default:
          break;
      }
    }
  };

  Step1() {
    const step = this.state.currentStep;

    let step1 = null;

    if (step === 1 || step === 2 || step === 3 || step === 4 || step === 5) {
      step1 = (
        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange1}
          state={this.state}
        >
          <Timer
            minutes={3}
            seconds={0}
            step={1}
            callBackTimer={this.callBackTimer}
          />
        </Step1>
      );
    }
    return step1;
  }

  Step2() {
    const step = this.state.currentStep;

    let step2 = null;

    if (
      step === 6 ||
      step === 7 ||
      step === 8 ||
      step === 9 ||
      step === 10 ||
      step === 11
    ) {
      step2 = (
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange2}
          state={this.state}
        >
          <Timer
            minutes={4}
            seconds={0}
            step={2}
            callBackTimer={this.callBackTimer}
          />
        </Step2>
      );
    }
    return step2;
  }

  Step3() {
    const step = this.state.currentStep;

    let step3 = null;

    if (
      step === 12 ||
      step === 13 ||
      step === 14 ||
      step === 15 ||
      step === 16
    ) {
      step3 = (
        <Step3
          currentStep={this.state.currentStep}
          handleChange={this.handleChange3}
          state={this.state}
        >
          <Timer
            minutes={3}
            seconds={0}
            step={3}
            callBackTimer={this.callBackTimer}
          />
        </Step3>
      );
    }
    return step3;
  }

  Step4() {
    const step = this.state.currentStep;

    let step4 = null;

    if (
      step === 17 ||
      step === 18 ||
      step === 19 ||
      step === 20 ||
      step === 21
    ) {
      step4 = (
        <Step4
          currentStep={this.state.currentStep}
          handleChange={this.handleChange4}
          state={this.state}
        >
          <Timer
            minutes={2}
            seconds={30}
            step={4}
            callBackTimer={this.callBackTimer}
          />
        </Step4>
      );
    }
    return step4;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            {this.Step1()}
            {this.Step2()}
            {this.Step3()}
            {this.Step4()}

            {this.state.currentStep !== 21 && (
              <div className='conten-buttons'>
                {this.previousButton()}
                {this.nextButton()}
              </div>
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
