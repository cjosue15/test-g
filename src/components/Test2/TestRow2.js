import React from 'react';

function getImage(id, opcion) {
  return require(`../../assets/img/Test2/Pruebas/${id}/P${id}_${opcion}.svg`);
}

function TestRow2(props) {
  return (
    <React.Fragment>
      {props.data.map(row => (
        <div className='TestRow2__row' key={row.id}>
          <span className='TestRow2__counter'>{row.id}</span>
          <label htmlFor={`ask${row.id}-a`} className='TestRow2__object'>
            <span className='TestRow2__letter'>a</span>
            <input
              id={`ask${row.id}-a`}
              onChange={props.onChange}
              type='radio'
              name={`${row.id}`}
              checked={props.state.test2[`${row.id}`] === 'a'}
              value='a'
            />
            <img src={getImage(row.id, row.option1)} alt='' />
          </label>

          <label htmlFor={`ask${row.id}-b`} className='TestRow2__object'>
            <span className='TestRow2__letter'>b</span>
            <input
              id={`ask${row.id}-b`}
              onChange={props.onChange}
              type='radio'
              name={`${row.id}`}
              checked={props.state.test2[`${row.id}`] === 'b'}
              value='b'
            />
            <img src={getImage(row.id, row.option2)} alt='' />
          </label>
          <label htmlFor={`ask${row.id}-c`} className='TestRow2__object'>
            <span className='TestRow2__letter'>c</span>
            <input
              id={`ask${row.id}-c`}
              onChange={props.onChange}
              type='radio'
              name={`${row.id}`}
              checked={props.state.test2[`${row.id}`] === 'c'}
              value='c'
            />
            <img src={getImage(row.id, row.option3)} alt='' />
          </label>
          <label htmlFor={`ask${row.id}-d`} className='TestRow2__object'>
            <span className='TestRow2__letter'>d</span>
            <input
              id={`ask${row.id}-d`}
              onChange={props.onChange}
              type='radio'
              name={`${row.id}`}
              checked={props.state.test2[`${row.id}`] === 'd'}
              value='d'
            />
            <img src={getImage(row.id, row.option4)} alt='' />
          </label>
          <label htmlFor={`ask${row.id}-e`} className='TestRow2__object'>
            <span className='TestRow2__letter'>e</span>
            <input
              id={`ask${row.id}-e`}
              onChange={props.onChange}
              type='radio'
              name={`${row.id}`}
              checked={props.state.test2[`${row.id}`] === 'e'}
              value='e'
            />
            <img src={getImage(row.id, row.option5)} alt='' />
          </label>
        </div>
      ))}
    </React.Fragment>
  );
}

export default TestRow2;
