class Photo < ApplicationRecord
  validates :url, presence: true

  belongs_to :user
end
