class CreateSaveStates < ActiveRecord::Migration
  def change
    create_table :save_states do |t|
      t.integer :user_id
      t.integer :art_id
      t.text :name
      t.text :cells, array: true
      t.boolean :finished

      t.timestamps null: false
    end
  end
end
