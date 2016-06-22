class CreateObligations < ActiveRecord::Migration
  def change
    create_table :obligations do |t|
      t.text :agreement_name
      t.integer :agreement_date
      t.integer :created_at
      t.string :updated_at

      t.timestamps null: false
    end
  end
end
