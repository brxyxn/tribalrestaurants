class Api::V1::CommentsController < ApplicationController
  # Create method requieres the restaurant ID and
  # will allow to POST username and description (comment)
  # POST /api/v1/comments
  def create
    comment = restaurant.comments.new(comment_params)
    if comment.save
      render json: CommentSerializer.new(comment).serialized_json
    else
      render json: comment.errors
    end
  end

  # Pending to create destroy method
  # /api/v1/comments/:id 
  def destroy
    comment = Comment.find(comment_params)
    if comment.destroy
      head :no_content
    else
      render json: { error: comment.errors.messages }, status: 422
    end
  end

  private
  def restaurant
    @restaurant ||= Restaurant.find(params[:restaurant_id])
  end
  # Private methods to pass params
  def comment_params
    params.require(:comment).permit(:username, :body, :restaurant_id)
  end
end