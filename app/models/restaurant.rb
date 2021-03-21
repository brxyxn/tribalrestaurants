class Restaurant < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true

    has_many :comments
    # Another way could be:
    # has_many :comments, dependent: :destroy
end
