class Calculator
  require "pry"

  def operator op

    case op
      when "plus" then :+
      when "minus" then :-
      when "multiplied by" then :*
      when "divided by" then :/
    end

  end

  def solve(question)

    matches = question.match(/(-\d+|\d+) (plus|minus|multiplied by|divided by) (-\d+|\d+)/)
    op = operator(matches[2])
    matches[1].to_i.send(op, matches[3].to_i)

  end

end

calc = Calculator.new
puts calc.solve("What is 5 plus 13")
puts calc.solve("What is 7 minus 5")
puts calc.solve("What is -6 multiplied by 4")
puts calc.solve("What is 25 divided by -5")
