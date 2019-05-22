class Admin < ApplicationRecord
  has_many :posts

  devise :database_authenticatable, :trackable
end
