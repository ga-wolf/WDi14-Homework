class RemoveAvatarFromReviews < ActiveRecord::Migration
  def change
    remove_column :reviews, :avatar
  end
end
