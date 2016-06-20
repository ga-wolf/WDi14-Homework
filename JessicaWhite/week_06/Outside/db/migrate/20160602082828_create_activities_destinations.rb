class CreateActivitiesDestinations < ActiveRecord::Migration
  def change
    create_table :activities_destinations, :id => false do |t|
      t.integer :activity_id
      t.integer :destination_id
    end
  end
end
