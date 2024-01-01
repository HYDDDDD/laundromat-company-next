export interface IWashingMachine {
  id: string;
  name: string;
  status: string;
  weight: number;
  used: number;
  coins: number[];
  timer: number;
}
