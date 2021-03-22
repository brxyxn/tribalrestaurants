class Api::V1::RestaurantsController < ApplicationController
  # Creating Index method, this returns all Restaurants ordered desc based on created date (timestamp)
  # rendering the object with a JSON response.
  # GET /api/v1/restaurants >> api/v1/restaurants#index
  def index
    restaurant = Restaurant.all.order(created_at: :desc)
    render json: RestaurantSerializer.new(restaurant, options).serialized_json
  end

  # Creating Create method, using private restaurant_params method which validates allowed params to be created
  # in this case :name, :description, and :logo only.
  # POST /api/v1/restaurants >> api/v1/restaurants#create
  def create
    restaurant = Restaurant.create!(restaurant_params)
    if restaurant.save
      render json: restaurant
    else
      render json: { error: resturant.errors.messages }
    end
  end

  # Creating Update method, using private restaurant_params method which validates allowed params to be created
  # in this case :name, :description, and :logo only.
  # By the moment is not being setup in FrontEnd but here is the method in case you can to use it
  # PATCH  /api/v1/restaurants/:id(.:format) >> api/v1/restaurants#update
  # PUT    /api/v1/restaurants/:id(.:format) >> api/v1/restaurants#update
  def update
    restaurant = Restaurant.find_by(params[:id])
    if restaurant.update(restaurant_params)
      render json: RestaurantSerializer.new(restaurant, options).serialized_json
    else
      render json: { error: resturant.errors.messages }
    end
  end
  
  # Creating Show method, using the private restaurant method which uses ActiveRecord
  # find method to find restaurant with an specific :ID param, assigning it to @restaurant
  # returning a JSON response.
  # GET /api/v1/restaurants/:id(.:format) >> api/v1/restaurants#show
  def show
    restaurant = Restaurant.find_by(id: params[:id])
    render json: RestaurantSerializer.new(restaurant, options).serialized_json
  end

  # Creating Destroy method, in case the restaurant needs to be removed since the website is going to be 
  # to review restaurants is not necesario to keep a persistent record of it, used the safe navigation operator &.,
  # to avoid nil errors.
  # DELETE /api/v1/restaurants/:id(.:format) >> api/v1/restaurants#destroy
  def destroy
    restaurant&.destroy
    render json: { message: 'Restaurant deleted!' }
  end

  # Private methods to use in the controller only and setting permitted params
  # to the restaurant object, updated with Require, since Rails console was
  # returning Unpermitted parameter: :restaurant, that solved the error.
  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :logo)
  end

  def restaurant
    @restaurant ||= Restaurant.find(params[:id])
  end

  # Used For compound documents with fast_jsonapi
  def options
    @options ||= { include: %i[comments] }
  end

  def comment
    @restaurant ||= Restaurant.find(params[:id])
    comment = @restaurant.comments
  end

  # fast_jsonapi serializer // Pending
  def serializer(records, options = {})
  AirlineSerializer
    .new(records, options)
    .serialized_json
  end
end

