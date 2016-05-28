class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.text :name
      t.text :address
      t.text :description
      t.integer :reveiw_id

      t.timestamps null: false
    end
  end
end
