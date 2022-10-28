import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";
<<<<<<< HEAD
=======
import { v4 as uuid } from 'uuid';
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36

export default class ActivityStore {
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) => 
            Date.parse(a.date) - Date.parse(b.date));
    }

    get groupedActivities() {
        return Object.entries(
            this.activitiesByDate.reduce((activities, activity) =>{
                const date = activity.date;
                activities[date] = activities[date] ? 
                [...activities[date], activity] : [activity];
                return activities;
            }, {} as {[key: string]: Activity[]})
        )
    }

    loadActivities = async () => {
<<<<<<< HEAD
        this.loadingInitial = true;
        try {
            const activities = await agent.Activities.list();
            activities.forEach(activity => {
                this.setActivity(activity);
=======
        try {
            const activities = await agent.Activities.list();
            activities.forEach(activity => {
                activity.date = activity.date.split('T')[0];
                this.activityRegistry.set(activity.id, activity);
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

<<<<<<< HEAD
    loadActivity =async (id: string) => {
        let activity = this.getActivity(id);
        if (activity) {
            this.selectedActivity =activity;
            return activity;
        } else{
            this.loadingInitial = true;
            try{
                activity = await agent.Activities.details(id);
                this.setActivity(activity);
                runInAction(()=>{
                    this.selectedActivity = activity
                });
                this.setLoadingInitial(false);
                return activity;
            } catch (error) {
              console.log(error);
              this.setLoadingInitial(false);
            }
        }
           
    }

    private setActivity = (activity: Activity) => {
        activity.date = activity.date.split('T')[0];
        this.activityRegistry.set(activity.id, activity);
    }

    private getActivity = (id: string) => {
        return this.activityRegistry.get(id);
    }

=======
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

<<<<<<< HEAD
    
    createActivity = async (activity: Activity) => {
        this.loading = true;
=======
    selectActivity = (id: string) => {
        this.selectedActivity = this.activityRegistry.get(id);
    }

    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid();
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteActivity = async (id: string) => {
        this.loading = true;
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id);
<<<<<<< HEAD
=======
                if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
>>>>>>> e3edf5f90b2322a0f23387af1bbfe2e75eb84a36
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}