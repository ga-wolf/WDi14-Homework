class MagazinesController < ApplicationController

def index
   @magazines = Magazine.all
  end

def show
   @magazine = Magazine.find params[:id]
  #  raise 'hell'
 end

 def new
  @magazine = Magazine.new
end

def create
  magazine = Magazine.create magazine_params

  redirect_to "/magazines/#{magazine.id}"
end

def edit
  @magazine = Magazine.find params[:id]
end

def update
  magazine = Magazine.find params[:id]
  magazine.update magazine_params

  redirect_to magazine # Redirecting means to GET request - show this particular work
end

def destroy
  magazine = Magazine.find params[:id]
  magazine.destroy

  redirect_to magazines_path
end



private
    def magazine_params
      params.require(:magazine).permit(:name, :image)
    end

 end
