class PokemonController < ApplicationController
  def index
  @pokemans = Pokemon.all
  end
end
