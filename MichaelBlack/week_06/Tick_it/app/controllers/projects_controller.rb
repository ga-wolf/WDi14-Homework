class ProjectsController < ApplicationController
  before_action :authenticate, :only => [:index]

  def index
  end

  def new
    @project = Project.new
    @users = User.all
  end

  def create
    project = Project.new project_params
    project.users << @current_user
    project.save

    params[:project][:user_ids].shift
    user_ids = params[:project][:user_ids]

    user_ids.each do |u|
      x = User.find u
      project.users << x unless project.users.include? x
    end

    redirect_to projects_path
  end

  def show
    @project = Project.find params[:id]
    @users = User.all
  end

  def edit
    @project = Project.find params[:id]
    @users = User.all
  end

  def update
    project = Project.find params[:id]
    project.update project_params
    project.save

    project.users.delete_all
    project.users << @current_user
    params[:project][:user_ids].shift
    user_ids = params[:project][:user_ids]
    user_ids.each do |u|
      x = User.find u
      project.users << x unless project.users.include? x
    end

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
      params.require(:project).permit(:title, :description, :user_ids)
    end

end
