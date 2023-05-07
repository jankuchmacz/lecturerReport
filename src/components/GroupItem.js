import React from "react";
import { Link } from "react-router-dom";


const GroupItem = (props) => {
    const totalHours = props.group.lectures+props.group.exercises+props.group.laboratories;
    return (
            <Link className="list-item" to={`/edit/${props.group.id}`}>
                <div className="list-item__box">
                    <h3 className="list-item__title">{props.group.name}</h3>
                    <span className="list-item__subtitle">{props.group.studentsNumber} Students</span>
                </div>
                <div className="list-item__box">
                    <h3 className="list-item__title">{props.group.subject}</h3>
                    <span className="list-item__subtitle">L:{props.group.lectures}, E:{props.group.exercises}, Lab:{props.group.laboratories} </span>
                </div>
                <div className="list-item__box">
                    <h3 className="list-item__data">{totalHours}</h3>
                </div>
                
            </Link> 
    );
}
export default GroupItem;