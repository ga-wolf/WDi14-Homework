class TasksController < ApplicationController

  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find params[:id]
  end

  def new
    @task = Task.new
    @party = Entity.new

  end

  def create
    entity = Entity.find( params["entity_id"] )
    obligation = Obligation.find params["obligation_id"]
    clause = Clause.find params[:clause_id]

    if entity.obligations.find_by( :id => params["obligation_id"] ).nil?
      entity.obligations << obligation
    end

    if obligation.clauses.find_by( :id => params["clause_id"] ).nil?
      obligation.clauses << clause
    end

    @task = Task.new task_params
    @task.save

    clause.tasks << @task

    redirect_to @task
  end


  def edit
  end

  def update
  end

  def destroy
  end



  private
    def task_params
      params.require(:task).permit(:description, :date)
    end
end
