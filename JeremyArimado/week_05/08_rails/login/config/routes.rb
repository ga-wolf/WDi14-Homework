Rails.application.routes.draw do
  get 'session/new'

  resources(:users)
  get "/login" => 'session#new', :as => 'login'
  post "/login" => "session#create"
  delete "/logout" => "session#destroy", :as => 'logout'
end
