require_relative '../bank'

describe Bank do
  let (:bank) { Bank.new "RSpec Bank" } # Setup

  describe ".new" do
    it "should create a new bank object" do


      expect( bank ).to_not eq nil
    end
    it "should have a name" do


      expect( bank.name ).to eq "RSpec Bank"
    end
    it "should have no accounts" do


      expect( bank.accounts.count).to eq 0
    end
    describe "#create_account" do
      it "should create an account with a given deposit" do
        bank.create_account "Gerry", 200 #Execution

        expect( bank.balance("Gerry")).to eq 200 # Validation
      end
    end
    describe "#withdraw" do
      it "should withdraw an amount from a customer's accouth" do
        bank.create_account "Gazza", 100
        bank.withdraw "Gazza", 50

        expect(bank.balance("Gazza")).to eq 50
      end
      it "should ignore request for withdraws exceeding the current balance" do
        bank.create_account "Evil Hacker", 1
        bank.withdraw "Evil Hacker", 1_000_000

        expect(bank.balance("Evil Hacker")).to eq 1
      end
    end
  end

  describe "#balance" do
    it "should return the current balance for a given person" do
      bank.create_account "Wes", 80
      expect(bank.balance("Wes")).to eq 80
    end
  end

  describe "#deposit" do
    it "should put an amount into a particular customer's account" do
      bank.create_account("Bill Murray", 2)
      bank.deposit("Bill Murray", 98)

      expect(bank.balance("Bill Murray")).to eq 100
    end
  end



end
