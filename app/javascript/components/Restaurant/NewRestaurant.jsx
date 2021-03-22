// www.example.com/new#create
import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

class NewRestaurant extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    // Adding addHtmlEntities method to replace all HTML opening and closing brackets to avoid
    // RAW HTML in the data base, using regex as I did in the Restaurant component.
    stripHtmlEntities(str){
        return String(str)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    // Setting a value to each user input using computed property names, see more:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    onChange(event){
        console.log(event)
        this.setState({ [event.target.name]: event.target.value });
    }

    // Validating that none of the values are empty and fill each param with is corresponding
    // value and description will replace each new line with double <br /> tag.
    onSubmit(event){
        event.preventDefault();
        const url = "/api/v1/restaurants";
        const { name, description } = this.state;

        if(name.length == 0 || description.length == 0)
        return 0;

        const body = {
            name,
            description: this.stripHtmlEntities(
                description.replace(/\n/g, "<br /> <br />")
            )
        };

        // Getting token from rails meta security token, for more info check this out:
        // https://guides.rubyonrails.org/security.html
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if(response.ok){
                console.log(response)
                return response.json();
            }
            throw new Error("Returning an error from JSON response while creating a new post.");
        })
        .then(response => this.props.history.push(`/view/${response.id}`))
        .catch(error => console.log(error.message)); // Replace this later with an alert.
    }

    // Now lets render the final view
    render(){
        return(
            // Need to update layout later
            // Need to update layout later
            <main>
                {/* Navbar Layout */}
                <Navbar />

                {/* Displaying Restaurant Creation Form */}
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-normal mb-5">Add a new restaurant</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="restaurantName">Restaurant Name</label>
                                    <input type="text" name="name" id="restaurantName" className="form-control" required onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="restaurantDescription">Restaurant Description</label>
                                    <textarea name="description" id="restaurantDescription" cols="30" rows="10" className="form-control" required onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Create Restaurant</button>
                                <Link to="/" className="btn btn-link mt-3">Back to restaurants</Link>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Landing Page Footer */}
                <Footer />
            </main>
        );
    }
}

export default NewRestaurant;