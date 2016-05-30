class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|

        t.text :location
        t.datetime :date
        t.integer :client_id
        t.integer :trainer_id
        t.integer :price_id
        t.integer :rating_id

    end
  end
end
