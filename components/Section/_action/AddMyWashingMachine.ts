export const handleAddMyWashingMachine = (
  id: string,
  setMyWashing: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  setMyWashing((prevMyWashing) => [...prevMyWashing, id]);
};
