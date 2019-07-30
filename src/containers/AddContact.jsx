import React, {Component} from 'react';
import AddContactForm from '../components/AddContactForm';

export default class AddContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true,
            newContact: {}
        }
        this.showAddContactBox = this.showAddContactBox.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    showAddContactBox() {
        this.setState({isHidden: false})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => (
            {
                newContact: {
                    ...prevState.newContact, [name]: value
                }
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!Object.values(this.state.newContact).length) {
            return false;
        }
        this.setState({isHidden: true});
        console.log(this.state.newContact)
        this.props.onSubmit(this.state.newContact);
        this.setState(prevState => (
            {
                newContact: {}
            })
        )
        console.log(this.state)
    }

    renderForm() {
        return (
            <div className="col-sm-8 offset-sm-2">
                <AddContactForm onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.isHidden === false ? this.renderForm() :
                    <button onClick={this.showAddContactBox} className="btn"> Add Contact </button>}
            </div>
        )
    }
}
