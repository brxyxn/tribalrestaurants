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
                <div className="container col-12 d-flex align-items-center">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                            <img src={logo} alt={name} className="w-100 img-fluid" />
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                            <h1 className="d-none d-lg-block display-4">{name}</h1>
                            <h1 className="d-lg-none d-block h-3">{name}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div dangerouslySetInnerHTML={{__html: `${addHtmlEntities(description)}`}} className="text-justify" />
                </div>
            </div>
            
            <div className="row my-3">
                <div className="col-12 d-flex justify-content-center">
                    <div className="card w-100">
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