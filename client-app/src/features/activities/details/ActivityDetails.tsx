import { observer, useAsObservableSource } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card,  Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

<<<<<<< HEAD
export default observer( function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if(loadingInitial || !activity) return <LoadingComponent/>;
=======
export default function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

  if(!activity) return <LoadingComponent/>;
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       <Button.Group widths ='2'>
        <Button as={Link} to={`/manage/${activity.id}`}  basic color='blue' content='edit'/>
        <Button as={Link} to='/activities' basic color='grey' content='Cancel' />
       </Button.Group>
      </Card.Content>
    </Card>
  );
})
