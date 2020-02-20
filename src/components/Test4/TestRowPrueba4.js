import React from 'react';

function getImage(id, opcion) {
  return require(`../../assets/img/Test4/Ejemplos/E${id}/E${id}_${opcion}.svg`);
}

function TestRowPrueba4(props) {
  return (
    <div className='TestRow4'>
      <div className='TestRow4__container'>
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
                defaultChecked={row.checked === 'a'}
                type='radio'
                name={`test${row.id}`}
                value='a'
              />
              <img src={getImage(row.id, row.option2)} alt='' />
            </label>
            <label className='TestRow4__object'>
              <span className='letter'>b</span>
              <input
                defaultChecked={row.checked === 'b'}
                type='radio'
                name={`test${row.id}`}
                value='b'
              />
              <img src={getImage(row.id, row.option3)} alt='' />
            </label>
            <label className='TestRow4__object'>
              <span className='letter'>c</span>
              <input
                defaultChecked={row.checked === 'c'}
                type='radio'
                name={`test${row.id}`}
                value='c'
              />
              <img src={getImage(row.id, row.option4)} alt='' />
            </label>
            <label className='TestRow4__object'>
              <span className='letter'>d</span>
              <input
                defaultChecked={row.checked === 'd'}
                type='radio'
                name={`test${row.id}`}
                value='d'
              />
              <img src={getImage(row.id, row.option5)} alt='' />
            </label>
            <label className='TestRow4__object'>
              <span className='letter'>e</span>
              <input
                defaultChecked={row.checked === 'e'}
                type='radio'
                name={`test${row.id}`}
                value='e'
              />
              <img src={getImage(row.id, row.option6)} alt='' />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestRowPrueba4;
