# MTA
station = {
    :n => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    :l => ['8th', '6th', 'Union Square', '3rd', '1st'],
    :s => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

def tripView(line_a, dest_a, line_b, dest_b, station_hash)

    index_a = station_hash[line_a].index(dest_a);
    index_b = station_hash[line_b].index(dest_b);
    union_i_a = station_hash[line_a].index('Union Square');
    union_i_b = station_hash[line_b].index('Union Square');

    if index_a > union_i_a
        puts "Get on at #{line_a} then go on #{station_hash[line_a][union_i_a..index_a].reverse.join(", ")}";
    elsif index_a < union_i_a
        puts "Get on at #{line_a} then go on #{station_hash[line_a][index_a..union_i_a].join(", ")}";
    end

    if index_b > union_i_b
        puts "Change at union and continue on #{line_b} then go on #{station_hash[line_b][union_i_b + 1..index_b].join(", ")}";
    elsif index_b < union_i_b
        puts "Change at union and continue on #{line_b} then go on #{station_hash[line_b][index_b..union_i_b - 1].reverse.join(", ")}";
    else
        puts "fuck off mate"
    end

end

tripView(:n, 'Times Square', :l, '1st',  station); 
