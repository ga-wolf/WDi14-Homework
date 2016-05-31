class ProjectsController < ApplicationController
  before_action :authenticate, :only => [:index]

  def index
  end

  def new
    @project = Project.new
  end

  def create
    project = Project.new project_params
    project.users << @current_user
    project.save

    redirect_to projects_path
  end

  def show
    @project = Project.find params[:id]
    @users = User.all
  end

  def edit
    @project = Project.find params[:id]
  end

  def update
    project = Project.find params[:id]
    project.update project_params

    redirect_to project_path
  end

  def adduser
    project = Project.find params[:id]
    user = User.find params [:u_id]

    project << user

    redirect_to project_path
  end

  def destroy
    project = Project.find params[:id]
    project.destroy

    redirect_to projects_path
  end

  private
    def authenticate
      redirect_to login_path unless @current_user
    end

    def project_params
      params.require(:project).permit(:title, :description)
    end

end
