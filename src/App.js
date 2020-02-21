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
import ErrorsForm from './components/ErrorsForm';

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
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false
      },
      errorTest2: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false
      },
      errorTest3: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false
      },
      errorTest4: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false
      },
      formValid: false,
      showErrors: false
    };
  }

  handleChange1 = event => {
    const { name, value, checked } = event.target;
    this.setState(
      {
        test1: {
          ...this.state.test1,
          [name]: value
        },
        errorTest1: {
          ...this.state.errorTest1,
          [name]: checked
        }
      },
      this.validateForm
    );
  };

  handleChange2 = event => {
    const { name, value, checked } = event.target;
    this.setState(
      {
        test2: {
          ...this.state.test2,
          [name]: value
        },
        errorTest2: {
          ...this.state.errorTest2,
          [name]: checked
        }
      },
      this.validateForm
    );
  };

  handleChange3 = event => {
    const { name, value, checked } = event.target;
    this.setState(
      {
        test3: {
          ...this.state.test3,
          [name]: value
        },
        errorTest3: {
          ...this.state.errorTest3,
          [name]: checked
        }
      },
      this.validateForm
    );
  };

  handleChange4 = event => {
    const { name, value, checked } = event.target;
    this.setState(
      {
        test4: {
          ...this.state.test4,
          [name]: value
        },
        errorTest4: {
          ...this.state.errorTest4,
          [name]: checked
        }
      },
      this.validateForm
    );
  };

  validateForm = () => {
    let isValid = false;
    const radioStates1 = this.state.errorTest1;
    const radioStates2 = this.state.errorTest2;
    const radioStates3 = this.state.errorTest3;
    const radioStates4 = this.state.errorTest4;

    const checkedStatus1 = Object.keys(radioStates1).map(key => {
      return radioStates1[key];
    });

    const checkedStatus2 = Object.keys(radioStates2).map(key => {
      return radioStates2[key];
    });

    const checkedStatus3 = Object.keys(radioStates3).map(key => {
      return radioStates3[key];
    });

    const checkedStatus4 = Object.keys(radioStates4).map(key => {
      return radioStates4[key];
    });

    const checkedStatus = [
      ...checkedStatus1,
      ...checkedStatus2,
      ...checkedStatus3,
      ...checkedStatus4
    ];

    const filteredArray = checkedStatus.filter(value => value === false);

    if (filteredArray.length === 0) {
      isValid = true;
      this.setState({ showErrors: false });
    } else {
      this.setState({ showErrors: true });
    }

    this.setState({ formValid: isValid });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.formValid) {
      return;
    }
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

  showDivError() {
    if (this.state.showErrors) {
      if (!this.state.formValid) {
        return (
          <div className='ErrorsForm'>
            <ErrorsForm test={'Test 1'} errors={this.state.errorTest1} />
            <ErrorsForm test={'Test 2'} errors={this.state.errorTest2} />
            <ErrorsForm test={'Test 3'} errors={this.state.errorTest3} />
            <ErrorsForm test={'Test 4'} errors={this.state.errorTest4} />
          </div>
        );
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <p>Step {this.state.currentStep} </p>
          {/* {this.state.showErrors && !this.state.formValid && (
            <div className='ErrorsForm'>
              <ErrorsForm test={'Test 1'} errors={this.state.errorTest1} />
              <ErrorsForm test={'Test 2'} errors={this.state.errorTest2} />
              <ErrorsForm test={'Test 3'} errors={this.state.errorTest3} />
              <ErrorsForm test={'Test 4'} errors={this.state.errorTest4} />
            </div>
          )} */}

          {this.showDivError()}

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
