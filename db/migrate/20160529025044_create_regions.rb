class CreateRegions < ActiveRecord::Migration
  def change
    create_table :regions do |t|
      t.text :name, null: false
      t.text :address, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
