class Photo < ApplicationRecord
  validates :url, :user, presence: true

  acts_as_taggable

  belongs_to :user
  has_many :collection_photo
  has_many :collections, through: :collection_photo
  has_many :likes
end
