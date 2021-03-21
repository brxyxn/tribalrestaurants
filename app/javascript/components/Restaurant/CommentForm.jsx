import React from 'react'


const CommentForm = (props) => {
    return(
        <section className="comments container">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h5>Write a new comment</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor=""></label>
                                <input type="text" className="form-control" placeholder="Username"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommentForm