class PeopleController < ApplicationController


    def new
    end
    #
    def create
      render plain: params[:article].inspect
    #   @people = People.new(params[:people])
    #
    #   @people.save
    #   redirect_to @people

    end




end
