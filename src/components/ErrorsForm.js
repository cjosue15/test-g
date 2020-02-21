import React from 'react';

function ErrorsForm(props) {
  const errors = props.errors;

  const checkedStatus = Object.keys(errors).map(key => {
    return errors[key];
  });

  const radios = checkedStatus.filter(v => v === false);

  if (radios.length > 0) {
    return (
      <p>
        No se han respondido del {props.test} las siguientes preguntas :
        {checkedStatus.map((x, i) => {
          if (!x) {
            return (
              <React.Fragment key={i}>
                <span className='counter__error'>{i + 1}</span>
                <span>,</span>
              </React.Fragment>
            );
          }
          return null;
        })}
      </p>
    );
  }

  return null;
}

export default ErrorsForm;
