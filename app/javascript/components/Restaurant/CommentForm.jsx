import React from 'react'

const CommentForm = (props) => {
    return(
        <section className="container mb-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Write a review</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={props.onSubmit}>
                                <div className="form-group">
                                    <input name="username" onChange={props.onChange} value={props.comment.username} type="text" className="form-control" placeholder="Type your name" />
                                </div>
                                <div className="form-group">
                                    <textarea name="body" onChange={props.onChange} value={props.comment.body} cols="30" rows="5" className="form-control vh-2" placeholder="Type a new comment" ></textarea>
                                </div>
                                <button className="btn btn-primary">Add new comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommentForm