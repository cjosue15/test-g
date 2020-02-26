import React from 'react';

function getImage(id, opcion) {
  return require(`../../assets/img/Test1/Pruebas/${id}/P${id}_${opcion}.svg`);
}

function TestRow(props) {
  return (
    <React.Fragment>
      {props.data.map(row => (
        <div className='Test__row' key={row.id}>
          <div className='Test_pregunta'>
            <span className='Test__row-counter'>{row.id}</span>
            <div className='Test__object'>
              <div className='object_container'>
                <img
                  src={getImage(row.id, row.ask1)}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='Test__object'>
              <div className='object_container'>
                <img
                  src={getImage(row.id, row.ask2)}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='Test__object'>
              <div className='object_container'>
                <img
                  src={getImage(row.id, row.ask3)}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='Test__object'>
              <div className='object_container dashed'>
                <img
                  src={getImage(row.id, row.ask4)}
                  alt={`Pregunta ${row.id}`}
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          <div className='Test_respuesta'>
            <label
              htmlFor={`ask${row.id}-a`}
              className='Test_respuesta__opcion'
            >
              <span className='opcion_name'>a</span>
              <input
                id={`ask${row.id}-a`}
                type='radio'
                name={`${row.id}`}
                value='a'
                checked={props.state.test1[`${row.id}`] === 'a'}
                onChange={props.handleChange}
              />
              <img src={getImage(row.id, row.option2)} alt='' />
            </label>
            <label
              htmlFor={`ask${row.id}-b`}
              className='Test_respuesta__opcion'
            >
              <span className='opcion_name'>b</span>
              <input
                id={`ask${row.id}-b`}
                type='radio'
                name={`${row.id}`}
                value='b'
                checked={props.state.test1[`${row.id}`] === 'b'}
                onChange={props.handleChange}
              />
              <img src={getImage(row.id, row.option2)} alt='' />
            </label>
            <label
              htmlFor={`ask${row.id}-c`}
              className='Test_respuesta__opcion'
            >
              <span className='opcion_name'>c</span>
              <input
                id={`ask${row.id}-c`}
                type='radio'
                name={`${row.id}`}
                value='c'
                checked={props.state.test1[`${row.id}`] === 'c'}
                onChange={props.handleChange}
              />
              <img src={getImage(row.id, row.option3)} alt='' />
            </label>
            <label
              htmlFor={`ask${row.id}-d`}
              className='Test_respuesta__opcion'
            >
              <span className='opcion_name'>d</span>
              <input
                id={`ask${row.id}-d`}
                type='radio'
                name={`${row.id}`}
                value='d'
                checked={props.state.test1[`${row.id}`] === 'd'}
                onChange={props.handleChange}
              />
              <img src={getImage(row.id, row.option4)} alt='' />
            </label>
            <label
              htmlFor={`ask${row.id}-e`}
              className='Test_respuesta__opcion'
            >
              <span className='opcion_name'>e</span>
              <input
                id={`ask${row.id}-e`}
                type='radio'
                name={`${row.id}`}
                value='e'
                checked={props.state.test1[`${row.id}`] === 'e'}
                onChange={props.handleChange}
              />
              <img src={getImage(row.id, row.option5)} alt='' />
            </label>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default TestRow;
