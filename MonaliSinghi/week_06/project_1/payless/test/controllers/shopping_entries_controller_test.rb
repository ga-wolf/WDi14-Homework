require 'test_helper'

class ShoppingEntriesControllerTest < ActionController::TestCase
  setup do
    @shopping_entry = shopping_entries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shopping_entries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shopping_entry" do
    assert_difference('ShoppingEntry.count') do
      post :create, shopping_entry: { product_id: @shopping_entry.product_id, quantity: @shopping_entry.quantity }
    end

    assert_redirected_to shopping_entry_path(assigns(:shopping_entry))
  end

  test "should show shopping_entry" do
    get :show, id: @shopping_entry
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shopping_entry
    assert_response :success
  end

  test "should update shopping_entry" do
    patch :update, id: @shopping_entry, shopping_entry: { product_id: @shopping_entry.product_id, quantity: @shopping_entry.quantity }
    assert_redirected_to shopping_entry_path(assigns(:shopping_entry))
  end

  test "should destroy shopping_entry" do
    assert_difference('ShoppingEntry.count', -1) do
      delete :destroy, id: @shopping_entry
    end

    assert_redirected_to shopping_entries_path
  end
end
