class CreateMixtapesSongs < ActiveRecord::Migration
  def change
    create_table :mixtapes_songs do |t|
      t.integer :mixtape_id
      t.integer :song_id

    end
  end
end
