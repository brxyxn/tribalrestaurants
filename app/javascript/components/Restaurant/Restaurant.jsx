// Updating this component since using useState and useEffect will do it better and easier than
// previous way used in the begining.
// www.example.com/view/$id
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import CommentForm from './CommentForm';
import Post from './Post'; //
import Comment from './Comment'

const Restaurant = (props) => {
    const [post, setPost] = useState({});
    // const [comments, setComments] = useState({});
    const [comment, setComment] = useState({username: '', body: ''});
    const [loaded, setLoaded] = useState(false) // This const will allow us to pass the object once it's loaded

    // GET index 
    // GET /api/v1/restaurants >> api/v1/restaurants#index
    useEffect(() => {
        const id = props.match.params.id;
        const url = `/api/v1/restaurants/${id}`;

        axios.get(url)
        .then(response => {
            setPost(response.data)
            // setComments(response.data.included)
            setLoaded(true)
        })
        .catch(response => console.log('Something went wrong', response));
    }, [])

    const onChange = (e) => {
        e.preventDefault()

        setComment(Object.assign({}, comment, {[e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const token = document.querySelector('meta[name="csrf-token"]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token

        // POST url
        const url = '/api/v1/comments'
        // Get our restaurant_ID
        const restaurant_id = parseInt(post.data.id)

        // POST to create our new comment/review
        axios.post(url, {comment, restaurant_id})
        .then(response => {
            const included = [...post.included, response.data.data]
            setPost({...post, included})
            setComment({username: '', body: ''})
        })
        .catch(response => console.log(response))
    }

    let listComments
    if (loaded && post.included.length > 0){
        listComments = post.included.map((item, index) => {
            return(
                <Comment
                key={index}
                attributes={item.attributes}
                />
            )
        })
    } else {
        listComments = (
            <p>No reviews yet.</p>
        )
    }

    return(
        <main>
            {/* Navbar Layout */}
            <Navbar />

            {
                loaded &&
                <Fragment>
                    {/* Post => Restaurant object, rendered only when data gets loaded to the variable */}
                    <Post
                    attributes={post.data.attributes}
                    comments={post.included}
                    />

                    {/* Comments List */}
                    <section className="container">
                        <div className="row my-5">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="card w-100">
                                    <div className="card-header">
                                        <h5>{post.included.length > 1 ? `${post.included.length} Reviews` : `${post.included.length} Review`}</h5>
                                    </div>
                                    <div className="card-body">
                                        {listComments}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* CommentForm to create a new comment */}
                    <CommentForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    attributes={post.data.attributes}
                    comment={comment}
                     />
                </Fragment>
            }

            <Footer />
        </main>
    )
}

export default Restaurant;
