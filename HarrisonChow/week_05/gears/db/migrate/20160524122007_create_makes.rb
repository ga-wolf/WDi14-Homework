class CreateMakes < ActiveRecord::Migration
  def change
    create_table :makes do |t|
      t.text :name
      t.text :country
      t.date :founded
      t.text :image

      t.timestamps

      t.timestamps null: false
    end
  end
end
