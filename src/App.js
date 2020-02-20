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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      test1: {},
      test2: {},
      test3: {},
      test4: {},
      errorTest1: {
        pregunta1: false,
        pregunta2: false,
        pregunta3: false,
        pregunta4: false,
        pregunta5: false,
        pregunta6: false,
        pregunta7: false,
        pregunta8: false,
        pregunta9: false,
        pregunta10: false,
        pregunta11: false,
        pregunta12: false
      },
      errorTest2: {
        pregunta1: false,
        pregunta2: false,
        pregunta3: false,
        pregunta4: false,
        pregunta5: false,
        pregunta6: false,
        pregunta7: false,
        pregunta8: false,
        pregunta9: false,
        pregunta10: false,
        pregunta11: false,
        pregunta12: false,
        pregunta13: false,
        pregunta14: false
      },
      errorTest3: {
        pregunta1: false,
        pregunta2: false,
        pregunta3: false,
        pregunta4: false,
        pregunta5: false,
        pregunta6: false,
        pregunta7: false,
        pregunta8: false,
        pregunta9: false,
        pregunta10: false,
        pregunta11: false,
        pregunta12: false
      },
      errorTest4: {
        pregunta1: false,
        pregunta2: false,
        pregunta3: false,
        pregunta4: false,
        pregunta5: false,
        pregunta6: false,
        pregunta7: false,
        pregunta8: false
      }
    };
  }

  handleChange1 = event => {
    const { name, value, checked } = event.target;
    this.setState({
      test1: {
        ...this.state.test1,
        [name]: value
      },
      errorTest1: {
        ...this.state.errorTest1,
        [name]: checked
      }
    });
  };

  handleChange2 = event => {
    const { name, value, checked } = event.target;
    this.setState({
      test2: {
        ...this.state.test2,
        [name]: value
      },
      errorTest2: {
        ...this.state.errorTest2,
        [name]: checked
      }
    });
  };

  handleChange3 = event => {
    const { name, value, checked } = event.target;
    this.setState({
      test3: {
        ...this.state.test3,
        [name]: value
      },
      errorTest3: {
        ...this.state.errorTest3,
        [name]: checked
      }
    });
  };

  handleChange4 = event => {
    const { name, value, checked } = event.target;
    this.setState({
      test4: {
        ...this.state.test4,
        [name]: value
      },
      errorTest4: {
        ...this.state.errorTest4,
        [name]: checked
      }
    });
  };

  validateForm = () => {
    let isValid = false;
    const radioStates1 = this.state.errorTest1;
    const radioStates2 = this.state.errorTest2;
    const radioStates3 = this.state.errorTest3;
    const radioStates4 = this.state.errorTest4;

    const radios = {
      ...radioStates1,
      ...radioStates2,
      ...radioStates3,
      ...radioStates4
    };

    const checkedStatus = Object.keys(radios).map(key => {
      return radios[key];
    });

    const filteredArray = checkedStatus.filter(value => value === false);

    // console.log(filteredArray);

    if (filteredArray.length === 0) {
      isValid = true;
    }

    return isValid;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { test1 } = this.state;
    const { test2 } = this.state;
    const { test3 } = this.state;
    const { test4 } = this.state;

    if (this.validateForm()) {
      console.log({ test1, test2, test3, test4 });
    }
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
    if (currentStep < 20) {
      return (
        <button className='btn btn-primary' type='button' onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  sendButton() {
    const currentStep = this.state.currentStep;
    if (currentStep === 20)
      return (
        <button className='btn btn-primary' onClick={this.validateForm}>
          Send
        </button>
      );
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
            <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange4}
              state={this.state}
            />
            <div className='conten-buttons'>
              {this.previousButton()}
              {this.nextButton()}
              {this.sendButton()}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
