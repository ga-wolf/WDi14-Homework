require 'rails_helper'

RSpec.describe Contact, type: :model do

  it "is valid with a first_name, last_name and an email" do
    contact = Contact.new(
      first_name: "Bill",
      last_name: "Murray",
      email: "bill@ga.com")
  expect(contact).to be_valid
  end

  it "is invalid without a first_name" do
    contact = Contact.new(
          first_name: nil,
          last_name: "Murray",
          email: "bill@ga.com")
    contact.valid? # Make the model generate error messages
    expect(contact.errors[:first_name]).to include("Can't be blank")
  end

  it "is invalid without a last_name" do
    contact = Contac.new(
        first_name:"Bill",
        last_name: nil,
        email: "bill@ga.com")
        contact.valid?
        expect(contact.errors[:last_name]).to include("Last name can't be blank")
  end

  it "is invalid without an email" do
    contact = Contac.new(
        first_name:"Bill",
        last_name: "Murray",
        email: nil)
        contact.valid?
        expect(contact.errors[:email]).to include("can't be blank")
  end

  it "is invalid with a duplicate email address" do
     Contact.create(first_name: "Groucho", last_name: "Marx", email: "marx@ga.co")
     contact = Contac.new( first_name:"Zeppo", last_name: "Marx", email: "marx@ga.co")
     contact.valid?
     byebug
  end

end
