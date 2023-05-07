const calculateTotalNumberOfHours = (groups) => {
    let total = 0;
    groups.forEach((group) => {
        total+=group.lectures+group.exercises+group.laboratories
    });
    return total;
}
export default calculateTotalNumberOfHours;