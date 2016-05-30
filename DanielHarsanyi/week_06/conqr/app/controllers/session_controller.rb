class SessionController < ApplicationController

  before_action :authenticate, :only => [:login]

  #Show the login form
    def new
    end

  #Process the form when it is submitted
    def create
      @current_user = Client.find_by( :email => params[:email] )

      if @current_user.is_a?(Client)
          @current_user = Client.find_by( :email => params[:email] )
        else
          @current_user = Trainer.find_by( :email => params[:email] )
      end

      if @current_user.present? && @current_user.authenticate( params[:password] ) && @current_user.is_a?(Client)
        session[:user_id] = @current_user.id
        flash[:success] = "Successfully logged in as a client"
        redirect_to @current_user
      elsif @current_user.present? && @current_user.authenticate( params[:password] ) && @current_user.is_a?(Trainer)
        session[:user_id] = @current_user.id
        flash[:success] = "Successfully logged in as a trainer"
        redirect_to @current_user
      else
        flash[:error] = "Invalid email or password"
        redirect_to login_path
      end

    end

    def destroy
      session[:user_id] = nil
      flash[:success] = "Successfully logged out"
      redirect_to login_path
    end

    private
      def authenticate
        redirect_to home_path if @current_user
      end

end


# if @current_user.present? && @current_user.authenticate( params[:password] ) && @current_user.is_a?(Client)
#   session[:user_id] = @current_user.id
#   flash[:success] = "Successfully logged in as a client"
#   redirect_to @current_user
# elsif @current_user.present? && @current_user.authenticate( params[:password] ) && @current_user.is_a?(Trainer)
#   session[:user_id] = @current_user.id
#   flash[:success] = "Successfully logged in as a trainer"
#   redirect_to @current_user
# else
#   flash[:error] = "Invalid email or password"
#   redirect_to login_path
# end
