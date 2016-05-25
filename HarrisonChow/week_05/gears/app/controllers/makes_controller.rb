class MakesController < ApplicationController
  def index
    @makes = Make.all
  end

  def new
    @make = Make.new
  end

  def create
    make = Make.create make_params
    redirect_to make
  end

  def show
    @make = Make.find params[:id]
  end

  def edit
    @make = Make.find params[:id]
  end

  def update
    make = Make.find params[:id]
    make.update make_params
    redirect_to make
  end

  def destroy
    make = Make.find params[:id]
    make.destroy
    redirect_to makes_path
  end

  private
    def make_params
      params.require(:make).permit(:name, :country,:founded,:image)
    end

end
