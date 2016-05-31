class TasksController < ApplicationController

  def new
    @task = Task.new
    @cur_project = Project.find params[:p_id]
  end

  def create
    task = Task.new task_params
    task.save

    redirect_to projects_path
  end

  def edit
    @task = Task.find params[:id]
  end

  def update
    task = Task.find params[:id]
    task.update task_params

    redirect_to projects_path
  end

  def destroy
    task = Task.find params[:id]
    task.destroy

    redirect_to :back
  end

  private
    def task_params
      params.require(:task).permit(:title, :description, :project_id)
    end
end
