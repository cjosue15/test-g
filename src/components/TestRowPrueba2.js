import React from 'react';
import './styles/TestRow2.css';

function getImage(id, opcion) {
  return require(`../assets/img/Test2/Ejemplos/E${id}/E${id}_${opcion}.svg`);
}

function TestRowPrueba2(props) {
  return (
    <div className='TestRow2'>
      <div className='TestRow2__container'>
        {props.data.map(row => (
          <div className='TestRow2__row' key={row.id}>
            <span className='TestRow2__counter'>{row.id}</span>
            <label className='TestRow2__object'>
              <input
                onChange={props.onChange}
                type='radio'
                name='test'
                value='a'
              />
              <img src={getImage(row.id, row.option1)} alt='' />
            </label>

            <label className='TestRow2__object'>
              <input
                onChange={props.onChange}
                type='radio'
                name='test'
                value='b'
              />
              <img src={getImage(row.id, row.option2)} alt='' />
            </label>
            <label className='TestRow2__object'>
              <input
                onChange={props.onChange}
                type='radio'
                name='test'
                value='c'
              />
              <img src={getImage(row.id, row.option3)} alt='' />
            </label>
            <label className='TestRow2__object'>
              <input
                onChange={props.onChange}
                type='radio'
                name='test'
                value='d'
              />
              <img src={getImage(row.id, row.option4)} alt='' />
            </label>
            <label className='TestRow2__object'>
              <input
                onChange={props.onChange}
                type='radio'
                name='test'
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

export default TestRowPrueba2;
