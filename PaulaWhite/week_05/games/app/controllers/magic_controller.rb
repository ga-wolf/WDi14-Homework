class MagicController < ApplicationController

  def magic
  end

    def user
      @user_input = params[:x]
    end

    def generate_numbers
    numbers = (1..10).to_a.sample(1)
  end
end
