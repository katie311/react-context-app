import React from 'react';
import { Form, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

class UserForm extends React.Component {
    state = {
        username: this.props.username,
        email: this.props.email,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        dogsOrCats: this.props.dogsOrCats
    };

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value, })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const user = { ...this.state, };
        this.props.updateUser(user);
    }

    render() {
        const { username, email, firstName, lastName, dogsOrCats, } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label='New Username'
                    type='text'
                    name='username'
                    value={username}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='Email'
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='First Name'
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='Last Name'
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={this.handleChange}
                />
                <Form.Select
                    label='Dogs or Cats?'
                    name='dogsOrCats'
                    value={dogsOrCats}
                    onChange={this.handleChange}
                    options={petChoices}
                />
                <Form.Button color='grey'>Save</Form.Button>
            </Form>
        )
    }
}

const ConnectedUserForm = (props) => {
    return (
        <UserConsumer>
            {value => (
                <UserForm
                    {...props}
                    username={value.username}
                    email={value.email}
                    firstName={value.firstName}
                    lastName={value.lastName}
                    dogsOrCats={value.dogsOrCats}
                    updateUser={value.updateUser}
                />
            )}
        </UserConsumer>
    )
}

const petChoices = [
    { key: 'd', text: ' Dogs', value: 'Dogs', },
    { key: 'c', text: ' Cats', value: 'Cats', },
    { key: 'b', text: ' Both', value: 'Both', },
];



export default ConnectedUserForm;
