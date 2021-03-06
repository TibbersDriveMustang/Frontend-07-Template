// LeetCode 28
function kmp(source, pattern) {
    // calculate table
    let table = new Array(pattern.length).fill(0);
    {
        let i = 1, j = 0;

        while(i < pattern.length) {
            if(pattern[i] === pattern[j]) {
                ++j, ++i;
                table[i] = j;
            } else {
                if(j > 0)
                    j = table[j];
                else {
                    ++i;
                }
            }
        }
    }

    // match
    {
        let i = 0, j = 0;
        while(i < source.length) {
            if(pattern[j] == source[i]) {
                ++i, ++j;
            } else {
                if (j > 0)
                    j = table[j]
                else
                    ++i;
            }
            if (j === pattern.length)
                return true;
        }
        return false;
    }

    console.log(table);

    // abcdabce
    // aabaaac

    
}

console.log(kmp('Helxlo', 'll'));

// a a b a a a c
// 0 0 1 0 1 2 2