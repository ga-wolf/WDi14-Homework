class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :fetch_user

  private
    def fetch_user
      if session[:type_of_person] == "Client"
        @current_user = Client.find_by( :id => session[:user_id] )
      elsif session[:type_of_person] == "Trainer"
        @current_user = Trainer.find_by( :id => session[:user_id] )
      end
      session[:user_id] = nil unless @current_user
    end
end

      # if Client.find_by_email( params[:email] ) == true
