class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.text :title
      t.text :image
      t.text :equipment_list
      t.text :description

      t.timestamps null: false
    end
  end
end
