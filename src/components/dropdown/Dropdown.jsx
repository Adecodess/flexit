import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import { Data } from '../../data';
import './dropdown.css';

const Dropdown = () => {
  const { isOpen } = useGlobalContext();

  return (
    <main className={isOpen ? 'dropdown__container' : 'show'}>
      <ul>
        <li>
          {Data.map((item) => {
            return (
              <>
                <div key={item.id} className='dropdown__item'>
                  <img src={item.img} alt='profile' className='dropdown__img' />
                  <div className='item_desc'>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <span>{item.icon}</span>
                </div>
                <hr />
              </>
            );
          })}
        </li>
      </ul>
    </main>
  );
};

export default Dropdown;
