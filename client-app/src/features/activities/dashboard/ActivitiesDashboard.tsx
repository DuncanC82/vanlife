import { observer } from "mobx-react-lite";
<<<<<<< HEAD
import React, { useEffect } from "react";
import { Grid,  } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
<<<<<<< HEAD
import ActivityFilters from "./ActivityFilters";
=======
=======
import React from "react";
import { Grid,  } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
>>>>>>> 7f8bff128bfe6089277815882d6d05f130bea788
import ActivityList from "./ActivityList";


export default observer (function ActivityDashboard() {

  const  {activityStore} = useStore();
<<<<<<< HEAD
  const {loadActivities, activityRegistry} = activityStore
  
  useEffect(() => {

    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities])

if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>
=======
  const {selectedActivity, editMode} = activityStore; 
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36

  return (
    <Grid>
      <Grid.Column width="10">
      <ActivityList/>
      </Grid.Column>
      <Grid.Column width="6">
<<<<<<< HEAD
        <ActivityFilters/>
=======
<<<<<<< HEAD
        <h2>Activiy Filters</h2>
=======
        {selectedActivity && !editMode &&
      <ActivityDetails 
      />}
      { editMode &&
      <ActivityForm/>}
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
>>>>>>> 7f8bff128bfe6089277815882d6d05f130bea788
      </Grid.Column>
    </Grid>
  );
})
