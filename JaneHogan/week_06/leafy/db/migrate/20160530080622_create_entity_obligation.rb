class CreateEntityObligation < ActiveRecord::Migration
  def change
    create_join_table :entities, :obligations, :id => false do |t|
      t.integer :entity_id
      t.integer :obligation_id
    end
  end
end
