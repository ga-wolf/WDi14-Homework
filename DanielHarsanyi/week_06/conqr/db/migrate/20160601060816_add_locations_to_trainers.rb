class AddLocationsToTrainers < ActiveRecord::Migration
  def change
    add_column :trainers, :latitude, :float
    add_column :trainers, :longitude, :float
  end
end
