require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  describe "GET #index" do
    it "assigns all contacts to @contacts" do
      contact = create :contact
      contact_two = create :contact
      get :index
      expect(assigns(:contacts)).to match_array([contact, contact_two])
    end
    it "renders the contacts/index template" do
      get :index
      expect(response).to render_template(:index)
    end
  end
  describe "GET #show" do
    context "with params['letter']" do
      it "populate an array of relevant users and store it in @contacts" do
          johns = create :contact, last_name: "Johns"
          jones = create :contact, last_name: "Jones"
          smith = create :contact, last_name: "Smith"

          get :index, letter: 'J'

          expect(assigns(:contacts)).to eq([johns, jones])
          # If I make a get request that contains params[:letter]
            # Only contacts with a last name starting with that params[:letter] should be displayed
      end
      it "renders the contacts/index template" do
        contact = create :contact
        contact_two = create :contact
        get :index
        expect(assigns(:contacts)).to match_array([contact, contact_two])
      end
    end
    context "without params['letter']" do
      # @contact = Contact.find params[:id]
      it "assigns the requested contact to @contact" do
        contact = create :contact
        # We can add params to a request
        # params[:id] = contact.id
        get :show, id: contact.id
        # We can ask whether instance variables were defined
        expect( assigns(:contact) ).to eq(contact)
      end
      it "renders the contact/show template" do
        contact = create :contact
        # GET localhost:3000/contacts/:id
        get :show, id: contact.id
        expect(response).to render_template(:show)
      end
    end
  end
  describe "GET #new" do
    it "create a new contact, saved as @contact" do
      get :new
      expect(assigns(:contact)).to be_a_new(Contact)
    end
    it "renders the contacts/new template" do
        # GET localhost:3000/contacts/new
        get :new
        expect(response).to render_template(:new)
    end
  end
  describe "POST #create" do
    context "with valid attributes" do
      it "saves the new contact in the database" do
        # Post request, give it attributes
        expect {
          post :create, contact: attributes_for(:contact)
        }.to change(Contact, :count).by 1
        # We need to check wheter the Contact.count has changed

      end
      it "redirects to contacts#show" do
        post :create, contact: attributes_for(:contact)
        expect(response).to redirect_to contact_path(assigns(:contact))
      end
    end
    context "with invalid attributes" do
      it "shouldn't save the new contact in the database" do
        # If we seen bad data to the create method
        # The Contact count should not change
        expect {
          post :create, contact: attributes_for(:contact, first_name: nil)
        }.not_to change(Contact, :count)

      end
      it "should re-render the contacts/new template" do
        # Test whether the response re-rendered the contacts/new template
          post :create, contact: attributes_for(:contact, first_name: nil)
          expect(response).to render_template(:new)
      end
    end
  end
  describe "GET #edit" do
    it "assigns an existing contact to @contact" do

    end
    it "renders the edit template" do
      
    end
  end
end
