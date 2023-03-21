const multipleFive = () => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(multipleFive());
