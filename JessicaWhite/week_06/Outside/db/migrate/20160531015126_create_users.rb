class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :username
      t.text :email
      t.text :image
      t.text :name
      t.text :password_digest

      t.timestamps null: false
    end
  end
end
