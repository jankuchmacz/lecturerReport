import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getVisibleGroups from "../selectors/groups";

const LecturerSummary = (props) => {
    const groupsNumber = props.groups.length
    let totalHours = 0;
    let studentsNumber = 0;
    props.groups.forEach((group)=>{
        studentsNumber+=group.studentsNumber
    })
    props.groups.forEach((group) => {
        totalHours+=group.lectures+group.exercises+group.laboratories;
    });
    const groupName = groupsNumber===1 ? 'group' : 'groups';
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>
                    Viewing <span> {groupsNumber} </span> {groupName} totalling <span> {totalHours} </span> hours. 
                </h1>
                <h1 className='page-header__subtitle'>
                    Total number of students:  <span> {studentsNumber} </span> 
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Group</Link>
                </div>
            </div>
        </div>  
    );
}
const mapStateToProps = (state) => { 
    return {
        groups: getVisibleGroups(state.group, state.filters)
    }
}
export default connect(mapStateToProps) (LecturerSummary);