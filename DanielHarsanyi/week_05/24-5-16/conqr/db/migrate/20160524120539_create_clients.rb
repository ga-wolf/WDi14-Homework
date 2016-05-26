class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.text :name
      t.text :interests
      t.text :style
      t.text :location
      t.text :image

      t.timestamps
    end
  end
end


# - name
# - interest areas
# - preferred training style
# - location
# - trainer_id
