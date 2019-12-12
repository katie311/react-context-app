import React from 'react';
import { Card, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

const User = () => (
    <UserConsumer>
        { value => (
            <Card>
                <Card.Content>
                    <Card.Header>{ value.username }</Card.Header>
                    <Card.Meta>
                        { value.firstName } { value.lastName }
                    </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <p>Email: { value.email }</p>
                    <p>Dogs or Cats?:  { value.dogsOrCats }</p>
                </Card.Content>
            </Card>
        )}
    </UserConsumer>
)

export default User;