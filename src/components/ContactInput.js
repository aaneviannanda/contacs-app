import React from 'react';

class ContactInput extends React.Component {
    constructor(props){
        super(props);

        // Inisialisasi state
        this.state = {
            name: '',
            tag: '',
        }

        // binding state
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventhandler = this.onSubmitEventhandler.bind(this);
    }

    // method name change
    onNameChangeEventHandler(event){
        this.setState(() => {
            return {
                name: event.target.value,
            }
        });
    }

    // method tag change
    onTagChangeEventHandler(event) {
        this.setState(() => {
            return {
                tag: event.target.value,
            }
        })
    }

    // method on submit
    onSubmitEventhandler(event) {
        event.preventDefault();

        this.props.addContact(this.state);
    }

    // Method render
    render() {
        return (
            <form className='contact-input' onSubmit={this.onSubmitEventhandler}>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default ContactInput;