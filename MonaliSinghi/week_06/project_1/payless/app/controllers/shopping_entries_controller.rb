class ShoppingEntriesController < ApplicationController
  before_action :set_shopping_entry, only: [:show, :edit, :update, :destroy]

  # GET /shopping_entries
  # GET /shopping_entries.json
  def index
    @shopping_entries = ShoppingEntry.all
  end

  # GET /shopping_entries/1
  # GET /shopping_entries/1.json
  def show
  end

  # GET /shopping_entries/new
  def new
    @shopping_entry = ShoppingEntry.new
  end

  # GET /shopping_entries/1/edit
  def edit
  end

  # POST /shopping_entries
  # POST /shopping_entries.json
  def create
    @shopping_entry = ShoppingEntry.new(shopping_entry_params)

    respond_to do |format|
      if @shopping_entry.save
        format.html { redirect_to @shopping_entry, notice: 'Shopping entry was successfully created.' }
        format.json { render :show, status: :created, location: @shopping_entry }
      else
        format.html { render :new }
        format.json { render json: @shopping_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shopping_entries/1
  # PATCH/PUT /shopping_entries/1.json
  def update
    respond_to do |format|
      if @shopping_entry.update(shopping_entry_params)
        format.html { redirect_to @shopping_entry, notice: 'Shopping entry was successfully updated.' }
        format.json { render :show, status: :ok, location: @shopping_entry }
      else
        format.html { render :edit }
        format.json { render json: @shopping_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shopping_entries/1
  # DELETE /shopping_entries/1.json
  def destroy
    @shopping_entry.destroy
    respond_to do |format|
      format.html { redirect_to shopping_entries_url, notice: 'Shopping entry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shopping_entry
      @shopping_entry = ShoppingEntry.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shopping_entry_params
      params.require(:shopping_entry).permit(:product_id, :quantity)
    end
end
