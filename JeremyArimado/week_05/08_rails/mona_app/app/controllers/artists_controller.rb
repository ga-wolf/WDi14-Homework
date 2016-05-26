      #needs to be same singular/plural as route
class ArtistsController < ApplicationController
    # entry method you defined
    def index
        @artists = Artist.all #Active record reference and all method - referencing in the models/artist rb
    end

    def show
        @artist = Artist.find params[:id]
    end

    def new
        @artist = Artist.new
    end

    def create
        artist = Artist.create artist_params
        redirect_to "/artists/#{artist.id}"
    end

    def edit
        @artist = Artist.find params[:id]
    end

    def update
        artist = Artist.find params[:id]
        artist.update artist_params
        redirect_to "/artists/#{artist.id}"
    end

    def destroy
        artist = Artist.find params[:id]
        artist.destroy
        redirect_to "/artists"
    end

    private
        def artist_params
            params.require(:artist).permit(:name, :image, :dob, :nationality, :period);
        end

end
