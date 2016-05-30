class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :fetch_user

  private
    def fetch_user
      if Client.find_by( :id => session[:user_id] ).is_a?(Client)
          @current_user = Client.find_by( :id => session[:user_id] )
          session[:user_id] = nil unless @current_user
        else
          @current_user = Trainer.find_by( :id => session[:user_id] )
          session[:user_id] = nil unless @current_user
      end
    end
end
