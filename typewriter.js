const sentence = "hello there from lighthouse labs\n";

  for(let i = 0; i < sentence.length; i++){

    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, 50 * i) // <= 1s delay to make it noticeable. Can dial it down later.

  }