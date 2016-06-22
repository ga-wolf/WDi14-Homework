class ObligationsController < ApplicationController


  def index
    @obligations = Obligation.all
  end

  def show
    @obligations = Obligation.find params[:id]
  
  end

  def new
    @obligation = Obligation.new
    @party = Entity.new

  end

  def create
    @obligation = Obligation.new obligation_params
    @obligation.save
    redirect_to @obligation
  end

  def edit
      @obligation = Obligation.find params[:id]
  end

  def update
      @obligation = Obligation.find params[:id]
      @obligation.update obligation_params

      redirect_to @obligation
    end

  def destroy
    obligation = Obligation.find params[:id]
    obligation.destroy

    redirect_to obligations_path
  end

  private
    def obligation_params
      params.require(:obligation).permit(:agreement_name, :agreement_date)
    end


end
