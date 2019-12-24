import React, { Component } from 'react';
import CreateNoteService from '../../service/CreateNoteService';
class ListNotesComponent extends Component {
	constructor(props) {
        super(props)
        this.state = {
            notes: [],
            message: null
        }
        this.refreshNote = this.refreshNote.bind(this)
        this.deleteNoteClicked = this.deleteNoteClicked.bind(this)
       // this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addNoteClicked = this.addNoteClicked.bind(this)
        this.refreshNote = this.refreshNote.bind(this)
    }

    componentDidMount() {
        this.refreshNote();
    }
    deleteNoteClicked(id) {
    	CreateNoteService.deleteNote(id)
            .then(
                response => {
                    this.setState({ message: `Delete of note  ${id} Successful` })
                    this.refreshCourses()
                }
            )

    }
    addNoteClicked(note: Object) {
    	CreateNoteService.addNoteClicked(note)
        .then(
            response => {
                this.setState({ message: `adding  note  ${note} Successful` })
                this.refreshCourses()
            }
        )
    }

    

    refreshNote() {
    	CreateNoteService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ notes: response.data })
                }
            )
    }
    
    render() {
        return (
        		<div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.notes.map(
                                    note =>
                                        <tr key={note.id}>
                                            <td>{note.id}</td>
                                            <td>{note.name}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteNoteClicked(note.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                    <button className="btn btn-success" onClick={this.addNoteClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ListNotesComponent