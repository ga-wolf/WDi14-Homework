class ModelsController < ApplicationController
  def index
    @models = Model.all
  end

  def show
    @model = Model.find params[:id]
  end

  def edit
    @model = Model.find params[:id]
  end

  def update
    model=Model.find params[:id]
    model.update model_params
    redirect_to model
  end

  def new

    @model = Model.new
  end

  def create

    model = Model.create model_params
    redirect_to model
  end


def destroy
  model=Model.find params[:id]
model.destroy
redirect_to model


end

    private
    def model_params
      #strong params, only cecerive the informatio n that we want
      params.require(:model).permit(:name, :dob, :image, :price, :brand_id)
    end


end
