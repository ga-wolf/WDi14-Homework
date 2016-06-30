# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'


RSpec.describe Contact, type: :model do
  it "has a valid factory" do
      contact = build :contact
      expect(contact).to be_valid
  end

  it "is valid with a first_name, last_name and an email" do
    contact = Contact.new(
      first_name: "Bill",
      last_name: "Murray",
      email: "bill@ga.com")
  expect(contact).to be_valid
  end

  it "is invalid without a first_name" do
    contact = build :contact, first_name: nil
    contact.valid? # Make the model generate error messages
    expect(contact.errors[:first_name]).to include("can't be blank")

  end

  it "is invalid without a last_name" do
    contact = build :contact, last_name: nil
    contact.valid?
    expect(contact.errors[:last_name]).to include("can't be blank")
  end

  it "is invalid without an email" do
      contact = build :contact, email: nil
      contact.valid?
      expect(contact.errors[:email]).to include("can't be blank")
  end

  it "is invalid with a duplicate email address" do
     create :contact, email: "marx@ga.co"
     contact = build :contact, email: "marx@ga.co"
     contact.valid?
     expect(contact.errors[:email]).to include("has already been taken")
  end

  it "returns a contact's full name as a string" do
     contact = build :contact, first_name: "Gummo", last_name: "Marx"
      expect(contact.name).to eq("Gummo Marx")
  end

  it "returns a sorted array of contacts that match" do
      smith = Contact.create(first_name: "John", last_name: "Smith", email: "jsmith@ga.co")
      jones = Contact.create(first_name: "Tim", last_name: "Jones", email: "tjones@ga.co")
      johns = Contact.create(first_name: "Tim", last_name: "Johns", email: "tjohns@ga.co")
      expect(Contact.by_letter "J").to eq([johns, jones])
  end

  context "filter last name by letter" do
    before :each do
      # Create all contacts that are needed
      @smith = Contact.create(first_name: "John", last_name: "Smith", email: "jsmith@ga.co")
      @jones = Contact.create(first_name: "Tim", last_name: "Jones", email: "tjones@ga.co")
      @johns = Contact.create(first_name: "John", last_name: "Johns", email: "tjohns@ga.co")
    end

    it "returns a sorted array of contacts that match" do
      expect(Contact.by_letter("J")).to eq([@johns, @jones])
    end

    it "omit contacts who don't match" do
      expect(Contact.by_letter("J")).not_to include(@smith)
    end
  end
  it "has three phone numbers" do
    # Create a contact
    contact = build(:contact)
    expect(contact.phones.length).to eq(3)
  end
end
