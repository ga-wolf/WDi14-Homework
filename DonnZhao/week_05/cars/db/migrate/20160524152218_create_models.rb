class CreateModels < ActiveRecord::Migration
  def change
    create_table :models do |t|
      t.text :name
      t.date :dob
      t.text :image
      t.text :price
      t.timestamps null: false
    end
  end
end
