const groupReducerDefaultState = [];
const groupReducer = (state = groupReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_GROUP':
            return [...state, action.group];
        case 'EDIT_GROUP':
            return state.map((group)=>{
                if(group.id!==action.id){
                    return group
                }else{
                    return {
                        ...group,
                        ...action.updates
                    }
                }
            })
        case 'REMOVE_GROUP' :
            return state.filter((group)=>{
                if(group.id!==action.id){
                    return group
                }
            })
        case 'SET_GROUPS':
            return action.groups
        default: 
            return state;
    }
}
export default groupReducer;