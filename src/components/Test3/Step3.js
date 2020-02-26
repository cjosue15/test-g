import React from 'react';
import TestRow3 from './TestRow3';
import TestRowPrueba3 from './TestRowPrueba3';

function Step3(props) {
  const prueba3 = [
    {
      id: 1,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6,
      checked: 'a'
    },
    {
      id: 2,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6,
      checked: 'd'
    },
    {
      id: 3,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6,
      checked: 'e'
    }
  ];

  const data1 = [
    {
      id: 1,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 2,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 3,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    }
  ];

  const data2 = [
    {
      id: 4,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 5,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 6,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    }
  ];

  const data3 = [
    {
      id: 7,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 8,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 9,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    }
  ];

  const data4 = [
    {
      id: 10,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 11,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    },
    {
      id: 12,
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
      option6: 6
    }
  ];

  if (
    props.currentStep !== 12 &&
    props.currentStep !== 13 &&
    props.currentStep !== 14 &&
    props.currentStep !== 15 &&
    props.currentStep !== 16
  ) {
    return null;
  }

  if (props.currentStep === 12) {
    // PRUEBA 3
    return <TestRowPrueba3 data={prueba3} />;
  }

  return (
    <div className='TestRow3'>
      <div className='TestRow3__container'>
        {props.children}
        {props.currentStep === 13 && (
          <TestRow3
            onChange={props.handleChange}
            data={data1}
            state={props.state}
          />
        )}
        {props.currentStep === 14 && (
          <TestRow3
            onChange={props.handleChange}
            data={data2}
            state={props.state}
          />
        )}
        {props.currentStep === 15 && (
          <TestRow3
            onChange={props.handleChange}
            data={data3}
            state={props.state}
          />
        )}
        {props.currentStep === 16 && (
          <TestRow3
            onChange={props.handleChange}
            data={data4}
            state={props.state}
          />
        )}
      </div>
    </div>
  );
}

export default Step3;
