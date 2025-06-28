let tax: number | string = 10;
tax = 100;
tax = '$10';

// This variable uses a union of string literal types, meaning it can only hold one of the three specific
// values: 'pending', 'success', or 'error'.
// This is useful for modeling limited state options, such as the status of a network request, and provides
// strong type safety.
// It prevents assigning invalid strings, improves code readability, and enables better autocomplete and error
// checking in editors like VS Code.
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';
