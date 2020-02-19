import React from 'react';
import TestRow from './components/TestRow';
import TestRow2 from './components/TestRow2';
import TestRowPrueba from './components/TestRowPrueba';
import Navbar from './components/Navbar';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      test1: {},
      test2: {}
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

  handleSubmit = event => {
    event.preventDefault();
    const { test1 } = this.state;
    const { test2 } = this.state;
    console.log({ test1, test2 });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 6 ? 7 : currentStep + 1;
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
    if (currentStep < 7) {
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
            {/*
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange2}
              state={this.state}
            /> */}
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

function Step1(props) {
  const data = [
    {
      id: 1,
      ask1: 'images/test-1/Pruebas/1/P1_1.svg',
      ask2: 'images/test-1/Pruebas/1/P1_2.svg',
      ask3: 'images/test-1/Pruebas/1/P1_3.svg',
      ask4: 'images/test-1/Pruebas/1/P1_4.svg',
      option1: 'images/test-1/Pruebas/1/P1_5.svg',
      option2: 'images/test-1/Pruebas/1/P1_6.svg',
      option3: 'images/test-1/Pruebas/1/P1_7.svg',
      option4: 'images/test-1/Pruebas/1/P1_8.svg',
      option5: 'images/test-1/Pruebas/1/P1_9.svg'
    },
    {
      id: 2,
      ask1: 'images/test-1/Pruebas/2/P2_1.svg',
      ask2: 'images/test-1/Pruebas/2/P2_2.svg',
      ask3: 'images/test-1/Pruebas/2/P2_3.svg',
      ask4: 'images/test-1/Pruebas/2/P2_4.svg',
      option1: 'images/test-1/Pruebas/2/P2_5.svg',
      option2: 'images/test-1/Pruebas/2/P2_6.svg',
      option3: 'images/test-1/Pruebas/2/P2_7.svg',
      option4: 'images/test-1/Pruebas/2/P2_8.svg',
      option5: 'images/test-1/Pruebas/2/P2_9.svg'
    },
    {
      id: 3,
      ask1: 'images/test-1/Pruebas/3/P3_1.svg',
      ask2: 'images/test-1/Pruebas/3/P3_2.svg',
      ask3: 'images/test-1/Pruebas/3/P3_3.svg',
      ask4: 'images/test-1/Pruebas/3/P3_4.svg',
      option1: 'images/test-1/Pruebas/3/P3_5.svg',
      option2: 'images/test-1/Pruebas/3/P3_6.svg',
      option3: 'images/test-1/Pruebas/3/P3_7.svg',
      option4: 'images/test-1/Pruebas/3/P3_8.svg',
      option5: 'images/test-1/Pruebas/3/P3_9.svg'
    },
    {
      id: 4,
      ask1: 'images/test-1/Pruebas/4/P4_1.svg',
      ask2: 'images/test-1/Pruebas/4/P4_2.svg',
      ask3: 'images/test-1/Pruebas/4/P4_3.svg',
      ask4: 'images/test-1/Pruebas/4/P4_4.svg',
      option1: 'images/test-1/Pruebas/4/P4_5.svg',
      option2: 'images/test-1/Pruebas/4/P4_6.svg',
      option3: 'images/test-1/Pruebas/4/P4_7.svg',
      option4: 'images/test-1/Pruebas/4/P4_8.svg',
      option5: 'images/test-1/Pruebas/4/P4_9.svg'
    },
    {
      id: 5,
      ask1: 'images/test-1/Pruebas/5/P5_1.svg',
      ask2: 'images/test-1/Pruebas/5/P5_2.svg',
      ask3: 'images/test-1/Pruebas/5/P5_3.svg',
      ask4: 'images/test-1/Pruebas/5/P5_4.svg',
      option1: 'images/test-1/Pruebas/5/P5_5.svg',
      option2: 'images/test-1/Pruebas/5/P5_6.svg',
      option3: 'images/test-1/Pruebas/5/P5_7.svg',
      option4: 'images/test-1/Pruebas/5/P5_8.svg',
      option5: 'images/test-1/Pruebas/5/P5_9.svg'
    },
    {
      id: 6,
      ask1: 'images/test-1/Pruebas/6/P6_1.svg',
      ask2: 'images/test-1/Pruebas/6/P6_2.svg',
      ask3: 'images/test-1/Pruebas/6/P6_3.svg',
      ask4: 'images/test-1/Pruebas/6/P6_4.svg',
      option1: 'images/test-1/Pruebas/6/P6_5.svg',
      option2: 'images/test-1/Pruebas/6/P6_6.svg',
      option3: 'images/test-1/Pruebas/6/P6_7.svg',
      option4: 'images/test-1/Pruebas/6/P6_8.svg',
      option5: 'images/test-1/Pruebas/6/P6_9.svg'
    },
    {
      id: 7,
      ask1: 'images/test-1/Pruebas/7/P7_1.svg',
      ask2: 'images/test-1/Pruebas/7/P7_2.svg',
      ask3: 'images/test-1/Pruebas/7/P7_3.svg',
      ask4: 'images/test-1/Pruebas/7/P7_4.svg',
      option1: 'images/test-1/Pruebas/7/P7_5.svg',
      option2: 'images/test-1/Pruebas/7/P7_6.svg',
      option3: 'images/test-1/Pruebas/7/P7_7.svg',
      option4: 'images/test-1/Pruebas/7/P7_8.svg',
      option5: 'images/test-1/Pruebas/7/P7_9.svg'
    },
    {
      id: 8,
      ask1: 'images/test-1/Pruebas/8/P8_1.svg',
      ask2: 'images/test-1/Pruebas/8/P8_2.svg',
      ask3: 'images/test-1/Pruebas/8/P8_3.svg',
      ask4: 'images/test-1/Pruebas/8/P8_4.svg',
      option1: 'images/test-1/Pruebas/8/P8_5.svg',
      option2: 'images/test-1/Pruebas/8/P8_6.svg',
      option3: 'images/test-1/Pruebas/8/P8_7.svg',
      option4: 'images/test-1/Pruebas/8/P8_8.svg',
      option5: 'images/test-1/Pruebas/8/P8_9.svg'
    },
    {
      id: 9,
      ask1: 'images/test-1/Pruebas/9/P9_1.svg',
      ask2: 'images/test-1/Pruebas/9/P9_2.svg',
      ask3: 'images/test-1/Pruebas/9/P9_3.svg',
      ask4: 'images/test-1/Pruebas/9/P9_4.svg',
      option1: 'images/test-1/Pruebas/9/P9_5.svg',
      option2: 'images/test-1/Pruebas/9/P9_6.svg',
      option3: 'images/test-1/Pruebas/9/P9_7.svg',
      option4: 'images/test-1/Pruebas/9/P9_8.svg',
      option5: 'images/test-1/Pruebas/9/P9_9.svg'
    },
    {
      id: 10,
      ask1: 'images/test-1/Pruebas/10/P10_1.svg',
      ask2: 'images/test-1/Pruebas/10/P10_2.svg',
      ask3: 'images/test-1/Pruebas/10/P10_3.svg',
      ask4: 'images/test-1/Pruebas/10/P10_4.svg',
      option1: 'images/test-1/Pruebas/10/P10_5.svg',
      option2: 'images/test-1/Pruebas/10/P10_6.svg',
      option3: 'images/test-1/Pruebas/10/P10_7.svg',
      option4: 'images/test-1/Pruebas/10/P10_8.svg',
      option5: 'images/test-1/Pruebas/10/P10_9.svg'
    },
    {
      id: 11,
      ask1: 'images/test-1/Pruebas/11/P11_1.svg',
      ask2: 'images/test-1/Pruebas/11/P11_2.svg',
      ask3: 'images/test-1/Pruebas/11/P11_3.svg',
      ask4: 'images/test-1/Pruebas/11/P11_4.svg',
      option1: 'images/test-1/Pruebas/11/P11_5.svg',
      option2: 'images/test-1/Pruebas/11/P11_6.svg',
      option3: 'images/test-1/Pruebas/11/P11_7.svg',
      option4: 'images/test-1/Pruebas/11/P11_8.svg',
      option5: 'images/test-1/Pruebas/11/P11_9.svg'
    },
    {
      id: 12,
      ask1: 'images/test-1/Pruebas/12/P12_1.svg',
      ask2: 'images/test-1/Pruebas/12/P12_2.svg',
      ask3: 'images/test-1/Pruebas/12/P12_3.svg',
      ask4: 'images/test-1/Pruebas/12/P12_4.svg',
      option1: 'images/test-1/Pruebas/12/P12_5.svg',
      option2: 'images/test-1/Pruebas/12/P12_6.svg',
      option3: 'images/test-1/Pruebas/12/P12_7.svg',
      option4: 'images/test-1/Pruebas/12/P12_8.svg',
      option5: 'images/test-1/Pruebas/12/P12_9.svg'
    }
  ];

  const prueba = [
    {
      id: 1,
      ask1: 'images/test-1/Ejemplo/1/1_1.svg',
      ask2: 'images/test-1/Ejemplo/1/1_2.svg',
      ask3: 'images/test-1/Ejemplo/1/1_3.svg',
      ask4: 'images/test-1/Ejemplo/1/1_4.svg',
      option1: 'images/test-1/Ejemplo/1/1_5.svg',
      option2: 'images/test-1/Ejemplo/1/1_6.svg',
      option3: 'images/test-1/Ejemplo/1/1_7.svg',
      option4: 'images/test-1/Ejemplo/1/1_8.svg',
      option5: 'images/test-1/Ejemplo/1/1_9.svg',
      checked: 'a'
    },
    {
      id: 2,
      ask1: 'images/test-1/Ejemplo/2/2_1.svg',
      ask2: 'images/test-1/Ejemplo/2/2_2.svg',
      ask3: 'images/test-1/Ejemplo/2/2_3.svg',
      ask4: 'images/test-1/Ejemplo/2/2_4.svg',
      option1: 'images/test-1/Ejemplo/2/2_5.svg',
      option2: 'images/test-1/Ejemplo/2/2_6.svg',
      option3: 'images/test-1/Ejemplo/2/2_7.svg',
      option4: 'images/test-1/Ejemplo/2/2_8.svg',
      option5: 'images/test-1/Ejemplo/2/2_9.svg',
      checked: 'e'
    },
    {
      id: 3,
      ask1: 'images/test-1/Ejemplo/3/3_1.svg',
      ask2: 'images/test-1/Ejemplo/3/3_2.svg',
      ask3: 'images/test-1/Ejemplo/3/3_3.svg',
      ask4: 'images/test-1/Ejemplo/3/3_4.svg',
      option1: 'images/test-1/Ejemplo/3/3_5.svg',
      option2: 'images/test-1/Ejemplo/3/3_6.svg',
      option3: 'images/test-1/Ejemplo/3/3_7.svg',
      option4: 'images/test-1/Ejemplo/3/3_8.svg',
      option5: 'images/test-1/Ejemplo/3/3_9.svg',
      checked: 'c'
    }
  ];

  const data1 = data.slice(0, 3);
  const data2 = data.slice(3, 6);
  const data3 = data.slice(6, 9);
  const data4 = data.slice(9, 12);

  if (
    props.currentStep !== 1 &&
    props.currentStep !== 2 &&
    props.currentStep !== 3 &&
    props.currentStep !== 4 &&
    props.currentStep !== 5
  ) {
    return null;
  }

  if (props.currentStep === 1) {
    return (
      <React.Fragment>
        <TestRowPrueba data={prueba} handleChange={props.handleChange} />
      </React.Fragment>
    );
  }

  if (props.currentStep === 2) {
    return (
      <React.Fragment>
        <TestRow
          state={props.state}
          handleChange={props.handleChange}
          data={data1}
        />
      </React.Fragment>
    );
  }

  if (props.currentStep === 3) {
    return (
      <React.Fragment>
        <TestRow
          state={props.state}
          handleChange={props.handleChange}
          data={data2}
        />
      </React.Fragment>
    );
  }

  if (props.currentStep === 4) {
    return (
      <React.Fragment>
        <TestRow
          state={props.state}
          handleChange={props.handleChange}
          data={data3}
        />
      </React.Fragment>
    );
  }

  if (props.currentStep === 5) {
    return (
      <React.Fragment>
        <TestRow
          state={props.state}
          handleChange={props.handleChange}
          data={data4}
        />
      </React.Fragment>
    );
  }
}

function Step2(props) {
  // const data = [
  //   {
  //     id: 4,
  //     ask1: 'images/x.png',
  //     ask2: 'images/x.png',
  //     ask3: 'images/x.png',
  //     ask4: 'images/nada.jpg',
  //     option1: 'images/x.png',
  //     option2: 'images/x.png',
  //     option3: 'images/x.png',
  //     option4: 'images/x.png',
  //     option5: 'images/x.png'
  //   },
  //   {
  //     id: 5,
  //     ask1: 'images/x.png',
  //     ask2: 'images/x.png',
  //     ask3: 'images/x.png',
  //     ask4: 'images/nada.jpg',
  //     option1: 'images/x.png',
  //     option2: 'images/x.png',
  //     option3: 'images/x.png',
  //     option4: 'images/x.png',
  //     option5: 'images/x.png'
  //   },
  //   {
  //     id: 6,
  //     ask1: 'images/x.png',
  //     ask2: 'images/x.png',
  //     ask3: 'images/x.png',
  //     ask4: 'images/nada.jpg',
  //     option1: 'images/x.png',
  //     option2: 'images/x.png',
  //     option3: 'images/x.png',
  //     option4: 'images/x.png',
  //     option5: 'images/x.png'
  //   }
  // ];

  if (props.currentStep !== 6 && props.currentStep !== 7) {
    return null;
  }

  if (props.currentStep === 6) {
    return <TestRow2 onChange={props.handleChange} />;
  }

  if (props.currentStep === 7) {
    return <h1>Soy el 6</h1>;
  }
  // return (
  //   <React.Fragment>
  //     <TestRow
  //       state={props.state}
  //       handleChange={props.handleChange}
  //       // data={data}
  //     />
  //   </React.Fragment>
  // );
}

// function Step3(props) {
//   if (props.currentStep !== 3) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <div className='Test__row'>
//         <div className='Test_pregunta'>
//           <div className='Test__object'>
//             <div className='object_container'>
//               <img
//                 src={require('./assets/img/x.png')}
//                 alt='Imagen 1'
//                 className='img-fluid'
//               />
//             </div>
//           </div>
//           <div className='Test__object'>
//             <div className='object_container'>
//               <img src={employee} alt='Imagen 1' className='img-fluid' />
//             </div>
//           </div>
//           <div className='Test__object'>
//             <div className='object_container'>
//               <img src={employee} alt='Imagen 1' className='img-fluid' />
//             </div>
//           </div>
//           <div className='Test__object'>
//             <div className='object_container dashed'>
//               <img src={nada} alt='Imagen 1' className='img-fluid' />
//             </div>
//           </div>
//         </div>
//         <div className='Test_respuesta'>
//           <div className='Test_respuesta__opcion'>
//             <span className='opcion_name'>a</span>

//             <input
//               id='ask2-a'
//               type='radio'
//               name='pregunta2'
//               value='a'
//               checked={props.state.test2.pregunta2 === 'a'}
//               onChange={props.handleChange}
//             />
//             <label
//               style={{ backgroundImage: `url(${x})` }}
//               className='label-opcion'
//               htmlFor='ask2-a'
//             ></label>
//           </div>
//           <div className='Test_respuesta__opcion'>
//             <span className='opcion_name'>b</span>

//             <input
//               id='ask2-b'
//               type='radio'
//               name='pregunta2'
//               value='b'
//               checked={props.state.test2.pregunta2 === 'b'}
//               onChange={props.handleChange}
//             />
//             <label
//               style={{ backgroundImage: `url(${x})` }}
//               className='label-opcion'
//               htmlFor='ask2-b'
//             ></label>
//           </div>
//           <div className='Test_respuesta__opcion'>
//             <span className='opcion_name'>c</span>

//             <input
//               id='ask2-c'
//               type='radio'
//               name='pregunta2'
//               value='c'
//               checked={props.state.test2.pregunta2 === 'c'}
//               onChange={props.handleChange}
//             />
//             <label
//               style={{
//                 backgroundImage: `url(${require('./assets/img/x.png')})`
//               }}
//               className='label-opcion pregunta2'
//               htmlFor='ask2-c'
//             ></label>
//           </div>
//           <div className='Test_respuesta__opcion'>
//             <span className='opcion_name'>d</span>

//             <input
//               id='ask2-d'
//               type='radio'
//               name='pregunta2'
//               value='d'
//               checked={props.state.test2.pregunta2 === 'd'}
//               onChange={props.handleChange}
//             />
//             <label
//               style={{ backgroundImage: `url(${x})` }}
//               className='label-opcion pregunta2'
//               htmlFor='ask2-d'
//             ></label>
//           </div>
//           <div className='Test_respuesta__opcion'>
//             <span className='opcion_name'>e</span>
//             <input
//               id='ask2-e'
//               type='radio'
//               name='pregunta2'
//               value='e'
//               checked={props.state.test2.pregunta2 === 'e'}
//               onChange={props.handleChange}
//             />
//             <label
//               style={{ backgroundImage: `url(${x})` }}
//               className='label-opcion pregunta2'
//               htmlFor='ask2-e'
//             ></label>
//           </div>
//         </div>
//       </div>
//       <button className='btn btn-success btn-block'>Sign up</button>
//     </React.Fragment>
//   );
// }

export default App;
