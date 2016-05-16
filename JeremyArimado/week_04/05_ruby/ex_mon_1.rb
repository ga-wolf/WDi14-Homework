# puts "Age?"
# age = gets().chomp().to_i();
# case
# when age < 18
#     puts 'less'
# else
#     puts 'all good'
# end
#
# # AC
#
# print "Current Temp: "
# temp = gets().chomp().to_i(); # number
# print "AC Functional: "
# ac = gets().chomp().downcase(); # bool
# print "Want temp: "
# want_temp = gets.chomp().to_i(); # number
#
# if ac == 'on'
#     if temp > want_temp
#         puts "it is hot. turn it down";
#     else
#         puts "it is cold. turn it up."
#     end
# else
#     if temp > want_temp
#         puts "it is hot. turn it on";
#     else
#         puts "it is cold. turn it on."
#     end
# end
#

# age

print 'I will pick random number from 0 to: '
user_limit = gets().chomp().to_i();
rand_number = Random.rand(1..user_limit);
print 'what is number: '
user_number = gets().chomp().to_i();

if rand_number == user_number
    puts ' you got it';
else
    while rand_number != user_number
        if rand_number > user_number
            print 'HIGHER, GUESS AGAIN: '
        else
        print 'LOWER, GUESS AGAIN: '
        end
        user_number = gets().chomp().to_i();
    end
    puts 'DATS IT!';
end
