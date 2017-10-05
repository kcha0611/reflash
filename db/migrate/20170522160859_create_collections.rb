class CreateCollections < ActiveRecord::Migration[5.0]
  def change
    create_table :collections do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.text :description
      t.timestamps
    end
  end
end
