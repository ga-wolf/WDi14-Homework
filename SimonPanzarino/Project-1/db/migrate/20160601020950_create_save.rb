class CreateSave < ActiveRecord::Migration
  def change
    create_table :saves do |t|
      t.integer :user_id
      t.integer :art_id
      t.text :name
      t.text :cells, array: true
      t.boolean :finished
    end
  end
end
