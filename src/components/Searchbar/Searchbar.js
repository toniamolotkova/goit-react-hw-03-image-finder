import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({
      searchValue: e.currentTarget.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchValue.trim() === '') {
      toast.warn('Enter correct value');
      return;
    }

    this.props.onSubmit(this.state.searchValue);
    this.reset();
    console.log(this.state.searchValue);
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            value={this.state.searchValue}
            onChange={this.handleChange}
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
