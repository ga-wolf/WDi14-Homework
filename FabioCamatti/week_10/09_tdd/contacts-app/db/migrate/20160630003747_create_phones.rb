class CreatePhones < ActiveRecord::Migration
  def change
    create_table :phones do |t|
      t.integer :contact_id
      t.string :phone
      t.string :phone_type

      t.timestamps null: false
    end
  end
end
