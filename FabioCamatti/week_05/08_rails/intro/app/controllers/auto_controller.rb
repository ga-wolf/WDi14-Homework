class AutoController < ApplicationController

  def color
      @color = params[:color]
  end

  def engine
    @hp = params[:hp]
    @torque = params[:torque]
  end

end
