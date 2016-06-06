#rails generate migration add_artist_id_to_works
class AddArtistIdToWorks < ActiveRecord::Migration
  def change
    add_column :works, :artist_id, :integer
    # add_column table name, column Title, type
  end
end
