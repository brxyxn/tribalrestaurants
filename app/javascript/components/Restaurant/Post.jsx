import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    const { name, description, logo } = props.attributes

    // Adding addHtmlEntities method to replace all HTML opening and closing brackets.
    const addHtmlEntities = (str) => {
        return(str)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
    }
    
    return(
        <section className="container my-4">
            <div className="link my-4">
                <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
            <div className="row">
                <div className="container col-12 d-flex align-items-center">
                    <div className="row mb-4">
                        <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                            <img src={logo} alt={name} className="w-100 img-fluid" />
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                            <h1 className="h-3">{name}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div dangerouslySetInnerHTML={{__html: `${addHtmlEntities(description)}`}} className="text-justify" />
                </div>
            </div>
        </section>
    )
}

export default Post;