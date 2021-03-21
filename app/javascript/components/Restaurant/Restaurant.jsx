// Updating this component since using useState and useEffect will do it better and easier than
// previous way used in the begining.
// www.example.com/view/$id
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import CommentForm from './CommentForm';
import Post from './Post';

const Restaurant = (props) => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});
    const [loaded, setLoaded] = useState(false) // This const will allow us to pass the object once it's loaded
    const [count, setCount] = useState(0);

    // GET index 
    // GET /api/v1/restaurants >> api/v1/restaurants#index
    useEffect(() => {
        const id = props.match.params.id;
        const url = `/api/v1/restaurants/${id}`;

        axios.get(url)
        .then(response => {
            setPost(response.data)
            setComments(response.data.included)
            setLoaded(true)
        })
        .catch(response => console.log('Something went wrong', response));
    }, [])

    return(
        <main>
            {/* Navbar Layout */}
            <Navbar />

            {/* Post => Restaurant object, rendered only when data gets loaded to the variable */}
            {
                loaded &&
                <div>
                    <Post
                    attributes={post.data.attributes}
                    comments={comments}
                    />

                    <CommentForm />
                </div>
            }

            <Footer />
        </main>
    )
}
// Need to update layout later
        // <main>
        //     {/* Navbar Layout */}
        //     <Navbar />

        //     {/* Displaying Restaurant information */}
        //     <section className="container my-5">
        //         <div className="links">
        //             <Link to="/" className="btn btn-link">Back to restaurants</Link>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-3">
        //                 <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="col-12 img-fluid" />
        //             </div>
        //             <div className="col-lg-9">
        //                 <h1 className="display-4">{restaurant.name}</h1>
        //                 <div dangerouslySetInnerHTML={{__html: `${restaurantDescription}`}} />
        //             </div>
        //         </div>
        //     </section>

        //     <section className="container pictures">
        //         <h4>Pictures</h4>
        //     </section>

        //     <section className="container comments">
        //         <h4>Comments</h4>
        //         <NewComment />
        //     </section>

        //     {/* Landing Page Footer */}
        //     <Footer />
        // </main>
    


    // componentDidMount() {
    //     const id = this.props.match.params.id;
    //     const url = `/api/v1/restaurants/${id}`;

    //     fetch(url)
    //     .then(response => {
    //         if (response.ok){
    //             return response.json();
    //         }
    //         throw new Error(`Returning an error from JSON response while getting an specific post. Post id: ${id}`);
    //     })
    //     .then(response => this.setState({ restaurant: response }))
    //     .catch(() => this.props.history.push("/"));
    // }

    // Adding addHtmlEntities method to replace all HTML opening and closing brackets.
    // addHtmlEntities(str){
    //     return String(str)
    //     .replace(/&lt;/g, "<")
    //     .replace(/&gt;/g, ">");
    // }

    // render() {
    //     const { restaurant } = this.state;
    //     const restaurantDescription = this.addHtmlEntities(restaurant.description);
    //     return()
    // }

export default Restaurant;