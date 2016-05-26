Make.destroy_all
Make.create :name => "Nissan", :country => "Japan", :founded => "1933/12/26", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nissan-logo.svg/2000px-Nissan-logo.svg.png"

Car.destroy_all
Car.create :model => "GT-R", :year => "2016", :image => "http://www.nissanusa.com/content/dam/nissan/vehicles/2016/gt-r/overview/next-steps/2016-nissan-gtr-sports-car-urban-night-scene-build.jpg", :description => "The 2016 GT-R develops an additional 5 horsepower in non-Nismo versions thanks to electronic refinements. In Premium trim, 20-spoke wheels replace the previous 10-spoke design. A 45th Anniversary Gold Edition is added to the lineup to celebrate 45 years of worldwide GT-R production. The Track Edition version has been dropped.",:make_id=> "1"
