class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :email
      t.text :password_digest
      t.boolean :admin, :defaul => false
      t.text :image

      t.timestamps null: false
    end
  end
end
