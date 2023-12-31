import { IWashingMachine } from "@/types/washing-machine-types";

export const STATUS = ["ว่าง", "ไม่ว่าง", "เครื่องมีปัญหา"];

export const WEIGHT = [10, "15", "20"];

export const COINS = [5, 10];

// _MOCK
export const USER = {
  userID: "1",
  name: "สมหญิง",
  myCoins: 100,
};

export const WASHING_MACHINE_DATA: IWashingMachine[] = [
  { id: "1", name: "01", status: "ว่าง", weight: 10, used: 20, coins: [10] },
  {
    id: "2",
    name: "02",
    status: "ไม่ว่าง",
    weight: 15,
    used: 30,
    coins: [5, 10],
  },
  {
    id: "3",
    name: "03",
    status: "เครื่องมีปัญหา",
    weight: 20,
    used: 20,
    coins: [5, 10],
  },
  {
    id: "4",
    name: "04",
    status: "ไม่ว่าง",
    weight: 20,
    used: 40,
    coins: [5, 10],
  },
  {
    id: "5",
    name: "05",
    status: "ว่าง",
    weight: 10,
    used: 20,
    coins: [5, 10],
  },
  {
    id: "6",
    name: "06",
    status: "ว่าง",
    weight: 20,
    used: 40,
    coins: [5, 10],
  },
];
