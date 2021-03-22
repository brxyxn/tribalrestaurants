# Tribal World Whide - Restaurants Club (Reviews)

---

## Introduction

This is an application created for Tribal World Wide as a technical test regarding a job application.

This application is open source and you can use it as a reference for learning purposes.


Some useful information you might know about this app:

* **Ruby on Rails and React.js using Webpacker**
* Ruby version = 3.0.0p0
* Rails version = 6.1.3
* PostgreSQL version = 11.11 (Database)
* ReactJS version = 17.0.1
* No tests were performed for this application
* Using Axios to handle JSON responses

---

## Running in Localhost?

* run `bundle exec rails db:prepare`
* run `npm install`
* run `rails s`
* go to `http://localhost:3000`

Remember you might need to update your credentials in `config/database.yml`

---

## How did I code it?

Since I have been *learning* React.js for a couple of months now, I started coding everything from plain/basic React.js components and modules. However, I found some inconveniences to perform all the tasks and requirements for this project, I am not that expert on React.js, so I had to read a lot of documentation, I already had an idea of how React.js works and where to start because I have coded *Angular*, and they are very similar, and I consider myself a fast learner so was not too hard to understand what I needed to do for this project. In the end, I found some other helpful resources, I used those resources to *refactor code*, almost everything with **Axios** and other components.

In the Rails side (Back End), I had some experience coding applications for two or three years now, so I felt very comfortable with it, and I knew where to start and what I needed to do. I really love to create good *graphical/looking* stuff so I dedicated some time to imagine what I wanted the app to look like, and due to time I was unable to focus too much time on *UI/UX*, but I think that looks nice. Even though I don’t get the job, this *challenge* made me assess my current skills and figure out what I still have to focus on while I get certified in Front End Development... **Practice makes the master!**

---

## API
### Authentication
For security purposes [Rails Security](https://guides.rubyonrails.org/security.html) explains we need to keep our API secure from attacks, and one way is thru CSRF (Cross-Site Request Forgery) which is explained in [this link](https://guides.rubyonrails.org/security.html#cross-site-request-forgery-csrf), because of that by following guidelines every call will need a *CSRF Token* to validate the request is not a malicious code or attack to the API, keep that in mind when you connect your application to the API.

### Status and Codes
Since this API is not completed and for practical purposes if there is an error message from the API, specifically from controllers and the only standar code is **422**, so you can handle alerts with it and basic codes like 200, 400, 403, 404, & 500. However, this could be improved in a second version. (Planning to handle GraphQL)

### Routes
If you want to test or develop your own Front-End website with a framework other than the webpack included in this project (React) you might need to know the following routes to process your callback

```shell
            Prefix Verb   URI Pattern                           Controller#Action
api_v1_restaurants GET    /api/v1/restaurants(.:format)         api/v1/restaurants#index
                   POST   /api/v1/restaurants(.:format)         api/v1/restaurants#create
 api_v1_restaurant GET    /api/v1/restaurants/:id(.:format)     api/v1/restaurants#show
                   PATCH  /api/v1/restaurants/:id(.:format)     api/v1/restaurants#update
                   PUT    /api/v1/restaurants/:id(.:format)     api/v1/restaurants#update
                   DELETE /api/v1/restaurants/:id(.:format)     api/v1/restaurants#destroy
   api_v1_comments POST   /api/v1/comments(.:format)            api/v1/comments#create
    api_v1_comment DELETE /api/v1/comments/:id(.:format)        api/v1/comments#destroy
              root GET    /                                     landingpage#index
                   GET    /*path(.:format)                      landingpage#index

```
---

## Database

The final schema is:

```ruby
create_table "comments", force: :cascade do |t|
    t.string "username", null: false
    t.text "body", null: false
    t.bigint "restaurant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["restaurant_id"], name: "index_comments_on_restaurant_id"
end

create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "logo", default: "https://i.imgur.com/d5xgMbP.png"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
end

add_foreign_key "comments", "restaurants"
```

---

## Good to know

* This project was generated without test files `-T`, and without *CoffeeScript* `--skip-coffee`.
* This project has a picture by default, because I ran out of money and my free trials to upload files (pictures) are expired, however, if you plan to deploy the project to **Heroku** I recommend you to use [**Simple File Upload**](https://devcenter.heroku.com/articles/simple-file-upload), in comparison with other platforms that bundles a package with an amazing performance, otherwise you can try with `aws-sdk` up to you.
* I had to record all the references I used to create this project, however, I had to rush myself to complete the project as soon as possible, but I will try to recall all references to put them here as credits.