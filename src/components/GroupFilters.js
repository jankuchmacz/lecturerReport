import React from "react";
import { connect } from "react-redux";
import { setTextFilter, setSubjectNameFilter, sortByAlph, sortByHoursNumber, sortByStudentsNumber } from "../actions/filters";

class GroupFilters extends React.Component {

    onChange = (e)=>{
        const text = e.target.value;
        this.props.setTextFilter(text);
    }
    onClassesNameChange = (e)=>{
        const text = e.target.value;
        this.props.setSubjectNameFilter(text);
    }
    onSortChange = (e)=> {
        const value = e.target.value;
        switch(value){
            case 'alph':
                return this.props.setSortAlph();
            case 'students':
                return this.props.setSortByStudentsNumber();
            case 'hours':
                return this.props.setSortByHoursNumber();
        }
    }

    render () {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}>
                            <option value="alph">By group name</option>
                            <option value="students">By number of students</option>
                            <option value="hours">By number of hours</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <input 
                            type="text" 
                            className="text-input"
                            placeholder="Search by group name"
                            value={this.props.filters.text}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <input 
                            type="text" 
                            className="text-input"
                            placeholder="Search by subject name"
                            value={this.props.filters.subjectName}
                            onChange={this.onClassesNameChange}
                            />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch)=>({
    setTextFilter: (text)=>{
        return dispatch(setTextFilter(text));
    },
    setSubjectNameFilter: (text)=>{
        return dispatch(setSubjectNameFilter(text));
    },
    setSortAlph: ()=>{
        return dispatch(sortByAlph());
    },
    setSortByStudentsNumber: ()=> {
        return dispatch(sortByStudentsNumber());
    },
    setSortByHoursNumber: ()=>{
        return dispatch(sortByHoursNumber());
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (GroupFilters);