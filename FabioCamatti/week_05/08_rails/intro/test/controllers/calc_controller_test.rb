require 'test_helper'

class CalcControllerTest < ActionController::TestCase
  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get calculate" do
    get :calculate
    assert_response :success
  end

end
