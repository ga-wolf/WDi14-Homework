class CreatePerfumes < ActiveRecord::Migration
  def change
    create_table :perfumes do |t|
      
      t.text :perfume_name
      t.text :image
      t.text :year
      t.text :top_notes
      t.text :mid_notes
      t.text :base_notes
      t.text :description

      t.timestamps null: false
    end
  end
end
