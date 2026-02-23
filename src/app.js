import React, { useState, useEffect } from 'react';
import './App.css';

// --- DATA ---
const COINS = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 96432, change: '+2.4%' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 2745, change: '-1.2%' },
  { id: 3, name: 'Solana', symbol: 'SOL', price: 145, change: '+5.7%' },
];

const LESSONS = [
  { id: 1, title: '🐣 Level 1: Basics', text: 'Crypto is money without banks. It lives on a public list called a Blockchain.' },
  { id: 2, title: '🛡️ Level 2: Safety', text: 'Never share your "Seed Phrase". If you lose it, your money is gone forever.' },
];

const GPS_STEPS = [
  { id: 1, task: "Download MetaMask", done: false },
  { id: 2, task: "Write down Seed Phrase", done: false },
];

// --- COMPONENTS ---

// 1. The Real Chart Component (iframe)
const TradingViewChart = ({ symbol }) => {
  // Maps our symbol to TradingView symbol
  const tvSymbol = symbol === 'BTC' ? 'BINANCE:BTCUSDT' : symbol === 'ETH' ? 'BINANCE:ETHUSDT' : 'BINANCE:SOLUSDT';
  
  return (
    <div className="chart-container">
      <iframe
        title="TradingView Chart"
        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=${tvSymbol}&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC`}
        style={{ width: "100%", height: "300px", border: "none", borderRadius: "12px" }}
      ></iframe>
    </div>
  );
};

// --- MAIN APP ---
function App() {
  const [tab, setTab] = useState('trade');
  const [balance, setBalance] = useState(10000); // Current Cash
  const [initialBudget, setInitialBudget] = useState(10000); // Starting Amount (for tracking profit)
  const [portfolio, setPortfolio] = useState({}); // Stores amount of coins: { BTC: 0.5, ETH: 2 }
  const [amountToBuy, setAmountToBuy] = useState(''); // User input for USD amount
  const [selectedCoin, setSelectedCoin] = useState(COINS[0]); // Which coin is selected for the chart
  const [gps, setGps] = useState(GPS_STEPS);

  // --- ACTIONS ---

  // Handle Budget Change
  const handleBudgetChange = (e) => {
    const val = Number(e.target.value);
    setInitialBudget(val);
    setBalance(val);
    setPortfolio({}); // Reset portfolio when budget changes
  };

  // Buy Logic (Fractional)
  const buy = (coin) => {
    const cost = parseFloat(amountToBuy);
    if (!cost || cost <= 0) return alert("Please enter a valid amount!");
    if (balance < cost) return alert("Not enough money!");

    // 1. Deduct Cash
    setBalance(balance - cost);
    
    // 2. Calculate Fraction (e.g. $50 / $50,000 = 0.001 BTC)
    const amountOfCoin = cost / coin.price;
    
    // 3. Update Portfolio
    setPortfolio({ 
      ...portfolio, 
      [coin.symbol]: (portfolio[coin.symbol] || 0) + amountOfCoin 
    });

    setAmountToBuy(''); // Clear input
  };

  // Calculate Total Portfolio Value (Cash + Coins)
  const calculateTotalValue = () => {
    let coinValue = 0;
    Object.keys(portfolio).forEach(symbol => {
      const coin = COINS.find(c => c.symbol === symbol);
      if (coin) coinValue += portfolio[symbol] * coin.price;
    });
    return balance + coinValue;
  };

  const totalValue = calculateTotalValue();
  const profit = totalValue - initialBudget;
  const profitPercent = ((profit / initialBudget) * 100).toFixed(2);

  return (
    <div className="container">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h1 className="logo">BitQuery</h1>
        <button className={tab === 'trade' ? 'active' : ''} onClick={() => setTab('trade')}>📈 Trade</button>
        <button className={tab === 'learn' ? 'active' : ''} onClick={() => setTab('learn')}>🎓 Academy</button>
        <button className={tab === 'gps' ? 'active' : ''} onClick={() => setTab('gps')}>🧭 GPS</button>
        
        <div className="budget-settings">
          <label>Starting Budget:</label>
          <input 
            type="number" 
            value={initialBudget} 
            onChange={handleBudgetChange} 
            className="budget-input"
          />
        </div>
      </div>

      {/* MAIN SCREEN */}
      <div className="main">
        {/* HEADER */}
        <div className="header">
          <div>
            <h2>Trading Simulator</h2>
            <p className="subtitle">Practice with fake money</p>
          </div>
          <div className="stats-box">
             <div className="stat">
               <span>Cash Balance</span>
               <h3>${balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
             </div>
             <div className={`stat ${profit >= 0 ? 'green-text' : 'red-text'}`}>
               <span>Total Profit/Loss</span>
               <h3>{profit >= 0 ? '+' : ''}${profit.toFixed(2)} ({profitPercent}%)</h3>
             </div>
          </div>
        </div>

        <div className="content">
          {tab === 'trade' && (
            <div className="trade-layout">
              {/* LEFT: Market List */}
              <div className="market-list">
                <h3>Market</h3>
                {COINS.map(coin => (
                  <div 
                    key={coin.id} 
                    className={`coin-row ${selectedCoin.symbol === coin.symbol ? 'selected' : ''}`}
                    onClick={() => setSelectedCoin(coin)}
                  >
                    <div>
                      <span className="coin-symbol">{coin.symbol}</span>
                      <span className={`change ${coin.change.includes('+') ? 'green' : 'red'}`}>{coin.change}</span>
                    </div>
                    <span className="coin-price">${coin.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* CENTER: Chart & Actions */}
              <div className="chart-section">
                <div className="chart-header">
                  <h3>{selectedCoin.name} Chart</h3>
                  <span className="live-badge">LIVE</span>
                </div>
                <TradingViewChart symbol={selectedCoin.symbol} />
                
                {/* BUY SECTION */}
                <div className="buy-controls">
                  <div className="input-group">
                    <span>$ Amount:</span>
                    <input 
                      type="number" 
                      placeholder="e.g. 100" 
                      value={amountToBuy}
                      onChange={(e) => setAmountToBuy(e.target.value)}
                    />
                  </div>
                  <button className="buy-btn" onClick={() => buy(selectedCoin)}>
                    Buy {selectedCoin.symbol}
                  </button>
                </div>
              </div>

              {/* RIGHT: Portfolio */}
              <div className="portfolio-section">
                <h3>Your Assets</h3>
                {Object.keys(portfolio).length === 0 ? <p className="empty-text">No assets yet.</p> : (
                  <div className="assets-list">
                    {Object.keys(portfolio).map(symbol => {
                       const amt = portfolio[symbol];
                       const coin = COINS.find(c => c.symbol === symbol);
                       const val = amt * coin.price;
                       return (
                         <div key={symbol} className="asset-item">
                           <div className="asset-info">
                             <span className="bold">{symbol}</span>
                             <span className="tiny">{amt.toFixed(4)} units</span>
                           </div>
                           <span className="asset-val">${val.toFixed(2)}</span>
                         </div>
                       )
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === 'learn' && <div className="placeholder">Academy Content Here</div>}
          {tab === 'gps' && <div className="placeholder">GPS Content Here</div>}
        </div>
      </div>
    </div>
  );
}

export default App;