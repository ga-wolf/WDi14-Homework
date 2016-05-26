class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|

      t.text :name
      t.text :image
      t.text :founded
      t.text :history


      t.timestamps null: false
    end
  end
end
