// UNION TYPES

// in funciton combine we can accept either numbers or strings because combine will
// concatenate if both are strings, in this scenario we can use UNION by using pipe operator
// look at the example bellow
//
const combine = (n1: number | string, n2: number | string): number | string => {
  // ts tell us that adding a string to a number might not give us what we expect
  // that's why the followign line throws an error
  // return n1 + n2;
  // to avoid this we use narrowing https://www.typescriptlang.org/docs/handbook/2/narrowing.html
  return typeof n1 === "number" && typeof n2 === "number"
    ? n1 + n2
    : n1.toString() + n2.toString();
  // now the return line does not throw an error
};