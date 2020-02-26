import React from 'react';

function getImage(id, opcion) {
  return require(`../../assets/img/Test4/Pruebas/${id}/${id}_${opcion}.svg`);
}

function TestRow4(props) {
  return (
    <React.Fragment>
      {props.data.map(row => (
        <div className='TestRow4__row' key={row.id}>
          <span className='TestRow4__counter'>{row.id}</span>
          <label className='TestRow4__object option'>
            <img src={getImage(row.id, row.option1)} alt='' />
          </label>
          <span></span>

          <label className='TestRow4__object'>
            <span className='letter'>a</span>
            <input
              onChange={props.onChange}
              checked={props.state.test4[`${row.id}`] === 'a'}
              type='radio'
              name={`${row.id}`}
              value='a'
            />
            <img src={getImage(row.id, row.option2)} alt='' />
          </label>
          <label className='TestRow4__object'>
            <span className='letter'>b</span>
            <input
              onChange={props.onChange}
              checked={props.state.test4[`${row.id}`] === 'b'}
              type='radio'
              name={`${row.id}`}
              value='b'
            />
            <img src={getImage(row.id, row.option3)} alt='' />
          </label>
          <label className='TestRow4__object'>
            <span className='letter'>c</span>
            <input
              onChange={props.onChange}
              checked={props.state.test4[`${row.id}`] === 'c'}
              type='radio'
              name={`${row.id}`}
              value='c'
            />
            <img src={getImage(row.id, row.option4)} alt='' />
          </label>
          <label className='TestRow4__object'>
            <span className='letter'>d</span>
            <input
              onChange={props.onChange}
              checked={props.state.test4[`${row.id}`] === 'd'}
              type='radio'
              name={`${row.id}`}
              value='d'
            />
            <img src={getImage(row.id, row.option5)} alt='' />
          </label>
          <label className='TestRow4__object'>
            <span className='letter'>e</span>
            <input
              onChange={props.onChange}
              checked={props.state.test4[`${row.id}`] === 'e'}
              type='radio'
              name={`${row.id}`}
              value='e'
            />
            <img src={getImage(row.id, row.option6)} alt='' />
          </label>
        </div>
      ))}
    </React.Fragment>
  );
}

export default TestRow4;
