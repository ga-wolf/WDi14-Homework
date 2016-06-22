class CreateEntities < ActiveRecord::Migration
  def change
    create_table :entities do |t|
      t.text :name
      t.integer :ACN
      t.text :address
      t.text :contact
      t.integer :contact_number
      t.text :contact_email

      t.timestamps null: false
    end
  end
end
