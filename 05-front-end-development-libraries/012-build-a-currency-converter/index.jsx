const { useState, useMemo } = React;

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

const currencies = Object.keys(exchangeRates);

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const convertedAmounts = useMemo(() => {
    const amountInUSD = Number(amount) / exchangeRates[fromCurrency];

    return currencies.reduce((conversions, currency) => {
      conversions[currency] =
        amountInUSD * exchangeRates[currency];

      return conversions;
    }, {});
  }, [amount, fromCurrency]);

  const convertedAmount = convertedAmounts[toCurrency];

  return (
    <main className="converter-page">
      <section className="converter-card">
        <p className="eyebrow">CodeMate Exchange</p>
        <h1>Currency Converter</h1>
        <p className="subtitle">
          Convert currencies quickly and easily.
        </p>

        <div className="field-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div className="currency-grid">
          <div className="field-group">
            <label htmlFor="from-currency">From</label>

            <select
              id="from-currency"
              value={fromCurrency}
              onChange={(event) =>
                setFromCurrency(event.target.value)
              }
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <span className="conversion-arrow" aria-hidden="true">
            →
          </span>

          <div className="field-group">
            <label htmlFor="to-currency">To</label>

            <select
              id="to-currency"
              value={toCurrency}
              onChange={(event) =>
                setToCurrency(event.target.value)
              }
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="result" aria-live="polite">
          <span>Converted amount</span>

          <strong>
            {convertedAmount.toFixed(2)} {toCurrency}
          </strong>
        </div>
      </section>
    </main>
  );
}