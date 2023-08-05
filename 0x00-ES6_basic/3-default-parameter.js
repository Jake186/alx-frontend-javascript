export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  const sumOfHoods = initialNumber + expansion1989 + expansion2019;

  return sumOfHoods;
}

// Here is a comment explaining the use of the default parameter values:
//
// The default parameter values are used to set the values of the `expansion1989` and `expansion2019` parameters if they are not passed in as arguments to the function.
// In this case, the default values for the `expansion1989` and `expansion2019` parameters are 89 and 19, respectively.
// This means that if the `expansion1989` and `expansion2019` parameters are not passed in as arguments to the function, the values 89 and 19 will be used for those paramet