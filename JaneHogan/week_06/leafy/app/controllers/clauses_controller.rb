class ClausesController < ApplicationController


  def index
    @clauses = Clause.all
  end

  def show
    @clauses = Clause.find params[:id]

  end

  def new
    @clause = Clause.new


  end

  def create
    @clause = Clause.new clause_params
    @clause.save
    redirect_to @clause
  end

  def edit
      @clause = Clause.find params[:id]
  end

  def update
      @clause = Clause.find params[:id]
      @clause.update clause_params

      redirect_to @clause
    end

  def destroy
    clause = Clause.find params[:id]
    clause.destroy

    redirect_to clauses_path
  end

  private
    def clause_params
      params.require(:clause).permit(:name, :description)
    end



end
