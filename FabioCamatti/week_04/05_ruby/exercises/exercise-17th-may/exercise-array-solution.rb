# ###1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday
#
# ###2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.
#
# ###3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days
#
# ###4. Remove either the weekdays or the weekends
# Your choice...
#
# ###5. Sort the remaining days alphabetically

require 'pry'


days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]

p days_of_the_week

days_of_the_week.insert(0, days_of_the_week.delete_at(6))
p days_of_the_week


weekends = [6,0].map { |i| days_of_the_week[i]}
p weekends

# weekdays = (1..5).to_a.map { |i| days_of_the_week[i]}
weekdays = days_of_the_week - weekends
p weekdays

days_of_the_week = [weekdays, weekends]

days_of_the_week.pop

p days_of_the_week

days_of_the_week[0].sort!

p days_of_the_week
