Rails.application.routes.draw do

  resources :shopping_lists
  resources :shopping_entries
  resources :shopping_lists
    resources :products, :users, :only => [:new, :create, :index, :update]
    get '/users/edit' => 'users#edit', :as => 'edit_user'

    root 'pages#index'

    get '/login' => 'session#new', :as => 'login'
    post '/login' => 'session#create'
    delete '/login' => 'session#destroy', :as => 'logout'
    post '/confirm' => 'shopping_lists#confirm'


end
