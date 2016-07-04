require 'pry'
class WordProblem
  def initialize(question)
    @question = question
  end

  def answer
    if too_complicated?
      raise ArgumentError.new("That's too complicated for me")
    end
    ans = @matches[1].to_i.send(operation(@matches[2]), @matches[3].to_i)
    ans = ans.send(operation(@matches[5]), @matches[6].to_i)
    # binding.pry
  end

  def too_complicated?
    return matches.nil?
  end

  def operation(op)
    op == 'plus' ? :+ : :-
  end

  def matches
    @matches = @question.match(/(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/)
  end

end
