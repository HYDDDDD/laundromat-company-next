export const handleWashingMachineTimer = (
  count: number,
  setTimer: React.Dispatch<React.SetStateAction<string>>,
  setTimeOut: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let now = new Date().getTime();
  let timer = now + count * 60000; // แปลงนาทีเป็นวินาที
  let countDownDate = new Date(timer).getTime();

  const intervalId = setInterval(() => {
    now = new Date().getTime();
    const distance = countDownDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // ถ้า distance < 0 ให้หยุดเวลา
    if (distance < 0) {
      clearInterval(intervalId);
      setTimeOut(true);
    }

    // ไม่ให้ return -1 ออกไป
    if (seconds > -1) {
      return setTimer(`${minutes} m : ${seconds} s`);
    }
  });
};
