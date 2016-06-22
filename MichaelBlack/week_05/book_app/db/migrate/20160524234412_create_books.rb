class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :series
      t.integer :volume
      t.date :year
      t.string :image

      t.timestamps null: false
    end
  end
end
