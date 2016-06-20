class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.text :address
      t.text :country
      t.text :terrain
      t.text :image
      t.text :description
      t.text :title

      t.timestamps null: false
    end
  end
end
