class TasksController < ApplicationController

  def new
    @task = Task.new
    @cur_project = Project.find params[:p_id]
  end

  def create
    task = Task.new task_params
    task.save

    redirect_to project_path(task_params[:project_id])
  end

  def edit
    @task = Task.find params[:id]
  end

  def update
    task = Task.find params[:id]
    task.update task_params

    redirect_to project_path(task_params[:project_id])
  end

  def destroy
    task = Task.find params[:id]
    task.destroy

    redirect_to :back
  end

  private
    def task_params
      params.require(:task).permit(:title, :description, :project_id, :complete)
    end
end
