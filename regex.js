// Matching one character
function matchOne(pattern, text) {
    // if empty pattern
    if (!pattern) return true;
    // if pattern is defined but text is empty
    if (!text) return false;
    if (pattern === '.') return true;
    return pattern === text;
}

// Matching same length strings
function match(pattern, text) {
    // base case
    if (pattern === '') return true;
    else
    // invoke matchOne on successive pairs of characters from the pattern
        return (
            matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
        );
}