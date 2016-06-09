class PagesController < ApplicationController
  def index
  end

  def lotto_numbers
    @lotto_numbers = (1..45).to_a.sample( 6 ).join( ", ")

    render :text => @lotto_numbers
  end

  def uptime
    render :text => ` uptime `
  end

  def info
    
    @info = {
        :time => Time.now.to_s,
        :lucky_number => Random.rand(1..1000).to_s,
        :fortune => ` fortune `
    }
    render :json => @info
  end

end
