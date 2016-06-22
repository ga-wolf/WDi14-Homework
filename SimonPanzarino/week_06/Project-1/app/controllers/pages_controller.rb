class PagesController < ApplicationController
  before_action :authenticate_user

  def home

  end

  private
    def authenticate_user
      redirect_to arts_path if @current_user.present?
    end
end
