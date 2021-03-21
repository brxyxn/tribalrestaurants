class Api::V1::RestaurantsController < ApplicationController
  # Creating Index method, this returns all Restaurants ordered desc based on created date (timestamp)
  # rendering the object with a JSON response.
  def index
    restaurant = Restaurant.all.order(created_at: :desc)
    render json: restaurant
  end

  # Creating Create method, using private restaurant_params method which validates allowed params to be created
  # in this case :name, :description, and :logo only.
  def create
    restaurant = Restaurant.create!(restaurant_params)
    if restaurant
      render json: restaurant
    else
      render json: restaurant.errors
    end
  end
  
  # Creating Show method, using the private restaurant method which uses ActiveRecord
  # find method to find restaurant with an specific :ID param, assigning it to @restaurant
  # returning a JSON response.
  def show
    @restaurant ||= Restaurant.find(params[:id])
    comment = @restaurant.comments.all
    if restaurant
      render json: restaurant
    else
      render json: restaurant.errors
    end
  end

  # Creating Destroy method, in case the restaurant needs to be removed since the website is going to be 
  # to review restaurants is not necesario to keep a persistent record of it, used the safe navigation operator &.,
  # to avoid nil errors.
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

  def comment
    @restaurant ||= Restaurant.find(params[:id])
    comment = @restaurant.comments
  end
end

