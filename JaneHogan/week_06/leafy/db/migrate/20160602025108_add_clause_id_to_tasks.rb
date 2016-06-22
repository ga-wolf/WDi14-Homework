class AddClauseIdToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :clause_id, :integer
  end
end
