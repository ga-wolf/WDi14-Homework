class ShoppingListsController < ApplicationController
  before_action :set_shopping_list, only: [:show, :edit, :update, :destroy]

  # GET /shopping_lists
  # GET /shopping_lists.json
  def index
    @shopping_lists = ShoppingList.all
  end

  # GET /shopping_lists/1
  # GET /shopping_lists/1.json
  def show
    @shopping_entries = ShoppingEntry.where :shopping_list_id => @shopping_list.id
    @products = Product.all
  end

  # GET /shopping_lists/new
  def new
    @shopping_list = ShoppingList.new
    @products = Product.all
  end

  # GET /shopping_lists/1/edit
  def edit
  end

  # POST /shopping_lists
  # POST /shopping_lists.json
  def create
    @product_ids = params["products"]
    @quanities = params["quanities"]
    @products = Product.all
    @product_prices = ProductPrice.all
    @stores = Store.all

    @selections = []

    @product_ids.each do |id|
      product_prices = @product_prices.where :product_id => id
      product_prices = product_prices.to_a.sort do |p_price1, p_price2|
        p_price1.price <=> p_price2.price
      end
      # binding.pry
      best = product_prices[0]
      selection = {:product_id => id, :store_id => best.store_id, :price => best.price}
      @selections << selection
    end

    render :checkout
  end

  def confirm
    product_ids = params["products"]
    quanities = params["quanities"]
    prices = params["prices"]

    shopping_entries = []
    product_ids.each_with_index do |product, index|
      entry = ShoppingEntry.create! product_id: product,
       quantity: quanities[index], price: prices[index]
      shopping_entries << entry
    end
    # binding.pry
    @shopping_list = ShoppingList.new
    @shopping_list.user_id = @current_user.id
    @shopping_list.shopping_entries = shopping_entries
    # binding.pry
    respond_to do |format|
      if @shopping_list.save
        format.html { redirect_to @shopping_list, notice: 'Shopping list was successfully created.' }
        format.json { render :show, status: :created, location: @shopping_list }
      else
        format.html { render :new }
        format.json { render json: @shopping_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shopping_lists/1
  # PATCH/PUT /shopping_lists/1.json
  def update
    respond_to do |format|
      if @shopping_list.update(shopping_list_params)
        format.html { redirect_to @shopping_list, notice: 'Shopping list was successfully updated.' }
        format.json { render :show, status: :ok, location: @shopping_list }
      else
        format.html { render :edit }
        format.json { render json: @shopping_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shopping_lists/1
  # DELETE /shopping_lists/1.json
  def destroy
    @shopping_list.destroy
    respond_to do |format|
      format.html { redirect_to shopping_lists_url, notice: 'Shopping list was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shopping_list
      @shopping_list = ShoppingList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shopping_list_params
      params.require(:shopping_list).permit(:user_id)
    end
end
