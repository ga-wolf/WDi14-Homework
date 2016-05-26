# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  name       :text
#  artist_id  :integer
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ActiveRecord::Base
  belongs_to :album
  belongs_to :artist
end
