class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.integer :user_id
      t.integer :collection_id
      t.integer :likes, default: 0
      t.timestamps
    end
  end
end
