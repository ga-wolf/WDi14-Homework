class CreateBrands < ActiveRecord::Migration
  def change
    create_table :brands do |t|
      t.text :name
      t.text :headquarters
      t.text :web
      t.text :image
      t.timestamps null: false
    end
  end
end
