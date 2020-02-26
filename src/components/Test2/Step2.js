import React from 'react';
import TestRow2 from './TestRow2';
import TestRowPrueba2 from './TestRowPrueba2';
import './styles/TestRow2.css';

function Step2(props) {
  const prueba2 = [
    {
      id: 1,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      checked: 'a'
    },
    {
      id: 2,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      checked: 'c'
    }
  ];

  const data1 = [
    {
      id: 1,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 2,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 3,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    }
  ];

  const data2 = [
    {
      id: 4,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 5,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 6,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    }
  ];

  const data3 = [
    {
      id: 7,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 8,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 9,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    }
  ];

  const data4 = [
    {
      id: 10,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 11,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 12,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    }
  ];

  const data5 = [
    {
      id: 13,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    },
    {
      id: 14,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5
    }
  ];

  if (
    props.currentStep !== 6 &&
    props.currentStep !== 7 &&
    props.currentStep !== 8 &&
    props.currentStep !== 9 &&
    props.currentStep !== 10 &&
    props.currentStep !== 11
  ) {
    return null;
  }

  if (props.currentStep === 6) {
    // PRUEBA 2
    return <TestRowPrueba2 data={prueba2} />;
  }

  return (
    <div className='TestRow2'>
      <div className='TestRow2__container'>
        {props.children}

        {props.currentStep === 7 && (
          <TestRow2
            onChange={props.handleChange}
            state={props.state}
            data={data1}
          />
        )}
        {props.currentStep === 8 && (
          <TestRow2
            onChange={props.handleChange}
            state={props.state}
            data={data2}
          />
        )}
        {props.currentStep === 9 && (
          <TestRow2
            onChange={props.handleChange}
            state={props.state}
            data={data3}
          />
        )}
        {props.currentStep === 10 && (
          <TestRow2
            onChange={props.handleChange}
            state={props.state}
            data={data4}
          />
        )}
        {props.currentStep === 11 && (
          <TestRow2
            onChange={props.handleChange}
            state={props.state}
            data={data5}
          />
        )}
      </div>
    </div>
  );
}

export default Step2;
