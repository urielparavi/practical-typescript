// Non-null Assertion Operator (!):
// Tells TypeScript that the value is definitely NOT null or undefined.
// Normally, querySelector can return null, but the ! removes null from the type.
// Use this only if you're sure the element exists, otherwise it may cause runtime errors.
// const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;

// const btn = document.querySelector<HTMLButtonElement>('.test-btn');
// #####################################################################
// Optional chaining (`?.`) can be used for safely accessing properties or calling functions,
// but it CANNOT be used on the left-hand side of an assignment.
//
// ✅ This is allowed: we're calling a method only if `btn` exists
// btn?.addEventListener('click', () => {
//   console.log('Clicked');
// });

// ❌ This is NOT allowed: optional chaining cannot be used when assigning a value
// btn?.disabled = true; // ❌ SyntaxError

// ✅ Correct way to conditionally assign a value:
// if (btn) {
//   btn.disabled = true;
// }
// #####################################################################
// We're using both the non-null assertion operator (!) and type assertion (as HTMLButtonElement).
// 1. The `!` tells TypeScript that we're sure `querySelector` will not return null.
// 2. The `as HTMLButtonElement` tells TypeScript that this element is specifically a button,
//    so it has all the properties and methods of an HTMLButtonElement (like `.disabled`).
// Together, this allows us to safely access and modify button-specific properties.
const btn = document.querySelector('.test-btn')! as HTMLButtonElement;

btn.disabled = true; // This works because TypeScript now knows `btn` is a real HTML button
