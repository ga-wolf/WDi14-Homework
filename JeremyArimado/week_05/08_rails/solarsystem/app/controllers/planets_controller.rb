class PlanetsController < ApplicationController
    def index
        @planets = Planet.all
    end

    def show
        @id = params[:id]
        @planet = Planet.find(params[:id])
    end

    def new

    end

    def create
        @name = params[:name];
        @orbit = params[:orbit];
        @moons = params[:moons];
        @diameter = params[:diameter];

        Planet.create({:name => @name, :orbit => @orbit, :moons => @moons, :diameter => @diameter});

        redirect_to "/planets"
    end

    def edit
        @id = params[:id]
        @planet = Planet.find(params[:id])
    end

    def update
        planet = Planet.find params[:id]
        planet.update ({'name' => params[:name], 'orbit' => params[:diameter], 'moons' => params[:moons] , 'diameter' => params[:diameter]});
        redirect_to "/planets/#{params[:id]}"
    end

    def destroy
        @id = params[:id]
        planet = Planet.find @id
        planet.destroy
        redirect_to "/planets"
    end

end
