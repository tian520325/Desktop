/**
 * Replaces all occurrences of a search value with a replace value in a string.
 * 
 * @param {string|RegExp} searchValue - The value to search for in the string. 
 *                                      Can be either a string or a regular expression.
 * @param {string|function} replaceValue - The value to replace the search value with.
 *                                         Can be either a string or a function.
 * @returns {string} - The modified string with all occurrences replaced.
 */
function replaceAll(searchValue, replaceValue) {
    // Coerce the context object to be used as 'this'
    var O = requireObjectCoercible(this);
    // Variables for processing the replacement
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, 
        searchLength, advanceBy, replacement;
    
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    // Check if searchValue is not null or undefined
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      // If searchValue is a regular expression, check if it is global
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      
      // Get the 'replace' method from the searchValue
      replacer = getMethod(searchValue, REPLACE);
      // If the 'replace' method exists, call it with the context object and replaceValue
      if (replacer) {
        return call(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        // If the searchValue is a pure regular expression, use the 'replace' method
        return replace(toString(O), searchValue, replaceValue);
      }
    }
    // Convert the context object and searchValue to strings
    string = toString(O);
    searchString = toString(searchValue);
    // Check if replaceValue is a function
    functionalReplace = isCallable(replaceValue);
    // If replaceValue is not a function, convert it to a string
    if (!functionalReplace) replaceValue = toString(replaceValue);
    // Get the length of the search string
    searchLength = searchString.length;
    // Set the step size to advance by
    advanceBy = max(1, searchLength);
    // Find the first occurrence of the search string in the string
    position = stringIndexOf(string, searchString, 0);
    // Loop through all occurrences of the search string in the string
    while (position !== -1) {
      // Get the replacement value
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      // Append the substring before the search string and the replacement to the result
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      // Update the end position of the last match
      endOfLastMatch = position + searchLength;
      // Find the next occurrence of the search string in the string

  Replacing code at newFile.1.js:28-66
  
  
  Applied! ✅
  📝 Apply Diff
  Copy Code
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) {
        return call(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        return replace(toString(O), searchValue, replaceValue);
      }
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
  /**
   * Replaces all occurrences of a search value with a replace value in a given string.
   * @param {string|RegExp} searchValue - The value to search for. It can be a string or a regular expression.
   * @param {string|Function} replaceValue - The value to replace the search value with. It can be a string or a function.
   * @returns {string} - The modified string with all occurrences of the search value replaced.
   */
  replaceAll: function replaceAll(searchValue, replaceValue) {
    // Ensure the 'this' value is coercible to an object
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    // Check if search value is null or undefined
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        // Check if the regular expression is global
        if (!~indexOf(flags, 'g')) throw $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      // If the search value has a replace method, use it
      if (replacer) {
        return call(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        // If the search value is a pure regular expression, use the replace method
        return replace(toString(O), searchValue, replaceValue);
      }
    }
    // Convert the 'this' value to a string
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    // Loop through the string and replace all occurrences of the search value
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    // Append the remaining part of the string after the last match
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }