class AddLanAndLonToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :lat, :float
    add_column :spots, :lng, :float
  end
end
