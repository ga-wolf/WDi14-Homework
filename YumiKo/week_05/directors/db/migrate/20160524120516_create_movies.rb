class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.text :title
      t.text :poster
      t.text :year
      t.text :genre
      t.integer :running_time
      t.text :description
    end
  end
end
