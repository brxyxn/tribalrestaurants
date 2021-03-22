import React from 'react'


const CommentForm = (props) => {
    return(
        <section className="container mb-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>Write a new comment</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="body" id="" cols="30" rows="5" className="form-control vh-2" placeholder="Write a new comment"></textarea>
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