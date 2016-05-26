Rails.application.routes.draw do

  get '/' => 'allagmes#index'

  get '/eightball' => 'eightball#eb'

  get '/randomnumber' => 'randomnumber#rn'

end
