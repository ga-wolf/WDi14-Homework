class CreateDirectors < ActiveRecord::Migration
  def change
    create_table :directors do |t|
        t.text      'name'
        t.text      'img'
        t.datetime  'created_at'
        t.datetime  'updated_at'
    end
  end
end
