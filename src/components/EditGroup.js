import React from "react";
import { connect } from "react-redux";
import GroupForm from "./GroupForm";
import { startEditGroup, startRemoveGroup} from "../actions/group";

class EditGroup extends React.Component {
    onSubmit = (group) => {
        this.props.editGroup(this.props.group.id, group);
        this.props.history.push('/');
    }
    onClick = () => {
        this.props.removeGroup(this.props.group.id);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Group</h1>
                </div>
            </div>
            <div className="content-container">
                <GroupForm group={this.props.group} onSubmit={this.onSubmit} />
                <div className="editbuttons">
                        <button className="button button--secondary" onClick = {this.onClick}>
                            Remove Group
                        </button>
                </div> 
            </div>                          
        </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
        group: state.group.find((group)=>{
            if(group.id === props.match.params.id){
                return group
            }
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editGroup: (id, updates) => {
            return dispatch(startEditGroup(id, updates))
        },
        removeGroup: (id) => {
            return dispatch(startRemoveGroup(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroup);