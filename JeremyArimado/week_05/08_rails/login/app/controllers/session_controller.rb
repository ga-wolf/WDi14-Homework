class SessionController < ApplicationController
  def new
  end
    def create
        # create stuff
        user = User.find_by(:email => params[:email])

        if user.present? && user.authenticate(params[:password])
          session[:user_id] = user.id
          flash[:success] = "user found"
          redirect_to(user);
        else
          flash[:error] = "invalid"
        end
    end

    def destroy
        session[:user_id] = nil;
        flash[:success] = "Sucessfully logged out"
        redirect_to(login_path);
    end

end
