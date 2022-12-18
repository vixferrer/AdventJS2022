const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);

function wrapping(gifts) {
  let myGifts = [];

  gifts.forEach((word) => {
    const totalLength = word.length;
    let stars = "";

    for (let i = 0; i < totalLength + 4; i++) {
      if (i < totalLength + 2) {
        stars += "*";
      } else if (i === totalLength + 2) stars += "\n";
      else {
        stars += "*";
      }
    }

    myGifts.push(stars + word + stars.split("").reverse().join(""));
  });
  
  return myGifts;
}
