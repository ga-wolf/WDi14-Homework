class CreateTrainers < ActiveRecord::Migration
  def change
    create_table :trainers do |t|
      t.text :name
      t.text :qualification
      t.integer :fitness_australia_id
      t.text :speciality
      t.text :location
      t.text :image

      t.timestamps
    end
  end
end

# - name
# - qualification
# - fitness Australia ID
# - specialties
# - location
# - cost per hour
# - training style
