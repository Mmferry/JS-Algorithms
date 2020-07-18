function fibonacci(postion) {
  if (postion < 3) return 1;
  else return fibonacci(postion - 1) + fibonacci(postion - 2)
}

fibonacci(20);
