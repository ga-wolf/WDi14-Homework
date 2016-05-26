class SessionController < ApplicationController

    before_action :authenticate_user, :only => [:new]

    def new
    end

    def create

        # @user = User.find_by(:email => params[:email]);
        #
        # if(@user.present? && @user.authenticate(params[:password]))
        #     flash[:sucess] = "SUCCESS LOGIN LOL"
        #     redirect_to(login_path)
        # else
        #     flash[:error] = "Your password or email was incorrect"
        # end

        user = User.find_by(:email => params[:email]);

        if(user.present? && user.authenticate(params[:password]))
            flash[:success] = "SUCCESS";
            session[:user_id] = user.id;
            redirect_to(login_path);
        else
            flash[:error] = 'something went wrong';
            session[:user_id] = nil;
            redirect_to(login_path);
        end

    end

    def destroy
        session[:user_id] = nil;
        redirect_to(login_path);
    end


    private
        def authenticate_user
            redirect_to(users_path) if @current_user.present?
            # flash[:error] = "You are already logged in lol" if @current_user.present?
        end

end
