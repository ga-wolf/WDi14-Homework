require_relative '../bank'

describe Bank do

    let (:bank) { Bank.new "RSpec Bank"} # Setup

    # CLASS METHOD HAS A DOT
    describe ".new" do
        it "should create a new bank object" do
            expect( bank ).to_not eq nil
        end
        it "sould have a name" do
            expect(bank.name).to eq "RSpec Bank"
        end
        it "should have no accounts" do
            expect( bank.accounts.count ).to eq 0
        end
    end

    # INSTANCE OF A CLASS METHOD HAS #
    # bank.create_account
    describe "#create_account" do
        it "create an account for a user with a given deposit" do
            bank.create_account("Gerry", 200)
            expect(bank.balance("Gerry")).to eq 200
        end
    end

    describe "#withdraw" do
        it "should withdraw an amount from the customer's account" do
            bank.create_account "Gazza", 100
            bank.withdraw "Gazza", 50
            expect(bank.balance("Gazza")).to eq 50
        end
        it "should ignore requests for withdrawals excedding the currrent balance" do
            bank.create_account "Evil Hacker", 1
            bank.withdraw "Evil Hacker", 1_000_000
            expect(bank.balance("Evil Hacker")).to eq 1
        end

    end

    describe "#balance" do
        it "should return the current balance for a give person" do
            bank.create_account "Wes", 80
            expect(bank.balance("Wes")).to eq 80
        end
    end

    describe "#deposit" do
        it "should put an amount into a particular customer's account" do
            bank.create_account "Bill Murrat", 2
            bank.deposit "Bill Murrat", 98
            expect(bank.balance("Bill Murrat")).to eq 100
        end
        it "should ignore requests for negative deposits" do
            bank.create_account "Bill Murrat", 2
            bank.deposit "Bill Murrat", -98
            expect(bank.balance("Bill Murrat")).to eq 2
        end
    end
end
