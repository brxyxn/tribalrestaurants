import React from 'react';
import { Link } from 'react-router-dom';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount(){
        const url = "/api/v1/restaurants/15/comments";
        fetch (url)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error("Returning an error from JSON response while getting all comments.");
        })
        .then(response => this.setState({ comments: response }))
        .catch(() => this.props.history.push("/"));
    }

    render(){
        const { comments } = this.state;
        const allComments = comments.map((comment,index) => (
            <div className="comments-list">
                <p>My list</p>
                <br/>
                {comment.id}
                <br/>
                {comment.username}
                <br/>
                {comment.body}
                <br/>
                {comment.restaurant_id}
            </div>
        ));

        return(
            <div className="comments">
                {allComments}
            </div>
        )
    }
}

export default Comments;