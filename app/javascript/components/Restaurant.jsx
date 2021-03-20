import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: { description: "" }
        };
        this.addHtmlEntities = this.addHtmlEntities.bind(this);
    }

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        const url = `/api/v1/show/${id}`;

        fetch(url)
        .then(response => {
            if (response.ok){
                return response.json();
            }
            throw new Error(`Returning an error from JSON response while getting an specific post. Post id: ${id}`);
        })
        .then(response => this.setState({ restaurant: response }))
        .catch(() => this.props.history.push("/"));
    }

    // Adding addHtmlEntities method to replace all HTML opening and closing brackets.
    addHtmlEntities(str){
        return String(str)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    }

    render() {
        const{ restaurant } = this.state;
        
        const restaurantDescription = this.addHtmlEntities(restaurant.description);

        return (
            // Need to update layout later
            <main>
                {/* Navbar Layout */}
                <Navbar />

                {/* Displaying Restaurant information */}
                <section className="container my-5">
                    <div className="links">
                        <Link to="/" className="btn btn-link">Back to restaurants</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="col-12 img-fluid" />
                        </div>
                        <div className="col-lg-9">
                            <h1 className="display-4">{restaurant.name}</h1>
                            <div dangerouslySetInnerHTML={{__html: `${restaurantDescription}`}} />
                        </div>
                    </div>
                </section>

                <section className="container pictures">
                    <h4>Pictures</h4>
                </section>

                <section className="container comments">
                    <h4>Comments</h4>
                </section>

                {/* Landing Page Footer */}
                <footer>
                    <p className="display-5 vw-50 text-center">Created by <b>Brayan Lopez</b></p>
                </footer>
            </main>
        )
    }
}

export default Restaurant;