const { useState, useEffect } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] =
    useState(null);

  const generateOTP = () => {
    const newOTP = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    setOtp(newOTP);
    setTimeLeft(5);
  };

  useEffect(() => {
    if (
      timeLeft === null ||
      timeLeft === 0
    ) {
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(
        (previousTime) => previousTime - 1
      );
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  const getTimerMessage = () => {
    if (timeLeft === null) {
      return "";
    }

    if (timeLeft === 0) {
      return (
        "OTP expired. Click the button " +
        "to generate a new OTP."
      );
    }

    return `Expires in: ${timeLeft} seconds`;
  };

  return (
    <div className="container">
      <h1 id="otp-title">
        OTP Generator
      </h1>

      <h2 id="otp-display">
        {otp ||
          "Click 'Generate OTP' to get a code"}
      </h2>

      <p
        id="otp-timer"
        aria-live="polite"
      >
        {getTimerMessage()}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};