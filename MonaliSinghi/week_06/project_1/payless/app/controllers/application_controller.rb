class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # This will run on every page
    before_action :fetch_user

  private
  def fetch_user
    # Try and find a current_user if the user id is stored in the magic session hash
    @current_user = User.find_by(:id => session[:user_id]) if session[:user_id].present?
    # If there was a user id stored in the session hash but it couldn't find a user, set the user_id to be nil
    session[:user_id] = nil unless @current_user.present?
  end
end
