Rails.application.routes.draw do
  get '/home' => 'pages#home', :as => 'home'

  resources :clients, :trainers, :sessions

  get '/findtrainer' => 'pages#find', :as => 'find_trainer'
  post '/findtrainer' => 'trainers#choose', :as => 'choose_trainer'

  get '/login' => 'session#new', :as => 'login'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy', :as => 'logout'

end
