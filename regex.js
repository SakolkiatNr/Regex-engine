// Matching one character
function matchOne(pattern, text) {
    // if empty pattern
    if (!pattern) return true;
    // if pattern is defined but text is empty
    if (!text) return false;
    if (pattern === '.') return true;
    return pattern === text;
}

matchOne('a', 'a');
matchOne('.', 'z');
matchOne('', 'h');
matchOne('a', 'b');
matchOne('p', '');