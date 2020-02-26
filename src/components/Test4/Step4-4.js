import React from 'react';
import TestRow4 from './TestRow4';
import TestRowPrueba4 from './TestRowPrueba4';
import './styles/TestRow4.css';

function Step4(props) {
  const prueba4 = [
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
    }
  ];

  if (
    props.currentStep !== 17 &&
    props.currentStep !== 18 &&
    props.currentStep !== 19 &&
    props.currentStep !== 20
  ) {
    return null;
  }

  if (props.currentStep === 17) {
    // PRUEBA 3
    return <TestRowPrueba4 data={prueba4} />;
  }

  if (props.currentStep === 18) {
    return (
      <TestRow4
        data={data1}
        onChange={props.handleChange}
        state={props.state}
      />
    );
  }

  if (props.currentStep === 19) {
    return (
      <TestRow4
        data={data2}
        onChange={props.handleChange}
        state={props.state}
      />
    );
  }

  if (props.currentStep === 20) {
    return (
      <React.Fragment>
        <TestRow4
          data={data3}
          onChange={props.handleChange}
          state={props.state}
        />
        {/* <button>send</button> */}
      </React.Fragment>
    );
  }
}

export default Step4;
