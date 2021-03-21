class Comment < ApplicationRecord
    validates :username, presence: true
    validates :body, presence: true

    belongs_to :restaurant
end
