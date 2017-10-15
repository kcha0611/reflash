class CollectionPhoto < ApplicationRecord
  belongs_to :photo
  belongs_to :collection
end
