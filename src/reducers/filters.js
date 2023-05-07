//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    subjectName: '',
    sortBy: 'alph'
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_SUBJECT_NAME_FILTER':
            return {
                ...state,
                subjectName: action.text
            }
        case 'SET_SORT_BY_ALPH' :
            return {
                ...state,
                sortBy: 'alph'
            }
        case 'SET_SORT_BY_STUDENTS_NUMBER' :
            return {
                ...state,
                sortBy: 'students'
            }
        case 'SET_SORT_BY_HOURS_NUMBER' :
            return {
                 ...state,
                 sortBy: 'hours'
            }
        default:
            return state;
    }
}
export {filtersReducer as default};