import React from 'react';
import { Link } from 'react-router-dom';

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

    // Adding addHtmlEntities method to replase all HTML opening and closing brackets.
    addHtmlEntities(str){
        return String(str)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    }

    render() {
        const{ restaurant } = this.state;
        
        const restaurantDescription = this.addHtmlEntities(restaurant.description);

        return (
            <div className="">
                <div>
                    <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="img-fluid" />
                    <div className="bg-dark">
                        <h1 className="display-4">{restaurant.name}</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4>Description</h4>
                                <div dangerouslySetInnerHTML={{__html: `${restaurantDescription}`}} />
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <Link to="/" className="btn btn-link">Back to restaurants</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurant;