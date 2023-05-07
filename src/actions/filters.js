export const setTextFilter = (text='') => {
    return {
        type: 'SET_TEXT',
        text: text
    }
}
export const setSubjectNameFilter = (text='') => {
    return {
        type: 'SET_SUBJECT_NAME_FILTER',
        text: text
    }
}

export const sortByAlph = () => {
    return {
        type: 'SET_SORT_BY_ALPH'
    }
}
export const sortByStudentsNumber = () => {
    return {
        type: 'SET_SORT_BY_STUDENTS_NUMBER'
    }
}
export const sortByHoursNumber = () => {
    return {
        type: 'SET_SORT_BY_HOURS_NUMBER'
    }
}