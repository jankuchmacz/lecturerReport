import React from "react";

export default class GroupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.group ? props.group.name : '',
            subject: props.group ? props.group.subject : '',
            studentsNumber: props.group ? props.group.studentsNumber : '',
            lectures: props.group ? props.group.lectures : '',
            exercises: props.group ? props.group.exercises : '',
            laboratories: props.group ? props.group.laboratories : '',
            error: ''
        }
        console.log(this.state.studentsNumber);
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(()=>({
            name: name
        }))
    }
    onSubjectChange = (e) => {
        const subject = e.target.value;
        this.setState(()=>({
            subject
        }))
    }
    onStudentsNumberChange = (e)=>{
        const studentsNumber = e.target.value;
        if(studentsNumber.match(/^(?:[0-9]+|)$/)){
            this.setState(()=>({
                studentsNumber: studentsNumber
            }))
        }
    }
    onLectureNumberChange = (e) =>{
        const lecturesNumber = e.target.value;
        if(lecturesNumber.match(/^(?:[0-9]+|)$/)){
            this.setState(()=>({
                lectures: lecturesNumber
            }))
        }
    }
    onExerciseNumberChange = (e) =>{
        const exercisesNumber = e.target.value;
        if(exercisesNumber.match(/^(?:[0-9]+|)$/)){
            this.setState(()=>({
                exercises: exercisesNumber
            }))
        }
    }
    onLaboratoriesNumberChange = (e) =>{
        const laboratoriesNumber = e.target.value;
        if(laboratoriesNumber.match(/^(?:[0-9]+|)$/)){
            this.setState(()=>({
                laboratories: laboratoriesNumber
            }))
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name || !this.state.studentsNumber || !this.state.subject || !this.state.lectures || !this.state.exercises || !this.state.laboratories){
           this.setState(()=>({
                error: "Please provide full data about subject"
           }))
        }else{
            this.setState(()=>({
                error: ''
           }))
           this.props.onSubmit({
                name: this.state.name,
                subject: this.state.subject,
                studentsNumber: parseInt(this.state.studentsNumber),
                lectures: parseInt(this.state.lectures),
                exercises: parseInt(this.state.exercises),
                laboratories: parseInt(this.state.laboratories)
           })
        }

    }
    render () {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                { this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input type="text" 
                        placeholder="Group Name"
                        autoFocus
                        className="text-input"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input type="text" 
                        placeholder="Subject Name"
                        className="text-input"
                        value={this.state.subject}
                        onChange={this.onSubjectChange}
                    />
                    <input type="text" 
                        placeholder="Number of students"
                        className="text-input"
                        value={this.state.studentsNumber}
                        onChange = {this.onStudentsNumberChange}
                    />
                    <input type="text" 
                        placeholder="Lecture hours"
                        className="text-input"
                        value={this.state.lectures}
                        onChange = {this.onLectureNumberChange}
                    />
                    <input type="text" 
                        placeholder="Exercise hours"
                        className="text-input"
                        value={this.state.exercises}
                        onChange = {this.onExerciseNumberChange}
                    />
                    <input type="text" 
                        placeholder="Laboratory hours"
                        className="text-input"
                        value={this.state.laboratories}
                        onChange = {this.onLaboratoriesNumberChange}
                    />
                    <div>
                        <button className="button">Save Group</button>
                    </div>
                </form>
            </div>
        );
        
    }        
}
    