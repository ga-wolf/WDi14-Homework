class Bank

    attr_reader :name, :accounts, :balance

    def initialize name
        @name = name
        @accounts = {}
    end

    def create_account name, balance
        @accounts[name] = balance
    end

    def balance name
        @accounts[name]
    end

    def withdraw name, amount
        @accounts[name] -= amount unless amount > @accounts[name]
    end

    def deposit name, amount
        @accounts[name] += amount unless amount < @accounts[name]
    end

end
