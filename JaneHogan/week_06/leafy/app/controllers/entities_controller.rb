class EntitiesController < ApplicationController


  def index
    @entities = Entity.all
  end

  def show
    @entity = Entity.find(params[:id])
  end

  def new
      @entity = Entity.new
  end

  def create
    @entity = Entity.new entity_params
    @entity.save
    redirect_to @entity
  end

  def edit
  end

  def update
  end


  private
    def entity_params
      params.require(:entity).permit(:name, :ACN, :address, :contact, :contact_number, :contact_email)
    end

end
