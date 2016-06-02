class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.text :name
      t.text :year
      t.text :image
    end
  end
end
