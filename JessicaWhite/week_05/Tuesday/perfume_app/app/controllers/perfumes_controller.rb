class PerfumesController < ApplicationController

  def index
    @perfumes = Perfume.all
  end

  def show
    @perfume = Perfume.find params[:id]
  end

  def new
    @perfume = Perfume.new
  end

  def create
    perfume = Perfume.create perfume_params

    redirect_to perfume
  end

  def edit
    @perfume = Perfume.find params[:id]
  end

  def update
    perfume = Perfume.find params[:id]
    perfume.update perfume_params

    redirect_to perfume
  end

  def destroy
    perfume = Perfume.find params[:id]
    perfume.destroy

    redirect_to perfumes_path
  end


  private

  def perfume_params
    params.require(:perfume).permit(:perfume_name, :image, :year, :top_notes, :mid_notes, :base_notes, :description, :house_id)
  end

end
