const multipleFive = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i !== 0) {
      console.log(i);
    }
  }
};
multipleFive();
