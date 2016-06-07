class SessionController < ApplicationController

  before_action :authenticate, :only => [:new]

  #Show the login form
    def new
    end

  #Process the form when it is submitted
    def create
      @current_user = Client.find_by( :email => params[:email] )
      if @current_user.nil?
          @current_user = Trainer.find_by( :email => params[:email] )
      end

      if @current_user.present? && @current_user.authenticate( params[:password] )
        session[:user_id] = @current_user.id
        if @current_user.class == Trainer
          session[:type_of_person] = "Trainer"
        else
          session[:type_of_person] = "Client"
        end
        flash[:success] = "Successfully logged in"
        redirect_to @current_user
      else
        flash[:error] = "Invalid email or password"
        redirect_to login_path
      end
    end

    def destroy
      session[:user_id] = nil
      flash[:success] = "Successfully logged out"
      redirect_to home_path
    end

    private
      def authenticate
        redirect_to home_path if @current_user
      end

end
