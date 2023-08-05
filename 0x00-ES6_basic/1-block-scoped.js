export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}

// Here is a comment explaining the use of the `eslint-disable-next-line` comment:
//
// The `eslint-disable-next-line` comment tells ESLint to ignore the next line of code.
// In this case, we are using the `eslint-disable-next-line` comment to ignore the line of code where we are reassigning the values of the `task` and `task2` variables.
// This is because the `eslint-disable-next-line` comment only applies to the next line of code, and the line of code after the `eslint-disable-next-line` comment does not contain any linting errors.