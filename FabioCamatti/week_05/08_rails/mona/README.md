# Basic Rails Application

- ` rails new mona_app`
- `cd mona_app`
- Add gems into development group in the Gemfile
  - `gem 'pry-rails'`
  - 'bundle' or ' bundle install'
  - 'rails s ' or ' rails server'
  ---
  ## Time for CRUD stuff
   - Map out the database
    - Associations
    - Columns and types
    - Timestamps!

  - If you want the database to start with things...
      - Make your models - ` rails generate model Artist  `
      - 

   - Repeat as necessary
    - add ` resources :artists `
    - visit localhost:3000/rails/info/routes
    - Start with READ steps - Error Driven Development EDD
      - Controllers
        - def index; @artists = Artist.all; end;
        - 'rails generate model Artist --skip '
        - Fill the migration file with everything that is necessary
        - ' rake db:migrate ' - terminal
        - Look at db/schema.rb to make sure it worked
      - Views
        - ' mkdir app/views/artists '
        - ' touch app/views/index.html.erb '
        - Write whatever is necessary (typically that is an each loop for the index page - make sure to link to the show page from here!)
        - Controllers
         - def show; @artist = Artist.find params[:id]; end;
         - Views
          - ` touch app/views/show.html.erb `
          - Write whatever is necessary (show all the details). This page typically includes links for the edit and delete
          - ` <%= link_to ("Edit Artist", "/artists/:id/edit") %>`
