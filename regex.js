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
    else if (pattern[1] === "?") {
        return matchQuestion(pattern, text);
    } else {
        return (
            // invoke matchOne on successive pairs of characters from the pattern using recursive 
            matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
        );
    }
}
function matchQuestion(pattern, text) {
    // Needs to handle 2 case
    // 1. Where the character before ? is not matched but the text matches the remainder of the pattern (eg. ?abc)
    // 2. Where the character before ? is matched and the rest of the text matches the remainder of the pattern (eg. a?abc)
    
    return (
        (matchOne(pattern[0], text[0]) && match(pattern.slice(2), text.slice(1)))  || 
        match(pattern.slice(2), text)
    )    
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

search("ab?c", "abc");