class CreateCollectionPhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :collection_photos do |t|
      t.integer :collection_id
      t.integer :photo_id
      t.timestamps
    end
  end
end
