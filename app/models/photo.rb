class Photo < ApplicationRecord
  validates :url, presence: true

  belongs_to :user
  belongs_to :collection, optional: true
end
