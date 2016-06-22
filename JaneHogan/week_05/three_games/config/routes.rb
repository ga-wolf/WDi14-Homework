Rails.application.routes.draw do

root :to => 'games#home'
get '/home' => 'games#home'
get 'magic' => 'games#magic'
get 'magic/:question' => 'games#answer'
get 'secret' => 'games#secret'
get 'rps' => 'games#rps'



end
