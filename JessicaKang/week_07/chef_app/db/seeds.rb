Chef.destroy_all
Chef.create :name => "Gordon Ramsay", :nationality => "British", :dob "1972/05/10", :cooking_since => "1992", :image => "https://thebrandbuilder.files.wordpress.com/2011/08/gordon-01.jpg"

Dish.destroy_all

Dish.create :name => "Beef Wellington", :origin => "England", :method => "Roasted", :difficulty => "advanced", :image => "http://cdn.recipes100.com/v/5ba1628cdf9ce0cd536f0d45f5eb6c18.jpg"
