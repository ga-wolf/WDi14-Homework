class ClientsController < ApplicationController

  def index
    @clients = Client.all
  end

  def show
    @client = Client.find params[:id]
  end

  def edit
    @client = Client.find params[:id]
  end

  def update
    client = Client.find params[:id]
    client.update client_params

    redirect_to client
  end

  def new
    @client = Client.new
  end

  def create
    client = Client.create client_params

    redirect_to client
  end

  def destroy
    client = Client.find params[:id]
    client.destroy

    redirect_to clients_path

  end

  private
    def client_params
      params.require(:client).permit(:name, :interests, :style, :location, :image, :trainer_id)
    end
end
