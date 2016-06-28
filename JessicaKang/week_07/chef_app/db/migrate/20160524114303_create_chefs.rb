class CreateChefs < ActiveRecord::Migration
  def change
    create_table :chefs do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :cooking_since
      t.text :image
      t.timestamps null: false
    end
  end
end
