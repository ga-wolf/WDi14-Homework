Rails.application.routes.draw do

    get '/login' => 'session#new', :as => 'login'
    post '/login' => 'session#create'


    delete '/login' => 'session#destroy'

    resources(:users, :only => [:new, :create, :index, :update]);

    get '/users/edit' => 'users#edit', :as => 'edit_users'
    
end
