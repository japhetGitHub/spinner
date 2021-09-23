const animate = (chars, time) => {
  for (const char of chars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, time += 200);
  }
};

animate(['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '\n'], 100);