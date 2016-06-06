class CreateDirectors < ActiveRecord::Migration
  def change
    create_table :directors do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :image
      t.timestamps

    end
  end
end
