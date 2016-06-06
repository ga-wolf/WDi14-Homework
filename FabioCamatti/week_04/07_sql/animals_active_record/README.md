# Approach

- Create server and include your gems (sqlite3, pry, sinatra, sinatra/reloader)
- Set up a home route ( get '/' do ... end )
- Set up your layout.erb and make sure you can load views/home.erb into that layout.erb
- Create a database.db file
- Create an SQL file that creates tables for you
- Import the SQL file into the database.db (sqlite3 database.db < animals.sql)
- sqlite3 database.db
  - .schema

## READ STEP

- Figure out how to show all mountains - mountains_index.erb
- Figure out how to show one mountain - mountains_show.erb
- Figure out how to delete a mountain and add a delete button in the mountains_show.erb
- Create a new mountain
  - Have a page that shows a form
  - You have a route that deals with that forms submission, and redirects you to show the new item
- Edit a mountain
  - Have a page that shows the form, making sure to pre-fill the values
  - You have a route that deals with that form when it is submitted, and redirects you somewhere
