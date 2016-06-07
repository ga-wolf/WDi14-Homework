class Artist < ActiveRecord::Base # search for tablename of artists
    has_many :works
end
