class CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
  end

  def new
    @campaign = Campaign.new
  end

  def create
    campaign = Campaign.create campaign_params

    redirect_to "/campaigns/#{campaign.id}"
  end


  def show
    @campaign = Campaign.find params[:id]
  end

  def edit
    @campaign = Campaign.find params[:id]
  end

  def update
    campaign = Campaign.find params[:id]
    campaign.update campaign_params

    redirect_to campaign # Redirecting means to GET request - show this particular work
  end

  def destroy
    campaign = Campaign.find params[:id]
    campaign.destroy

    redirect_to campaigns_path
  end

end

private
    def campaign_params
      params.require(:campaign).permit(:model, :photographer, :image, :magazine, :magazine_id)
    end
