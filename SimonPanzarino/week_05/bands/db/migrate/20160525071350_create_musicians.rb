class CreateMusicians < ActiveRecord::Migration
  def change
    create_table :musicians do |t|
      t.text :name
      t.text :instrument
      t.text :image

      t.timestamps null: false
    end
  end
end
