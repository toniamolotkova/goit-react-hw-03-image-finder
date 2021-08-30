import React, { Component } from 'react';
import s from './Searchbar.module.css';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

class Searchbar extends Component {
  state = {
    searchValue: null,
    error: null,
    //status: Status.IDLE,
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
