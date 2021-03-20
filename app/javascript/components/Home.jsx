// Creating Home component for the Landing Page, this will contain all the restaurants 'view' buttons
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/placeholder_600x400.svg";

export default () => (
    <main className="vw-100 vh-100">
        {/* Landing Page Header */}
        <header className="d-flex flex-column primary-color d-flex align-items-center justify-content-center">
            <div className="col-12 vw-100 jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color text-center">
                    <h1 className="display-4">Restaurant List</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum veritatis quia, adipisci quidem numquam amet dolorem, laboriosam corporis dignissimos esse laudantium ducimus repudiandae repellat nobis sint, quasi dolorum debitis eum.</p>
                    <hr className="my-4"/>
                    <Link to="/restaurants" className="btn btn-lg custom-button" role="button">View Restaurants</Link>
                </div>
            </div>
        </header>

        {/* Landing Page Loader for Restaurant List */}
        <section className="restaurant-list bg-light d-flex justify-content-center">
            <div className="col-10 d-flex row d-flex justify-content-around">

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-dark bg-light mg-3">
                        <img src="https://i.imgur.com/d5xgMbP.png" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Restaurant Name</h4>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consectetur. Ab excepturi quo eligendi magni quaerat nisi earum consectetur. Culpa rem blanditiis quos harum nesciunt sunt qui explicabo eaque corrupti.</p>
                            <Link className="btn btn-primary" role="button">Show more...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-dark bg-light mg-3">
                        <img src="https://i.imgur.com/d5xgMbP.png" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Restaurant Name</h4>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consectetur. Ab excepturi quo eligendi magni quaerat nisi earum consectetur. Culpa rem blanditiis quos harum nesciunt sunt qui explicabo eaque corrupti.</p>
                            <Link className="btn btn-primary" role="button">Show more...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-dark bg-light mg-3">
                        <img src="https://i.imgur.com/d5xgMbP.png" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Restaurant Name</h4>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consectetur. Ab excepturi quo eligendi magni quaerat nisi earum consectetur. Culpa rem blanditiis quos harum nesciunt sunt qui explicabo eaque corrupti.</p>
                            <Link className="btn btn-primary" role="button">Show more...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-dark bg-light mg-3">
                        <img src="https://i.imgur.com/d5xgMbP.png" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Restaurant Name</h4>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consectetur. Ab excepturi quo eligendi magni quaerat nisi earum consectetur. Culpa rem blanditiis quos harum nesciunt sunt qui explicabo eaque corrupti.</p>
                            <Link className="btn btn-primary" role="button">Show more...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card text-dark bg-light mg-3">
                        <img src="https://i.imgur.com/d5xgMbP.png" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Restaurant Name</h4>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consectetur. Ab excepturi quo eligendi magni quaerat nisi earum consectetur. Culpa rem blanditiis quos harum nesciunt sunt qui explicabo eaque corrupti.</p>
                            <Link className="btn btn-primary" role="button">Show more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <p className="display-5 vw-50 text-center">Created by <b>Brayan Lopez</b></p>
        </footer>
    </main>
);