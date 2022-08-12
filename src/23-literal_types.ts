// Literal types are types where you don't say certain types,
// but you're clear on the vlaue that you assign to it

// we add a third parameter to out combine fn, to parse result based on a string
//
const _combine = (
  n1: number | string,
  n2: number | string,
  parseResultTo: string
): number | string => {
  // ts tell us that adding a string to a number might not give us what we expect
  // that's why the followign line throws an error
  // return n1 + n2;
  // to avoid this we use narrowing https://www.typescriptlang.org/docs/handbook/2/narrowing.html
  const result =
    typeof n1 === "number" && typeof n2 === "number"
      ? n1 + n2
      : n1.toString() + n2.toString();
  // now the return line does not throw an error
  return parseResultTo === "as-number" ? +result : result.toString();
};

const combinedAges = _combine(5, 6, "as-number"); // log 11
const combinedAgesString = _combine(5, 6, "as-string"); // log 56

// Using literal types in funciton

const _combine_literal = (
  n1: number | string,
  n2: number | string,
  parseResultTo: 'as-number' | 'as-text' // <====== LITRAL TYPE now only this two values are assignable
): number | string => {
  // ts tell us that adding a string to a number might not give us what we expect
  // that's why the followign line throws an error
  // return n1 + n2;
  // to avoid this we use narrowing https://www.typescriptlang.org/docs/handbook/2/narrowing.html
  const result =
    typeof n1 === "number" && typeof n2 === "number"
      ? n1 + n2
      : n1.toString() + n2.toString();
  // now the return line does not throw an error
  return parseResultTo === "as-number" ? +result : result.toString();
};
