import { Component } from "react";

import { StyledModal } from "./StyledModal";

import { IoCloseOutline } from "react-icons/io5";

export class Modal extends Component {
    handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <StyledModal onClick={this.handleOverlayClick}>
                <div>
                    <div>
                        <h2>Ваш коментар:</h2>
                        <IoCloseOutline onClick={this.props.onClose} />
                    </div>
                    <form>
                        <div>
                            <label htmlFor="name">Ім'я:</label>
                            <input type="text" id="name" name="name" value={this.props.formData.name} onChange={this.props.onChange} required />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" value={this.props.formData.email} onChange={this.props.onChange} required />
                        </div>
                        <div>
                            <label htmlFor="comment">Коментар:</label>
                            <textarea id="comment" name="comment" value={this.props.formData.comment} onChange={this.props.onChange} required />
                        </div>
                        <button type="submit">Надіслати</button>
                    </form>
                </div>
            </StyledModal>
        );
    }
}