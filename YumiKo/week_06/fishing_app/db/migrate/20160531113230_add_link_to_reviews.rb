class AddLinkToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :link, :text
  end
end
