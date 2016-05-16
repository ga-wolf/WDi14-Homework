# Calculator

# def name(param = defaultVal)
# end

# ----------------------------------

# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

def menu
    puts "[A] ADD"
    puts "[S] SUBTRACT"
    puts "[X] MULTIPY"
    puts "[D] DIVIDE"
    puts "[R] ROOT"
    puts "[E] EXP"
    puts "[Q] QUIT"
    print "INPUT: "
    gets.chomp().downcase()
end

user_choice = menu()

def add
    print "N1: "
    n1 = gets.to_f
    print "N2: "
    n2 = gets.to_f
    result = n1 + n2;
    puts result
end

def subtract
    print "N1: "
    n1 = gets.to_f
    print "N2: "
    n2 = gets.to_f
    result = n1 - n2;
    puts result
end

def multiply
    print "N1: "
    n1 = gets.to_f
    print "N2: "
    n2 = gets.to_f
    result = n1 * n2;
    puts result
end

def divide
    print "N1: "
    n1 = gets.to_f
    print "N2: "
    n2 = gets.to_f
    result = n1 / n2;
    puts result
end

def root
    print "N "
    n1 = gets.to_f
    result = Math.sqrt(n1);
    puts result
end


def exp
    print "N1: "
    n1 = gets.to_f
    print "N2: "
    n2 = gets.to_f
    result = n1 ** n2;
    puts result
end


# get menu operation
# dpending on a

#if user wants to quit
until user_choice == "q"

    case user_choice
        when "a"
            puts "ADDING"
            add();
        when "s"
            puts "SUBTRACT"
            subtract();
        when "x"
            puts "MULTIPLY"
            multiply();
        when "d"
            puts "DIVIDE"
            add()
        when "e"
            puts "EXP"
            exp()
        when "r"
            puts "ROOT"
            root()
        else
            puts "Invalid selection, dingus."
    end

    user_choice = menu();
end
