class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :user_name, unique: true, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, unique: true, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :password
      t.timestamps
    end
  end
end
