class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :logo

  has_many :comments
end
