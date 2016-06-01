Rails.application.routes.draw do

  resources :directors, :movies, :posts
  #
  # get '/directors' => 'directors#index'
  # get '/directors/new' => 'directors#new'
  # post '/directors' => 'directors#create'
  # get '/directors/:id' => 'directors#show'
  #
  # get '/directors/:id/edit' => 'directors#edit'
  # patch '/directors/:id' => 'directors#update'
  # put '/directors/:id' => 'directors#update'
  # post '/directors/:id' => 'directors#update'
  #
  # delete '/directors/:id/delete' => 'directors#destroy'
end
