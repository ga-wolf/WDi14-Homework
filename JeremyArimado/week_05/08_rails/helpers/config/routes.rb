Rails.application.routes.draw do

  root 'pages#home'

  get('/random' => 'pages#random', :as => 'random');
  get('/number/:number' => 'pages#single_number', :as => 'single_number');
  get('/number/:x/:y' => 'pages#two_number', :as => 'two_number');

  get('/date' => 'pages#date', :as => 'date')

  get('/pages/numbers' => 'pages#numbers', :as => 'numbers')
                                    # this accepts another parameter with a hash rocket
                                    # explicitly set the numbers path
                                    # i actually have no idea x

  get '/text' => 'pages#text', :as => 'text'

  get '/railsassets' => 'pages#railsassets', :as => 'assets'

  get '/url' => 'pages#url', :as => 'url'

  get '/home' => 'pages#home', :as => 'home'


end
