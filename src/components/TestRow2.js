import React from 'react';
import './styles/TestRow2.css';

function getImage(id) {
  return require(`../assets/img/Test2/Ejemplos/E1/E1_${id}.svg`);
}

function TestRow2(props) {
  return (
    <div className='TestRow2'>
      <div className='TestRow2__container'>
        <span className='TestRow2__counter'>1</span>
        <label className='TestRow2__object'>
          <input onChange={props.onChange} type='radio' name='test' value='a' />
          <img src={getImage(1)} alt='' />
        </label>

        <label className='TestRow2__object'>
          <input onChange={props.onChange} type='radio' name='test' value='b' />
          <img src={getImage(2)} alt='' />
        </label>
        <label className='TestRow2__object'>
          <input onChange={props.onChange} type='radio' name='test' value='c' />
          <img src={getImage(3)} alt='' />
        </label>
        <label className='TestRow2__object'>
          <input onChange={props.onChange} type='radio' name='test' value='d' />
          <img src={getImage(4)} alt='' />
        </label>
        <label className='TestRow2__object'>
          <input onChange={props.onChange} type='radio' name='test' value='e' />
          <img src={getImage(5)} alt='' />
        </label>
      </div>
    </div>
  );
}

export default TestRow2;
