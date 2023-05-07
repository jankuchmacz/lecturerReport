const getVisibleGroups = (groups, {text, subjectName, sortBy}) => {
    return groups.filter((group)=>{
        const textMatch = group.name.toLowerCase().includes(text.toLowerCase());
        const subjectNameMatch = group.subject.toLowerCase().includes(subjectName.toLowerCase());
        return textMatch && subjectNameMatch;
    }).sort((a, b)=>{
        const aTotalHours = a.lectures + a.exercises + a.laboratories;
        const bTotalHours = b.lectures + b.exercises + b.laboratories;
        if(sortBy==="alph"){
           return a.name < b.name ? -1 : 1 
        } else if (sortBy==="students"){
            return a.studentsNumber > b.studentsNumber ? -1 : 1
        } else if (sortBy==="hours"){
            return aTotalHours>bTotalHours ? -1 : 1
        }
    })
}
export default getVisibleGroups;