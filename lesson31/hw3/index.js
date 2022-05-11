const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      return resolve();
    }, time);
  });

delay(1000).then(() => console.log(`Done`));
