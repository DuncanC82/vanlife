import React from 'react'
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react'
import {  Link } from 'react-router-dom';

export default function HomePage () {
    return(
<Segment inverted textAlign='center' vertical className='masthead'>
    <Container text>
        <Header as='h1' inverted>
            <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottome: 12}}/>
            Vanlife
        </Header>
      <Header as='h2' inverted content='Welcome to Vanlife'></Header>
      <Button as={Link} to='/activities' size='huge' inverted>activities</Button>
    </Container>

</Segment>
    )

}