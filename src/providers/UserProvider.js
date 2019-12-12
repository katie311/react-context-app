import React from 'react';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
    state = {
        username: 'Lady K',
        email: 'thekatielay@gmail.com',
        firstName: 'Katie',
        lastName: 'Lay',
        dogsOrCats: 'Both',
        updateUser: (value) => this.updateUser(value),
    };

    updateUser = (value) => {
        this.setState({...value, });
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider;