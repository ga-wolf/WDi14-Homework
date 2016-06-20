class CreateDestinationsUsers < ActiveRecord::Migration
  def change
    create_table :destinations_users, :id => false do |t|
      t.integer :destination_id
      t.integer :user_id
    end
  end
end
