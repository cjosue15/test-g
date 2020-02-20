import React from 'react';

function getImage(id, opcion) {
  return require(`../../assets/img/Test2/Pruebas/${id}/P${id}_${opcion}.svg`);
}

function TestRow2(props) {
  return (
    <div className='TestRow2'>
      <div className='TestRow2__container'>
        {props.data.map(row => (
          <div className='TestRow2__row' key={row.id}>
            <span className='TestRow2__counter'>{row.id}</span>
            <label htmlFor={`ask${row.id}-a`} className='TestRow2__object'>
              <input
                id={`ask${row.id}-a`}
                onChange={props.onChange}
                type='radio'
                name={`pregunta${row.id}`}
                checked={props.state.test2[`pregunta${row.id}`] === 'a'}
                value='a'
              />
              <img src={getImage(row.id, row.option1)} alt='' />
            </label>

            <label htmlFor={`ask${row.id}-b`} className='TestRow2__object'>
              <input
                id={`ask${row.id}-b`}
                onChange={props.onChange}
                type='radio'
                name={`pregunta${row.id}`}
                checked={props.state.test2[`pregunta${row.id}`] === 'b'}
                value='b'
              />
              <img src={getImage(row.id, row.option2)} alt='' />
            </label>
            <label htmlFor={`ask${row.id}-c`} className='TestRow2__object'>
              <input
                id={`ask${row.id}-c`}
                onChange={props.onChange}
                type='radio'
                name={`pregunta${row.id}`}
                checked={props.state.test2[`pregunta${row.id}`] === 'c'}
                value='c'
              />
              <img src={getImage(row.id, row.option3)} alt='' />
            </label>
            <label htmlFor={`ask${row.id}-d`} className='TestRow2__object'>
              <input
                id={`ask${row.id}-d`}
                onChange={props.onChange}
                type='radio'
                name={`pregunta${row.id}`}
                checked={props.state.test2[`pregunta${row.id}`] === 'd'}
                value='d'
              />
              <img src={getImage(row.id, row.option4)} alt='' />
            </label>
            <label htmlFor={`ask${row.id}-e`} className='TestRow2__object'>
              <input
                id={`ask${row.id}-e`}
                onChange={props.onChange}
                type='radio'
                name={`pregunta${row.id}`}
                checked={props.state.test2[`pregunta${row.id}`] === 'e'}
                value='e'
              />
              <img src={getImage(row.id, row.option5)} alt='' />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestRow2;
