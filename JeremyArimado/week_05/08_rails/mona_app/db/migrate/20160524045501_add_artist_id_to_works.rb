class AddArtistIdToWorks < ActiveRecord::Migration
  def change
      add_column :works, :artist_id, :integer
      #add_column tablename and other stuff 
  end
end
