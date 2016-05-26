class DirectorsController < ApplicationController
    def index
        @directors = Director.all
    end

    def show
        @director = Director.find(params[:id])
    end

    def new

    end

    def create
        # insert into DB
    end

    private
        def director_params

        end
end
