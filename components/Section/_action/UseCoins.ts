export const PutCoins = (
  coin: number,
  setUseCoins: React.Dispatch<React.SetStateAction<number>>,
  setMyCoins: React.Dispatch<React.SetStateAction<number>>,
) => {
  console.log("Coin : ", coin);

  setUseCoins((value) => value + coin);
  setMyCoins((value) => value - coin);
};

export const ClearCoins = (
  setUseCoins: React.Dispatch<React.SetStateAction<number>>,
) => {
  setUseCoins(0);
};
