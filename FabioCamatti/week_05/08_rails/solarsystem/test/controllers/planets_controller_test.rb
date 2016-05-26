require 'test_helper'

class PlanetsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
