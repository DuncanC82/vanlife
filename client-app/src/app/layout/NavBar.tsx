import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';



export default function  NavBar() {

    const {activityStore} = useStore();

    return ( 
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}}/>
                    Vanlife
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name = 'Activities'/>
                <Menu.Item>
<<<<<<< HEAD
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'/>
=======
                    <Button onClick={() => activityStore.openForm()} positive content='Create Activity'/>
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
                </Menu.Item>
            </Container>

        </Menu>
    )
} 