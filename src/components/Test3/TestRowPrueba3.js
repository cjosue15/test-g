import React from 'react';
import './styles/TestRow3.css';

function getImage(id, opcion) {
  return require(`../../assets/img/Test3/Ejemplos/${id}/${id}_${opcion}.svg`);
}

function TestRowPrueba3(props) {
  return (
    <div className='TestRow3'>
      <div className='TestRow3__container'>
        {props.data.map(row => (
          <div className='TestRow3__row' key={row.id}>
            <span className='TestRow3__counter'>{row.id}</span>
            <label className='TestRow3__object option'>
              <img src={getImage(row.id, row.option1)} alt='' />
            </label>
            <label className='TestRow3__object test3'>
              <span className='letter'>a</span>
              <input
                defaultChecked={row.checked === 'a'}
                type='radio'
                name={`test${row.id}`}
                value='a'
              />
              <img src={getImage(row.id, row.option2)} alt='' />
            </label>

            <label className='TestRow3__object test3'>
              <span className='letter'>b</span>
              <input
                defaultChecked={row.checked === 'b'}
                type='radio'
                name={`test${row.id}`}
                value='b'
              />
              <img src={getImage(row.id, row.option3)} alt='' />
            </label>
            <label className='TestRow3__object test3'>
              <span className='letter'>c</span>
              <input
                defaultChecked={row.checked === 'c'}
                type='radio'
                name={`test${row.id}`}
                value='c'
              />
              <img src={getImage(row.id, row.option4)} alt='' />
            </label>
            <label className='TestRow3__object test3'>
              <span className='letter'>d</span>
              <input
                defaultChecked={row.checked === 'd'}
                type='radio'
                name={`test${row.id}`}
                value='d'
              />
              <img src={getImage(row.id, row.option5)} alt='' />
            </label>
            <label className='TestRow3__object test3'>
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

export default TestRowPrueba3;
