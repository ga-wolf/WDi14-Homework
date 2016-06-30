class DishesController < ApplicationController

  def index
    @dishes = Dish.all
  end

  def new
    @dish = Dish.new
  end

  def create
    dish = Dish.create dish_params

    redirect_to dish
  end

  def show
    @dish = Dish.find params[:id]
  end

  def edit
    @dish = Dish.find params[:id]
  end

  def update
    dish = Dish.find params[:id]
    dish.update dish_params

    redirect_to dish # Redirecting means a GET request - show this particular dish
  end

  def destroy
    dish = Dish.find params[:id]
    dish.destroy

    redirect_to dishes_path
  end

  private
    def dish_params
      params.require(:dish).permit(:name, :origin, :method, :difficulty, :image, :chef_id)
    end


end
