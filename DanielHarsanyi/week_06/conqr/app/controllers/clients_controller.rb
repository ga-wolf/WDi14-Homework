class ClientsController < ApplicationController
  def index
      @clients = Client.all
  end

  def new
      @client = Client.new
  end

  def show
      @client = Client.find params[:id]
  end

  def create
    @client = Client.create client_params

    if @client.save
      redirect_to client_path(@client.id)
    else
      render :new
    end
  end

  def edit
    @client = Client.find params[:id]
  end

  def update
    client = Client.find params[:id]

    if client.authenticate( params[:client][:password] )
        client.update client_params
      else
        flash[:error] = "Update not saved. Password incorrect"
    end

    redirect_to client_path
  end

  def destroy
    client = Client.find params[:id]
    client.destroy

    redirect_to clients_path
  end


  private
    def client_params
      params.require(:client).permit(:name, :email, :password, :password_confirmation, :training_interest_areas, :preferred_training_style, :image)
    end

end

# t.text :name
# t.text :email
# t.text :password_digest
# t.text :training_interest_areas
# t.text :preferred_training_style
# t.inet :current_location
# t.text :preferred_location
# t.boolean :admin, :default => "false"
# t.text :image
