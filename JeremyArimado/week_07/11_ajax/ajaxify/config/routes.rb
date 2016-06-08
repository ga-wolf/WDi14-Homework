Rails.application.routes.draw do
  root 'pages#index'
  get '/index', :to => "pages#index"
  get '/lotto_numbers', :to => "pages#lotto_numbers"
  get '/uptime', :to => "pages#uptime"
  get '/info', :to => "pages#info"
end
