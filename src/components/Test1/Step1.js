import React from 'react';
import TestRow from './TestRow';
import TestRowPrueba from './TestRowPrueba';
import './styles/TestRow.css';

function Step1(props) {
  const data = [
    {
      id: 1,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 2,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 3,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 4,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 5,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 6,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 7,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 8,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 9,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 10,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 11,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    },
    {
      id: 12,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9'
    }
  ];

  const prueba = [
    {
      id: 1,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9',
      checked: 'a'
    },
    {
      id: 2,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9',
      checked: 'e'
    },
    {
      id: 3,
      ask1: '1',
      ask2: '2',
      ask3: '3',
      ask4: '4',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9',
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

export default Step1;
