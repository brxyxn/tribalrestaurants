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

## API Routes
If you want to test or develop your own Front-End website with a framework other than the webpack included in this project (React) you might need to know the following routes to process your callback

```shell
             Prefix Verb   URI Pattern                           Controller#Action
               root GET    /                                     pages#index
    api_v1_airlines GET    /api/v1/airlines(.:format)            api/v1/airlines#index
                    POST   /api/v1/airlines(.:format)            api/v1/airlines#create
 new_api_v1_airline GET    /api/v1/airlines/new(.:format)        api/v1/airlines#new
edit_api_v1_airline GET    /api/v1/airlines/:slug/edit(.:format) api/v1/airlines#edit
     api_v1_airline GET    /api/v1/airlines/:slug(.:format)      api/v1/airlines#show
                    PATCH  /api/v1/airlines/:slug(.:format)      api/v1/airlines#update
                    PUT    /api/v1/airlines/:slug(.:format)      api/v1/airlines#update
                    DELETE /api/v1/airlines/:slug(.:format)      api/v1/airlines#destroy
     api_v1_reviews POST   /api/v1/reviews(.:format)             api/v1/reviews#create
      api_v1_review DELETE /api/v1/reviews/:id(.:format)         api/v1/reviews#destroy
                    GET    /*path(.:format)                      pages#index
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