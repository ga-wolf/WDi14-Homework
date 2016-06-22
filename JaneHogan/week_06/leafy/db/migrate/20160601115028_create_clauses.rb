class CreateClauses < ActiveRecord::Migration
  def change
    create_table :clauses do |t|
      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
