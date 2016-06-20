class AddLongitudeAndLatitudeToDestinations < ActiveRecord::Migration
  def change
    add_column :destinations, :longitude, :float
    add_column :destinations, :latitude, :float
  end
end
