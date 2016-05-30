class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :title
      t.text :description
      t.boolean :complete, :default => false
      t.integer :project_id

      t.timestamps null: false
    end
  end
end
