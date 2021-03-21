import React from 'react';
import { Link } from 'react-router-dom';

class NewComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            body: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    
    }

    // Setting a value to each user input using computed property names, see more:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    onChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event){
        event.preventDefault();
        const url = "/api/v1/comments";

        if(username.length == 0 || description.length == 0)
        return 0;

        const body = {
            username,
            body
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url,{
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Returning an error from JSON response while creating a new comment.");
        })
        .then(response => this.props.history.push(`view/10`))
        .catch(error => console.log(error.message));
    }

    render(){
        return(
            <div className="comment-block">
                <h5>New Comment</h5>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="commentUsername">Username</label>
                        <input type="text" name="username" id="commentUsername" className="form-control" required onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="commentBody">Type your comment</label>
                        <textarea name="body" id="commentBody" cols="30" rows="10" className="form-control" required onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-5">Comment</button>
                </form>
            </div>
        );
    }
}
export default NewComment;