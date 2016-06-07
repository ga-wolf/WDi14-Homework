class CreateTrainers < ActiveRecord::Migration
  def change
    create_table :trainers do |t|

      t.text :name
      t.text :email
      t.text :password_digest
      t.integer :fitness_australia_id
      t.boolean :approved_status, :default => "false"
      t.text :qualifications
      t.text :training_specialty_areas
      t.text :training_style
      t.inet :current_location
      t.text :preferred_location
      t.integer :price
      t.integer :rating
      t.text :image

    end
  end
end
