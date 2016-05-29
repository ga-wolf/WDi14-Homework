class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name, null: false
      t.text :email, null: false
      t.text :password_digest


      t.timestamps null: false
    end
  end
end
