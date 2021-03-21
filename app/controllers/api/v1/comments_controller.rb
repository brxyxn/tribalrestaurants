class Api::V1::CommentsController < ApplicationController
  # Create method requieres the restaurant ID and
  # will allow to POST username and description (comment)
  # POST /api/v1/comments
  def create
    comment = @restaurant.comments.create!(comment_params)
    if comment
      render json: comment
    else
      render json: comment.errors
    end
  end

  # Pending to create destroy method
  def destroy
  end

  # Private methods to pass params
  def comment_params
    params.require(:comment).permit(:username, :body, :restaurant_id)
  end
end
