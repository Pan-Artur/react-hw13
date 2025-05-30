import { Component } from "react";

import { IoCloseOutline } from "react-icons/io5";

export class Modal extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <IoCloseOutline onClick={this.props.onClose} />
                        <h2>Ваш коментар:</h2>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="name">Ім'я:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="comment">Коментар:</label>
                            <textarea id="comment" name="comment" required />
                        </div>
                        <button type="submit">Надіслати</button>
                    </form>
                </div>
            </div>
        );
    }
}