Rails.application.routes.draw do



  root 'pages#home'
  get '/pages' => "pages#show"

  # get 'pages#your_obs'




    get '/login' => 'session#new', :as => 'login'
    post '/login' => 'session#create'
    delete '/login' => 'session#destroy', :as => 'logout'

  resources :users, :only => [:new, :create, :index, :update]
  get '/users/edit' => 'users#edit', :as => 'edit_user'
  resources :obligations
  resources :entities
  resources :pages
  resources :tasks
  resources :clauses


end
