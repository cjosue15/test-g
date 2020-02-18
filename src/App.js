import React from 'react';
import x from './assets/img/x.png';
import employee from './assets/img/employee.svg';
import nada from './assets/img/nada.jpg';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
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
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button'
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <h1>React Wizard Form</h1>
          <p>Step {this.state.currentStep} </p>
          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              email={this.state.email}
              state={this.state}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              username={this.state.username}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              password={this.state.password}
            />
            {this.previousButton()}
            {this.nextButton()}
          </form>
          {JSON.stringify(this.state)}
        </div>
      </React.Fragment>
    );
  }
}

function Navbar(props) {
  return (
    <nav className='header'>
      <div className='container'>
        <h1>Bienvenido Usuario</h1>
      </div>
    </nav>
  );
}

function Step1(props) {
  console.log(props.state);
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      {/* <div className='form-group'>
        <label htmlFor='email'>Email address</label>
        <input
          className='form-control'
          id='email'
          name='email'
          type='text'
          placeholder='Enter email'
          value={props.email}
          onChange={props.handleChange}
        />
      </div> */}
      <div className='Test__row'>
        <div className='Test_pregunta'>
          <div className='Test__object'>
            <div className='object_container'>
              <img
                src={require('./assets/img/x.png')}
                alt='Imagen 1'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='Test__object'>
            <div className='object_container'>
              <img src={employee} alt='Imagen 1' className='img-fluid' />
            </div>
          </div>
          <div className='Test__object'>
            <div className='object_container'>
              <img src={employee} alt='Imagen 1' className='img-fluid' />
            </div>
          </div>
          <div className='Test__object'>
            <div className='object_container dashed'>
              <img src={nada} alt='Imagen 1' className='img-fluid' />
            </div>
          </div>
        </div>
        <div className='Test_respuesta'>
          <div className='Test_respuesta__opcion'>
            <span className='opcion_name'>a</span>

            <input
              id='ask1-a'
              type='radio'
              name='pregunta1'
              value='a'
              checked={props.state.pregunta1 === 'a'}
              onChange={props.handleChange}
            />
            <label
              style={{ backgroundImage: `url(${x})` }}
              className='label-opcion'
              htmlFor='ask1-a'
            ></label>
          </div>
          <div className='Test_respuesta__opcion'>
            <span className='opcion_name'>b</span>

            <input
              id='ask1-b'
              type='radio'
              name='pregunta1'
              value='b'
              checked={props.state.pregunta1 === 'b'}
              onChange={props.handleChange}
            />
            <label
              style={{ backgroundImage: `url(${x})` }}
              className='label-opcion'
              htmlFor='ask1-b'
            ></label>
          </div>
          <div className='Test_respuesta__opcion'>
            <span className='opcion_name'>c</span>

            <input
              id='ask1-c'
              type='radio'
              name='pregunta1'
              value='c'
              checked={props.state.pregunta1 === 'c'}
              onChange={props.handleChange}
            />
            <label
              style={{
                backgroundImage: `url(${require('./assets/img/x.png')})`
              }}
              className='label-opcion pregunta1'
              htmlFor='ask1-c'
            ></label>
          </div>
          <div className='Test_respuesta__opcion'>
            <span className='opcion_name'>d</span>

            <input
              id='ask1-d'
              type='radio'
              name='pregunta1'
              value='d'
              checked={props.state.pregunta1 === 'd'}
              onChange={props.handleChange}
            />
            <label
              style={{ backgroundImage: `url(${x})` }}
              className='label-opcion pregunta1'
              htmlFor='ask1-d'
            ></label>
          </div>
          <div className='Test_respuesta__opcion'>
            <span className='opcion_name'>e</span>
            <input
              id='ask1-e'
              type='radio'
              name='pregunta1'
              value='e'
              checked={props.state.pregunta1 === 'e'}
              onChange={props.handleChange}
            />
            <label
              style={{ backgroundImage: `url(${x})` }}
              className='label-opcion pregunta1'
              htmlFor='ask1-e'
            ></label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className='form-group'>
      <label htmlFor='username'>Username</label>
      <input
        className='form-control'
        id='username'
        name='username'
        type='text'
        placeholder='Enter username'
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          className='form-control'
          id='password'
          name='password'
          type='password'
          placeholder='Enter password'
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button className='btn btn-success btn-block'>Sign up</button>
    </React.Fragment>
  );
}

export default App;
