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
    if (pattern === '$' && text === "") return true;
    else
    // invoke matchOne on successive pairs of characters from the pattern
        return (
            matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
        );
}

// Match the beginning of a string
function search(pattern, text) {
    if (pattern[0] === "^") {
        return match(pattern.slice(1), text);
    } else {
        // Match somewhere in the string
        // turn string into an array and check every letters
        return text.split("").some((_, index) => {
            return match(pattern, text.slice(index));
        });
    }
}
