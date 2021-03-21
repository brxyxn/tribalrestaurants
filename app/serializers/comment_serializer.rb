class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :body, :restaurant_id
end
