Book.destroy_all

Book.create :title => "John Carter of Mars", :author => "Edgar Rice Burroughs", :year => "1911", :genre => "Science Fiction", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Princess_of_Mars_large.jpg/220px-Princess_of_Mars_large.jpg"

Author.destroy_all

Author.create :name => "Pablo Cuelho", :country => "Brazil", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Paulo_Coelho_nrkbeta.jpg/220px-Paulo_Coelho_nrkbeta.jpg"
