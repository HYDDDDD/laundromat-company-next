export const PutCoins = (
  coin: number,
  setUseCoins: React.Dispatch<React.SetStateAction<number>>,
  setMyCoins: React.Dispatch<React.SetStateAction<number>>,
) => {
  setUseCoins((value) => value + coin);
  setMyCoins((value) => value - coin);
};
