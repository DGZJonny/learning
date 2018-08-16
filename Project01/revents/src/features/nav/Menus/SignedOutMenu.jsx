import React from 'react'
import { Button, Menu } from 'semantic-ui-react';

const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position="right">
            <Button onClick={signIn} basic="basic" inverted="inverted" content="Login" />
            <Button basic="basic" inverted="inverted" content="Sign Out" style={{
                marginLeft: '0.5em'
            }} />
        </Menu.Item>
    )
}

export default SignedOutMenu
