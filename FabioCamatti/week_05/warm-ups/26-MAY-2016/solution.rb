def find_anagrams arr, str
  result = []
  str = str.chars.sort.join
  arr.each do |s|
    s2 = s.chars.sort.join
    result << s if s2 == str
  end
  result
end

p find_anagrams ["enlists", "google", "inlets", "banana"], "listen"
