import React from "react";
import { connect } from "react-redux";
import GroupForm from "./GroupForm";
import { startAddGroup } from "../actions/group";

class AddGroup extends React.Component {
    onSubmit = ({name='', subject='', studentsNumber=0, lectures=0, exercises=0, laboratories=0}) => {
        const group = {
            name: name,
            subject:subject,
            studentsNumber: studentsNumber,
            lectures: lectures,
            exercises: exercises,
            laboratories: laboratories
        }
        this.props.addGroup(group);
        this.props.history.push('/'); //to redirect to main page
    }
    onCancel = () => {
        this.props.history.push('/'); //to redirect to main page
    }
    
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Group</h1>
                    </div>     
                </div>
                <div className="content-container">
                    <GroupForm onSubmit={this.onSubmit}/>
                    <div>
                        <button className="button button--secondary" onClick={this.onCancel}>Cancel</button>
                    </div>
                </div>
                 
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>({
    addGroup: (group) => {
        return dispatch(startAddGroup(group))
    }
})
export default connect(undefined, mapDispatchToProps)(AddGroup);