<<<<<<< HEAD
import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import {  Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

=======
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
>>>>>>> 7f8bff128bfe6089277815882d6d05f130bea788


interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

<<<<<<< HEAD
export default observer ( function ActivityList() {
    const {activityStore} = useStore();
    const { groupedActivities} = activityStore;
    
    return (
      <>
        {groupedActivities.map(([group, activities]) => (
          <Fragment key={group}>
            <Header sub color="teal">
              {group}
            </Header>
                {activities.map((activity) => (
                  <ActivityListItem key={activity.id} activity={activity} />
                ))}
          </Fragment>
        ))}
      </>
    );
})
=======
export default function ActivityList({ activities, selectActivity, deleteActivity, submitting }: Props) {
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

  

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Button 
                                    name={activity.id}
                                    loading={submitting && target === activity.id} 
                                    onClick={(e) => handleActivityDelete(e, activity.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' 
                                />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
>>>>>>> 7f8bff128bfe6089277815882d6d05f130bea788
