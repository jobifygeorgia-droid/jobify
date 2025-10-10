type TimerT = {
  timer: { minutes: number; seconds: number };
};

const Timer: React.FC<TimerT> = ({ timer }) => {
  const fitValue = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="text-base text-red ml-auto px-14">
      {fitValue(timer.minutes)}:{fitValue(timer.seconds)}
    </div>
  );
};

export default Timer;
