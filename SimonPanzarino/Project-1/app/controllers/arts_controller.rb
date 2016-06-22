class ArtsController < ApplicationController
  before_action :authenticate_user

  def index
    @your_puzzles = Art.where(:user_id => @current_user)
    @puzzles = Art.all
    @saves = SaveState.where(:user_id => @current_user)
  end

  def show
    @art = Art.find params[:id]
    if SaveState.where(:user_id => @current_user, :name => @art.name).exists?
      gon.artwork = SaveState.where(:user_id => @current_user, :name => @art.name).first
      @save = gon.artwork
    else
      new_puzzle = @art.dup
      dupCells = new_puzzle.cells

      SaveState.create(:user_id => @current_user.id, :name => new_puzzle.name, :cells => dupCells, :finished => false, :art_id => @art.id )
      # binding.pry
      gon.artwork = SaveState.where(:user_id => @current_user, :name => new_puzzle.name).first
    end
  end

  def new
   @art = Art.new
   @user = User.find @current_user
  end

  def create
    @cells = []
    @dimensions = params[:art][:cells].to_i
    @dimensions.times do |i|
      @cells << []
      @dimensions.times do
        @cells[i] << [false, false, false]
      end
    end

    Art.create(:name => params[:art][:name], :cells => @cells, :user_id => @current_user.id)
    redirect_to arts_path
  end

  def edit
    @puzzle = Art.find params[:id]
    gon.artwork = @puzzle
  end

  def update

    # render :json => {  }
    @puzzle = Art.find params[:id]
    parsed_data = JSON.parse( params[:data_value] )
    Art.update(params[:id], :cells => parsed_data )

    render :json => { :success => true }
  end

  def save

    @puzzle_state = SaveState.find params[:id]
    parsed_data = JSON.parse( params[:data_value] )
    SaveState.update(params[:id], :cells => parsed_data )

    render :json => { :success => true }
  end

  def win

    @puzzle_state = SaveState.find params[:id]
    SaveState.update(params[:id], :finished => params[:data_value] )

    render :json => { :success => true }
  end

  def destroy
    art = Art.find params[:id]
    art.destroy

    redirect_to arts_path
  end

  private
    def puzzle_params
      params.require(:art).permit(:name, :cells, :user_id)
    end

    def authenticate_user
      flash[:error] = "You need to be logged in for that" unless @current_user.present?
      redirect_to home_path unless @current_user.present?
    end
end
