Rails.application.routes.draw do

  get '/authors' => 'authors#index'

  get '/authors/new' => 'authors#new'

  get '/authors/:id' => 'authors#show'

  get '/authors/:id/edit' => 'authors#edit'
  patch '/authors/:id' => 'authors#update'

  post '/authors' => 'authors#create'

  delete '/authors/:id/delete' => 'authors#destroy'
  resource :authors


end
