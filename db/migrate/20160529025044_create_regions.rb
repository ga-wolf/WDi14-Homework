class CreateRegions < ActiveRecord::Migration
  def change
    create_table :regions do |t|
      t.text :name
      t.text :address
      t.text :description

      t.timestamps null: false
    end
  end
end
