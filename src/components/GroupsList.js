import React from "react";
import {connect} from 'react-redux'; //connect connects component to redux store
import GroupItem from "./GroupItem";
import getVisibleGroups from "../selectors/groups";
import ReactPDF from '@react-pdf/renderer';
import MyDocument from "./MyDocument";
import ReactDOM from 'react-dom';
import calculateTotalNumberOfHours from "../selectors/hours";
import GroupFilters from "./GroupFilters";

class GroupsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pdf: false
        }
    }
    printList = () =>{
        this.setState(()=>({
           pdf: true 
        }))
        //ReactDOM.render(<MyDocument hours={this.props.hours} groups={this.props.groups}/>, document.getElementById('container'));
    }
    onReturn = () =>{
        this.setState(()=>({
           pdf: false 
        }))
    }
    render () {
        return ( 
                <div> 
                    {
                    this.state.pdf ? (
                        <div id="container" className="content-container">
                            <button  className= "button button--secondary" onClick={this.onReturn}>Return</button>
                            <MyDocument hours={this.props.hours} groups={this.props.groups}/>
                        </div>
                    ) : (
                        <div id="container" className="content-container">
                            <GroupFilters/>
                            <div className="list-header">
                                <div className="show-for-mobile">Example</div>
                                <div className="show-for-desktop">Group Name</div>
                                <div className="show-for-desktop">Classes</div>
                                <div className="show-for-desktop">Total</div>
                            </div>
                            <div className="list-body">
                            {
                                this.props.groups.length === 0 ? (
                                    <div className="list-item list-item--message">
                                        <span>No groups</span>
                                    </div>
                                    
                                ): (
                                    this.props.groups.map((group) => {
                                        return (
                                            <GroupItem key={group.id} group={group} />
                                        );            
                                    })
                                )
                            }
                            </div>
                            <button  className= "button" onClick={this.printList}>Print groups list</button>
                     </div>
                    )
                }
            </div>
                                
        );
    }
}
const mapStateToProps = (state) => {
    //in this function we determine what information do we need from the store
    const groups = getVisibleGroups(state.group, state.filters);
    return {
        groups,
        hours: calculateTotalNumberOfHours(groups)
    }
}
export default connect(mapStateToProps) (GroupsList);