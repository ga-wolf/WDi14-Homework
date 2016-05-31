Rails.application.routes.draw do
  root "pages#home"

  resources :users, :projects, :tasks

  get "/tasks/new/:p_id" => 'tasks#new'
  get "/projects/:id/adduser/:u_id" => 'projects#adduser'

  get "/login" => 'session#new', :as => 'login'
  post "/login" => 'session#create'
  delete "/logout" => 'session#destroy', :as => 'logout'


end
