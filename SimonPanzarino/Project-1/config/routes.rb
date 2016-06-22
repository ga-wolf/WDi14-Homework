Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/home' => 'pages#home', :as => 'home'

  get '/login' => 'session#new', :as => 'login'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy', :as => 'logout'

  put '/art/:id/save' => 'arts#save'
  put '/art/:id/win' => 'arts#win'


  resources :arts
  resources :users

  delete 'arts/:id/delete' => 'arts#destroy', :as => 'destroy_art'

end
