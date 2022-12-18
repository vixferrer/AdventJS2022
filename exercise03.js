function distributeGifts(packOfGifts, reindeers) {

  let rTWeight = 0;
  let gTWeight = 0;

  reindeers.forEach(reindeer => {
    rTWeight += reindeer.length * 2;
  });
  
  packOfGifts.forEach(gift => {
    gTWeight += gift.length;
  });

  return Math.floor(rTWeight / gTWeight);
}
