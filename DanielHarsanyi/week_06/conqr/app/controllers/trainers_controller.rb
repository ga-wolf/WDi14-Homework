class TrainersController < ApplicationController
  def index
    @trainers = Trainer.all

    if @current_user.is_a?(Trainer)
      redirect_to @current_user
    end

    if @current_user == nil
      redirect_to home_path
    end

  end

  def new
      @trainer = Trainer.new
  end

  def show
      @trainer = Trainer.find params[:id]
  end

  def create
    @trainer = Trainer.create trainer_params

    if @trainer.save
      redirect_to "/trainers"
    else
      render :new
    end
  end

  def edit
    @trainer = Trainer.find params[:id]
  end

  def update
    trainer = Trainer.find params[:id]

    if trainer.authenticate( params[:trainer][:password] )
        trainer.update trainer_params
      else
        flash[:error] = "Update not saved. Password incorrect"
    end

    redirect_to trainer_path
  end

  def destroy
    trainer = Trainer.find params[:id]
    trainer.destroy

    redirect_to trainers_path
  end

  def choose
    # @matched_trainers = Trainer.all
    @matched_trainers = Trainer.where training_specialty_areas: params[:training_specialty_areas], training_style: params[:training_style]
    # raise
  end


  private
    def trainer_params
      params.require(:trainer).permit(:name, :email, :password, :password_confirmation, :rating, :fitness_australia_id, :qualifications, :training_specialty_areas, :training_style, :price, :image)
    end
end

# t.text :name
# t.text :email
# t.text :password_digest
# t.integer :fitness_australia_id
# t.boolean :approved_status, :default => "false"
# t.text :qualifications
# t.text :training_specialty_areas
# t.text :training_style
# t.inet :current_location
# t.text :preferred_location
# t.integer :price
# t.integer :rating
# t.text :image
