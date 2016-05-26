class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :cover
      t.text :language
      t.text :pages
      t.date :year

    end
  end
end
