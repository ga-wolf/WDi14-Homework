User.destroy_all
 u1 = User.create :id => 1, :name =>"chandler", :email =>'chandler@ga.co', :password => 'chicken', :password_confirmation => 'chicken',:admin => true
 u2 = User.create :id => 2, :name => 'Phoebe', :email => 'phoebe@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
 u3 = User.create :id => 3, :name => 'Ratchel',:email => 'ratchel@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
 u4 = User.create :id => 4, :name => 'monica', :email => 'monica@ga.co', :password => 'chicken', :password_confirmation =>'chicken',:admin => true
 u5 = User.create :id => 5, :name => 'Joey',:email => 'joey@ga.co', :password =>'chicken', :password_confirmation => 'chicken',:admin => true
 puts "User count: #{User.all.count}"


Product.destroy_all

apple1 = Product.create :name =>"Apple", :category => 'fresh fruits', :description => 'fruits', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# apple2 = Product.create :store_id => 2 ,:name =>"Apple", :category => 'fresh fruits', :description => 'fruits', :price =>'2', :website =>'http://shop.coles.com.au/online/national/apples-pink-lady-prepacked'
# apple3 = Product.create :store_id => 3 ,:name =>"Apple", :category => 'fresh fruits', :description => 'fruits', :price =>'2', :website =>'http://www.aldi.com'

milk1 = Product.create :name =>"Milk", :category => 'dairy', :description => 'milk 1l', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# milk2 = Product.create :store_id => 2 ,:name =>"Milk", :category => 'dairy', :description => 'milk 1l', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# milk3 = Product.create :store_id => 3,:name =>"Milk", :category => 'dairy', :description => ' milk 1l', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'

eggs1 =Product.create :name =>"Egg", :category => 'poultry', :description => 'pack of 6', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# eggs2 =Product.create :store_id => 2 ,:name =>"Egg", :category => 'poultry', :description => 'pack of 6', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# eggs3 =Product.create :store_id => 3 ,:name =>"Egg", :category => 'poultry', :description => 'pack of 6', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'


bread1 = Product.create :name =>"Bread", :category => 'bakery', :description => 'wonder white', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# bread2 = Product.create :store_id => 2 ,:name =>"Bread", :category => 'bakery', :description => 'wonder white', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# bread3 = Product.create :store_id => 3 ,:name =>"Bread", :category => 'bakery', :description => 'wonder white', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'


butter1 = Product.create :name =>"Butter", :category => 'dairy', :description => 'western star', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# butter2 = Product.create :store_id => 2 ,:name =>"Butter", :category => 'dairy', :description => 'western star', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# butter3 = Product.create :store_id => 3,:name =>"Butter", :category => 'dairy', :description => 'western star', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'

carrot1 =  Product.create :name =>"carrot", :category => 'fresh vege', :description => 'fres vege', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# carrot2 =  Product.create :store_id => 2 ,:name =>"carrot", :category => 'fresh vege', :description => 'fresh vege', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# carrot3 =  Product.create :store_id => 3 ,:name =>"carrot", :category => 'fresh vege', :description => 'fresh vege', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'


yogurt1 =  Product.create :name =>"Yogurt", :category => 'dairy', :description => 'jalna', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# yogurt2 =  Product.create :store_id => 2 ,:name =>"Yogurt", :category => 'dairy', :description => 'jalna', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
# yogurt3 =  Product.create :store_id => 3,:name =>"Yogurt", :category => 'dairy', :description => 'jalna', :website =>'https://www.woolworths.com.au/Shop/Browse/fruit-veg/organic-fresh-fruit-veg?name=apple-pink-lady'
 puts "Product count:#{Product.all.count}"



 Store.destroy_all

store1 = Store.create :name => 'Woolworths', :location => 'Wentworthville',:phone_number => '(02) 8633 2916',:website =>'https://www.woolworths.com.au'
store2 = Store.create :name => 'Coles', :location => 'Westmead',:phone_number => '(02) 8633 2916',:website =>'https://www.cole.com.au'
store3 = Store.create :name => 'Aldi', :location => 'grand pacific highway',:phone_number => '(02) 8633 2916',:website =>'https://www.aldi.com.au'
 puts "Store count#{Store.all.count}"


ProductPrice.destroy_all

ProductPrice.create :product_id => apple1.id, :store_id => store1.id, price: 2
ProductPrice.create :product_id => apple1.id, :store_id => store2.id, price: 3
ProductPrice.create :product_id => apple1.id, :store_id => store3.id, price: 1

ProductPrice.create :product_id => milk1.id, :store_id =>store1.id, price: 1.5
ProductPrice.create :product_id => milk1.id, :store_id =>store2.id, price: 1
ProductPrice.create :product_id => milk1.id, :store_id =>store3.id, price: 2

ProductPrice.create :product_id => eggs1.id, :store_id =>store1.id, price: 4
ProductPrice.create :product_id => eggs1.id, :store_id =>store2.id, price: 3
ProductPrice.create :product_id => eggs1.id, :store_id =>store3.id, price: 2

ProductPrice.create :product_id => bread1.id, :store_id =>store1.id, price: 4
ProductPrice.create :product_id => bread1.id, :store_id =>store2.id, price: 5
ProductPrice.create :product_id => bread1.id, :store_id =>store3.id, price: 3

ProductPrice.create :product_id => butter1.id, :store_id =>store1.id, price: 5
ProductPrice.create :product_id => butter1.id, :store_id =>store2.id, price: 6
ProductPrice.create :product_id => butter1.id, :store_id =>store1.id, price: 8

ProductPrice.create :product_id => carrot1.id, :store_id =>store1.id, price: 1.5
ProductPrice.create :product_id => carrot1.id, :store_id =>store2.id, price: 1.95
ProductPrice.create :product_id => carrot1.id, :store_id =>store3.id, price: 2

ProductPrice.create :product_id => yogurt1.id, :store_id =>store1.id, price: 10
ProductPrice.create :product_id => yogurt1.id, :store_id =>store2.id, price: 12
ProductPrice.create :product_id => yogurt1.id, :store_id =>store3.id, price: 9

























ShoppingList.destroy_all
shoppingList1 = ShoppingList.create :user_id =>'1'
shoppingList2 = ShoppingList.create :user_id =>'2'
shoppingList3 = ShoppingList.create :user_id =>'3'
shoppingList4 = ShoppingList.create :user_id =>'4'
shoppingList5 = ShoppingList.create :user_id =>'5'
