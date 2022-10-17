<<<<<<< HEAD
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import { Route, useLocation } from 'react-router-dom';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();
  return (
    <>
      
      <Route exact path='/' component={HomePage}/>
      <Route path={`/(.+)`} 
      render={()=> (
        <>
      <NavBar  />
      <Container style={{marginTop: '7em'}}>
        <Route exact path='/activities' component={ActivityDashboard}/>
        <Route  path='/activities/:id' component={ActivityDetails}/>
        <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}/>
      </Container> 
        </>
      )} />
     
=======
import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
    <>
      <NavBar  />
      <Container style={{marginTop: '7em'}}>
     <ActivityDashboard/>
      </Container>  
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
    </>
  );
}

export default observer(App);
