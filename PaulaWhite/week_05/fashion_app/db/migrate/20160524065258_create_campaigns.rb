class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.text :model
      t.text :photographer
      t.text :image
      t.integer :magazine_id

      t.timestamps
    end
  end
end
