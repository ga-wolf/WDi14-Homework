class PagesController < ApplicationController
  def home

  end

  def login
  end

  def find
    @unique_styles = Trainer.pluck(:training_style).uniq
    @unique_areas = Trainer.pluck(:training_specialty_areas).uniq
  end

end
