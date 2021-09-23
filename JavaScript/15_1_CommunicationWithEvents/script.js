const btn = document.querySelector(`button`);

btn.addEventListener(`mouseover`, () => {
  console.log(`Mouse over me`);
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener(`click`, () => {
  btn.innerText = `You Got ME!`;
  document.body.style.backgroundColor = `green`;
});
