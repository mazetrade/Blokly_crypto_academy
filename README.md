# Blokly Academy

### 🌐 [Visit Blokly Academy → blokly-crypto-academy.vercel.app](https://blokly-crypto-academy.vercel.app/)

No installation needed. Just open the link in your browser and start learning.

**Blokly Academy** is an educational platform that helps beginners learn about cryptocurrency and blockchain technology. Lessons use plain language and everyday analogies. For example, Bitcoin is described as "digital gold", a smart contract as "a digital vending machine", and a private key as "your house key". The goal is to make the subject approachable for people with no technical or financial background.

## What you'll find in the Academy

| Section | What it covers |
|---|---|
| 🪙 **Crypto Projects** | Short lessons on 50 major cryptocurrencies, including Bitcoin, Ethereum, Solana, Chainlink and Polkadot. Each lesson has an introduction, two key concepts and a takeaway. |
| 📱 **Crypto Applications** | How blockchain is used in the real world: DeFi, supply chains, digital identity, gaming, real estate tokenization, healthcare records, voting and the creator economy. |
| 📄 **Crypto Papers** | 10 well-known whitepapers, including Bitcoin, Ethereum, Uniswap v3, Solana, Chainlink, Polkadot, MakerDAO, Cardano (Ouroboros), Filecoin and Avalanche. Each one has a beginner-friendly summary and the original PDF embedded on the page. |
| 🔐 **Cryptography** | The math that keeps crypto safe: hash functions (SHA-256), public and private keys, and digital signatures. |
| 🔗 **Blockchain Tech** | The basic building blocks: what a block is, how blocks are chained together, decentralization and consensus. |
| 📰 **Latest News** | Industry headlines. |
| 🚀 **New Projects** | Newer technology to watch, such as Hyperliquid, Celestia, Monad and EigenLayer. |
| 💻 **Coding & Dev** | Hands-on project ideas from beginner to advanced. Examples include writing your first smart contract, creating an ERC-20 token, minting an NFT collection, building a DApp frontend and coding a Python trading bot. |
| 🎓 **Certifications** | Learning paths for four roles: Crypto Expert, Blockchain Developer, Blockchain Consultant and Crypto & Blockchain Researcher. |
| 💳 **Subscription** | Four plans: Free, Student (€5/mo), Discovery (€10/mo) and Pro (€20/mo). |
| 🤖 **Blokly AI Tutor** | A chat assistant that floats in the corner of every page. |

## Project status

This is an early version of the platform. Some features are not finished yet:

- The **AI Tutor** runs in demo mode and gives a fixed reply. It is not connected to a real AI model yet.
- **Sign In / Create Account** shows the form but does not save accounts. There is no backend yet.
- The **news**, **certifications** and **subscription** pages contain sample content. Payments are not connected.

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) for the dev server and builds
- Plain CSS for styling
- ESLint for linting

## Run it locally

To use the Academy, open the [live site](https://blokly-crypto-academy.vercel.app/). These steps are only for developers who want to run or change the code.

You need [Node.js](https://nodejs.org/) version 20.19 or newer.

```bash
git clone https://github.com/mazetrade/Blokly_crypto_academy.git
cd Blokly_crypto_academy
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### Other commands

| Command | What it does |
|---|---|
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with ESLint |

## Project structure

```
├── public/           Static files
├── src/
│   ├── App.jsx       All academy content (lessons, papers, plans) and the page layout
│   ├── App.css       Styles for the app
│   ├── main.jsx      Entry point
│   └── index.css     Global styles
├── index.html
└── vite.config.js
```

To add or edit lessons, change the data arrays at the top of `src/App.jsx`. For example, `TOP_50_CRYPTOS`, `PAPERS` and `CODING_PROJECTS`.

## Disclaimer

Blokly Academy is for educational purposes only. Nothing on this platform is financial or investment advice. Cryptocurrencies are volatile, so always do your own research.
