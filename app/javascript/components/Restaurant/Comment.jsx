import React from 'react'

const Comment = (props) => {
    const {username, body} = props.attributes

    return(
        <blockquote className="mb-5">
            <p>{body}</p>
            <footer className="blockquote-footer">{username}</footer>
        </blockquote>
    )
}

export default Comment