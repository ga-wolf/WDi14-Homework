class CreateMagazines < ActiveRecord::Migration
  def change
    create_table :magazines do |t|
      t.text :name
      t.text :image

      t.timestamps
    end
  end
end
