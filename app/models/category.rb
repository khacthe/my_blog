class Category < ApplicationRecord
  has_many :posts

  has_one_attached :image
end
