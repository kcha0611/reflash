class Collection < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user
  has_many :collection_photo
  has_many :photos, through: :collection_photo
end
