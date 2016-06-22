class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.text :password_digest

      t.boolean :admin, :default => false
      t.timestamps null: false
    end
  end
end
