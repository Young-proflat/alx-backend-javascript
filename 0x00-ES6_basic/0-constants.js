export function taskFirst() {
/**
 * Instantiate variable with "const"
 */
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
/**
 * Instantiate variable with "let"
 */
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
