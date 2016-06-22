class AddObligationIdToClauses < ActiveRecord::Migration
  def change
    add_column :clauses, :obligation_id, :integer
  end
end
