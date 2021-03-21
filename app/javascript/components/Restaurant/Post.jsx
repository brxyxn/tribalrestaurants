import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    const { name, description, logo } = props.attributes
    const comments = props.comments
    console.log(comments.length)

    const commentList = comments.map( (item, index) => {
        return(
            <li>{item}</li>
        )
    })

    // Adding addHtmlEntities method to replace all HTML opening and closing brackets.
    const addHtmlEntities = (str) => {
        return(str)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
    }

    return(
        <section className="container my-5">
            <div className="link">
                <Link to="/" className="btn btn-link">Back to restaurant</Link>
            </div>
            <div className="row">
                <div className="col-12 d-flex align-items-center">
                    <div className="col-lg-3">
                        <img src={logo} alt={name} className="img-fluid" />
                    </div>
                    <div className="col-lg-9">
                        <h1 className="display-4">{name}</h1>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div dangerouslySetInnerHTML={{__html: `${addHtmlEntities(description)}`}} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex">
                    <div className="card">
                        <div className="card-body">
                            <p>Here goes the comment</p>
                            <footer className="blockquote-footer">Here goes the username</footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post;