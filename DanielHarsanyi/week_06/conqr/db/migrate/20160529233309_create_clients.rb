class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|

    t.text :name
    t.text :email
    t.text :password_digest
    t.text :training_interest_areas
    t.text :preferred_training_style
    t.inet :current_location
    t.text :preferred_location
    t.boolean :admin, :default => "false"
    t.text :image

    end
  end
end
