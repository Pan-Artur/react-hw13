import { Component } from 'react';

import { Modal } from './components/Modal';

import './App.css';

export class App extends Component {
  state = {
    isOpened: false,
    commentCount: 0,
  }

  componentDidMount() {
    console.log('Компонент монтовано');
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Компонент буде демонтовано');
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOpened !== this.state.isOpened) {
      console.log(`Статус модального вікна змінився: ${this.state.isOpened ? 'відкрито' : 'закрито'}`);
    }

    if (prevState.commentCount !== this.state.commentCount) {
      console.log(`Кількість коментарів змінилася: ${this.state.commentCount}`);
    }
  }

  handleKeyDown = (e) => {
    if (e.key === "Escape" && this.state.isOpened) {
      this.closeModal();
    }
  }

  openModal = () => {
    this.setState({ isOpened: true });
  }

  closeModal = () => {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <div className="App">
        <button type='button' onClick={this.openModal}>Відправити коментар</button>
        {this.state.isOpened && <Modal onClose={this.closeModal} />}
      </div>
    );
  }
}

