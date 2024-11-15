function capitalize(str) {
    var index = 0;

    // Check for Empty String
    if (str.length === 0) return str;

    // Check for and Find Non-Character Letter
    if (/^[^a-zA-Z]/.test(str[index])) {
        while (index < str.length && !/^[a-zA-Z]$/.test(str[index])) {
            index++;
        }
    }
    
    // Return Capitalized Character
    return str.slice(0, index) + str.charAt(index).toUpperCase() + str.slice(index + 1);
}
  
module.exports = capitalize;
  