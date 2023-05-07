import database from '../firebase/firebase';

export const addGroup = (group) => {
    return {
        type: 'ADD_GROUP', 
        group: group
    }
}
export const startAddGroup = (groupData = {})=>{
    return (dispatch, getState) => {
        //destructuring
        const {
            name = '', subject = '', studentsNumber = 0, lectures = 0, exercises = 0, laboratories = 0
        } = groupData;
        const group={
            name,
            subject,
            studentsNumber,
            lectures,
            exercises,
            laboratories
        }
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/groups`).push(group).then((ref)=>{
           dispatch(addGroup({
                id: ref.key,
                ...group
            })); 
        })
    };
}
export const editGroup = (id, updates) => {
    return {
        type: 'EDIT_GROUP',
        id, 
        updates
    }
}
export const startEditGroup = (id, updates)=>{
    return (dispatch, getState) => {
        const uid= getState().auth.uid;
        return database.ref(`users/${uid}/groups/${id}`).update({
            ...updates
        }).then(()=>{
            dispatch(editGroup(id,updates));
        }).catch((e)=>{
            console.log('Error during fetching data from DB', e);
        })
    }
}
export const removeGroup = (id) => {
    return {
        type: 'REMOVE_GROUP',
        id
    }
}
export const startRemoveGroup = (id)=>{
    return (dispatch, getState) => {
        const uid= getState().auth.uid;
        return database.ref(`users/${uid}/groups/${id}`).remove().then(()=>{
            dispatch(removeGroup(id));
        }).catch((e)=>{
            console.log('Error during fetching data from DB', e);
        })
    }
}
export const setGroups = (groups)=>({
    type: 'SET_GROUPS',
    groups: groups
});
export const startSetGroups = () => {
    return (dispatch, getState) => {
        const uid= getState().auth.uid;
        return database.ref(`users/${uid}/groups`).once('value').then((snapshot)=>{
            const groups=[];
            snapshot.forEach((childSnapshot)=>{
                groups.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setGroups(groups));
        }).catch((e)=>{
            console.log('Error during fetching data from DB', e);
        })
    }
}