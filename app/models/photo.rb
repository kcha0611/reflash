class Photo < ApplicationRecord
  validates :url, :user, presence: true

  acts_as_taggable

  belongs_to :user
  belongs_to :collection, optional: true
end
