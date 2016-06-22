class CreateArts < ActiveRecord::Migration
  def change
    create_table :arts do |t|
      t.string :name
      t.text :cells, array: true
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
