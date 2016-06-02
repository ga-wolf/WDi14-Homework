class CreateBands < ActiveRecord::Migration
  def change
    create_table :bands do |t|
      t.text :name
      t.text :members
      t.text :image

      t.timestamps null: false
    end
  end
end
