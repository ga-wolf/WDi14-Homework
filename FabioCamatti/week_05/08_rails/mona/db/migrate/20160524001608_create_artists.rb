class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :period
      t.text :image

      t.timestamps # created_at, updated_at
    end
  end
end
