class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.date :dob
      t.string :nationality
      t.boolean :alive
      t.string :image

      t.timestamps null: false
    end
  end
end
