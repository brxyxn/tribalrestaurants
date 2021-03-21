// Run this example by adding <%= javascript_pack_tag 'hello_react' >> 'Index' %> to the head of your layout file <- Done
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// Default Modules
import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
// import PropTypes from 'prop-types'

// Importing other modules we'll use for this application
// import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Refactoring code, importing needed modules
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "../components/App";

// Adding Listener to insert/render code using React renders
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});