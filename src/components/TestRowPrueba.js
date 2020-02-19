import React from 'react';

function TestRowPrueba(props) {
  console.log(props);
  return (
    <React.Fragment>
      {props.data.map(row => (
        <div className='Test__row' key={row.id}>
          <div className='Test_pregunta'>
            <div className='Test__object'>
              <div className='object_container'>
                <img
                  src={row.ask1}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='Test__object'>
              <div className='object_container'>
                <img
                  src={`${row.ask2}`}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='Test__object'>
              <div className='object_container'>
                <img
                  src={`${row.ask3}`}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='Test__object'>
              <div className='object_container dashed'>
                <img
                  src={`${row.ask4}`}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          <div className='Test_respuesta'>
            <div className='Test_respuesta__opcion'>
              <span className='opcion_name'>a</span>
              <input
                id={`ask${row.id}-a`}
                type='radio'
                name={`pregunta${row.id}`}
                value='a'
                defaultChecked={row.checked === 'a'}
              />
              <label
                style={{ backgroundImage: `url(${`${row.option1}`})` }}
                className='label-opcion'
                htmlFor={`ask${row.id}-a`}
              ></label>
            </div>
            <div className='Test_respuesta__opcion'>
              <span className='opcion_name'>b</span>
              <input
                id={`ask${row.id}-b`}
                type='radio'
                name={`pregunta${row.id}`}
                value='b'
                defaultChecked={row.checked === 'b'}
              />
              <label
                style={{ backgroundImage: `url(${`${row.option2}`})` }}
                className='label-opcion'
                htmlFor={`ask${row.id}-b`}
              ></label>
            </div>
            <div className='Test_respuesta__opcion'>
              <span className='opcion_name'>c</span>
              <input
                id={`ask${row.id}-c`}
                type='radio'
                name={`pregunta${row.id}`}
                value='c'
                defaultChecked={row.checked === 'c'}
              />
              <label
                style={{ backgroundImage: `url(${`${row.option3}`})` }}
                className='label-opcion'
                htmlFor={`ask${row.id}-c`}
              ></label>
            </div>
            <div className='Test_respuesta__opcion'>
              <span className='opcion_name'>d</span>
              <input
                id={`ask${row.id}-d`}
                type='radio'
                name={`pregunta${row.id}`}
                value='d'
                defaultChecked={row.checked === 'd'}
              />
              <label
                style={{ backgroundImage: `url(${`${row.option4}`})` }}
                className='label-opcion'
                htmlFor={`ask${row.id}-d`}
              ></label>
            </div>
            <div className='Test_respuesta__opcion'>
              <span className='opcion_name'>e</span>
              <input
                id={`ask${row.id}-e`}
                type='radio'
                name={`pregunta${row.id}`}
                value='e'
                defaultChecked={row.checked === 'e'}
              />
              <label
                style={{ backgroundImage: `url(${`${row.option5}`})` }}
                className='label-opcion'
                htmlFor={`ask${row.id}-e`}
              ></label>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default TestRowPrueba;
