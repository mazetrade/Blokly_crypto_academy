import React, { useState } from 'react';
import './App.css';

// --- DATA: 1. CRYPTO PROJECTS (TOP 20) ---
// --- DATA: 1. CRYPTO PROJECTS (TOP 50) ---
const TOP_50_CRYPTOS = [
  { 
    id: 1, name: 'Bitcoin', symbol: 'BTC', desc: 'The first cryptocurrency. Often called digital gold.',
    article: {
      intro: "Bitcoin is the world's first decentralized digital currency, meaning no bank or government controls it.",
      concepts: [
        { title: "Digital Gold", text: "There will only ever be 21 million Bitcoins created. This scarcity makes people treat it like digital gold to store their wealth." },
        { title: "Proof of Work", text: "To keep the network safe, computers around the world solve complex math puzzles. This is called 'mining'." }
      ],
      conclusion: "Bitcoin proved that we can have a global, secure money system without needing a middleman."
    }
  },
  { 
    id: 2, name: 'Ethereum', symbol: 'ETH', desc: 'The world computer. Powers smart contracts and apps.',
    article: {
      intro: "If Bitcoin is a pocket calculator, Ethereum is a smartphone. It lets developers build entire applications on the blockchain.",
      concepts: [
        { title: "Smart Contracts", text: "These are digital agreements written in code. If you meet the rules of the contract, it executes automatically—no lawyer needed." },
        { title: "Gas Fees", text: "To run apps on Ethereum, you have to pay a small fee to the network called 'Gas', paid in ETH." }
      ],
      conclusion: "Ethereum is the foundation for Decentralized Finance (DeFi) and NFTs."
    }
  },
  { 
    id: 3, name: 'Tether', symbol: 'USDT', desc: 'A "Stablecoin" pegged to the US Dollar.',
    article: {
      intro: "Tether is designed to always be worth exactly $1.00. It doesn't go up or down like Bitcoin.",
      concepts: [
        { title: "Stablecoin", text: "A cryptocurrency that is backed by real-world money. For every digital USDT, there is supposed to be a real dollar in a bank." },
        { title: "Safe Haven", text: "Traders use USDT to 'hide' from crypto volatility without having to send money back to their traditional bank." }
      ],
      conclusion: "USDT acts as the digital bridge between traditional cash and the crypto market."
    }
  },
  { 
    id: 4, name: 'BNB', symbol: 'BNB', desc: 'The native coin of the Binance exchange ecosystem.',
    article: {
      intro: "BNB was created by Binance, the largest crypto exchange in the world, to be used inside their ecosystem.",
      concepts: [
        { title: "Fee Discounts", text: "Traders who hold BNB get discounts on trading fees when using the Binance platform." },
        { title: "Binance Smart Chain", text: "BNB is also the 'gas' (fuel) used to run apps on Binance's own blockchain, which competes with Ethereum." }
      ],
      conclusion: "BNB is a prime example of a 'utility token'—a coin created to serve a specific purpose for a company's network."
    }
  },
  { 
    id: 5, name: 'Solana', symbol: 'SOL', desc: 'A high-speed, low-cost blockchain for fast apps.',
    article: {
      intro: "Solana was built to solve Ethereum's biggest problem: it is slow and expensive. Solana is incredibly fast and incredibly cheap.",
      concepts: [
        { title: "Proof of History", text: "A unique time-stamping system that allows Solana to process thousands of transactions per second." },
        { title: "The Speed Trade-off", text: "Because Solana is so fast, it requires massive computing power, which some argue makes it less 'decentralized' than Bitcoin." }
      ],
      conclusion: "Solana is the go-to network for crypto applications that require instant, cheap transactions."
    }
  },
  { 
    id: 6, name: 'USDC', symbol: 'USDC', desc: 'A heavily regulated and audited stablecoin.',
    article: {
      intro: "Like Tether, USDC is a stablecoin worth $1.00. It was created by Circle and Coinbase.",
      concepts: [
        { title: "Transparency", text: "USDC is known for being strictly regulated and regularly audited by top accounting firms to prove they have the real dollars in the bank." },
        { title: "DeFi Standard", text: "It is widely trusted and used in Decentralized Finance (DeFi) apps for lending and borrowing." }
      ],
      conclusion: "USDC is considered one of the safest digital dollars in the crypto space."
    }
  },
  { 
    id: 7, name: 'XRP', symbol: 'XRP', desc: 'Designed for fast, cross-border bank transfers.',
    article: {
      intro: "XRP was created by a company called Ripple to help traditional banks move money internationally in seconds.",
      concepts: [
        { title: "Remittances", text: "Sending money to another country normally takes days and costs a lot. XRP does it in 3 seconds for a fraction of a penny." },
        { title: "Pre-Mined", text: "Unlike Bitcoin which is mined over time, all 100 billion XRP were created on day one, and the company kept a large portion." }
      ],
      conclusion: "XRP is trying to be the bridge between the old banking world and the new blockchain world."
    }
  },
  { 
    id: 8, name: 'Dogecoin', symbol: 'DOGE', desc: 'A popular meme coin with a massive community.',
    article: {
      intro: "Dogecoin was literally created as a joke in 2013 based on a dog meme, but it grew into a multi-billion dollar asset.",
      concepts: [
        { title: "Meme Culture", text: "Its value comes purely from community belief and internet culture, famously supported by Elon Musk." },
        { title: "Infinite Supply", text: "Unlike Bitcoin, Dogecoin has no maximum supply. Millions of new DOGE are created every day." }
      ],
      conclusion: "Dogecoin proves that community and internet culture have real financial power."
    }
  },
  { 
    id: 9, name: 'Toncoin', symbol: 'TON', desc: 'A fast blockchain integrated with Telegram.',
    article: {
      intro: "TON was originally designed by the creators of the Telegram messaging app to bring crypto to its hundreds of millions of users.",
      concepts: [
        { title: "Mass Adoption", text: "By living inside a popular chat app, TON makes it as easy to send crypto as it is to send a text message." },
        { title: "Mini-Apps", text: "Developers can build entire crypto games and stores directly inside the Telegram app using the TON network." }
      ],
      conclusion: "TON represents the push to make crypto invisible and easy for everyday people."
    }
  },
  { 
    id: 10, name: 'Cardano', symbol: 'ADA', desc: 'A research-driven, peer-reviewed blockchain.',
    article: {
      intro: "Cardano was founded by an Ethereum co-founder. It takes a slow, academic approach to building its network.",
      concepts: [
        { title: "Peer Review", text: "Before any code is added to Cardano, it is reviewed by university professors and scientists to ensure it won't break." },
        { title: "Proof of Stake", text: "It was one of the first major networks to use 'Staking' (holding coins to secure the network) instead of energy-heavy 'Mining'." }
      ],
      conclusion: "Cardano is the 'measure twice, cut once' blockchain of the crypto world."
    }
  },
  { 
    id: 11, name: 'Shiba Inu', symbol: 'SHIB', desc: 'The "Dogecoin Killer" built on Ethereum.',
    article: {
      intro: "Shiba Inu is another dog-themed meme coin, but unlike Dogecoin, it runs on the Ethereum network.",
      concepts: [
        { title: "Ecosystem", text: "It started as a joke but built a real ecosystem, including its own exchange (ShibaSwap) and a Layer 2 network (Shibarium)." },
        { title: "Micro-Pricing", text: "Because there are trillions of SHIB, one coin is worth a fraction of a penny, making people feel like they hold a lot." }
      ],
      conclusion: "SHIB evolved from a pure meme into a massive community-driven tech project."
    }
  },
  { 
    id: 12, name: 'Avalanche', symbol: 'AVAX', desc: 'A highly scalable and customizable blockchain.',
    article: {
      intro: "Avalanche is an Ethereum competitor focused on blazing fast 'finality' (how quickly a transaction becomes permanent).",
      concepts: [
        { title: "Subnets", text: "Avalanche allows companies to build their own custom, private mini-blockchains that connect to the main network." },
        { title: "Three Chains", text: "Instead of one blockchain doing all the work, Avalanche splits tasks across three separate chains to stay fast." }
      ],
      conclusion: "Avalanche is highly favored by institutions looking to build custom financial apps."
    }
  },
  { 
    id: 13, name: 'Polkadot', symbol: 'DOT', desc: 'The network that connects other blockchains.',
    article: {
      intro: "Normally, Bitcoin and Ethereum cannot talk to each other. Polkadot was built to act as the internet of blockchains.",
      concepts: [
        { title: "Parachains", text: "Polkadot has a central ring, and other independent blockchains plug into it like spokes on a wheel to share data." },
        { title: "Interoperability", text: "This is a fancy word meaning 'working together'. Polkadot lets a smart contract on Ethereum trigger a payment on Bitcoin." }
      ],
      conclusion: "Polkadot envisions a future where many specialized blockchains work together smoothly."
    }
  },
  { 
    id: 14, name: 'Tron', symbol: 'TRX', desc: 'Focused on digital entertainment and stablecoins.',
    article: {
      intro: "Tron was created to decentralize the internet, particularly focusing on content creators and gaming.",
      concepts: [
        { title: "Content Sharing", text: "It allows artists to share content and get paid directly by consumers without YouTube or Spotify taking a cut." },
        { title: "USDT King", text: "Today, Tron's biggest use case is moving the USDT stablecoin. It is heavily used in developing nations because fees are tiny." }
      ],
      conclusion: "Tron has found massive real-world success as a cheap network for sending digital dollars."
    }
  },
  { 
    id: 15, name: 'Bitcoin Cash', symbol: 'BCH', desc: 'A modified version of Bitcoin meant for daily spending.',
    article: {
      intro: "In 2017, the Bitcoin community argued about how to handle slow speeds. The network split in two (a 'fork'), creating Bitcoin Cash.",
      concepts: [
        { title: "Bigger Blocks", text: "BCH increased the 'box size' of the blockchain. This means more transactions fit in one box, making it faster and cheaper." },
        { title: "Medium of Exchange", text: "While regular Bitcoin is treated like gold to be saved, BCH is designed to be used like cash to buy coffee." }
      ],
      conclusion: "BCH remains a popular choice for merchants who want to accept crypto for cheap payments."
    }
  },
  { 
    id: 16, name: 'Chainlink', symbol: 'LINK', desc: 'Connects blockchains to real-world data.',
    article: {
      intro: "Blockchains are blind; they only know what is inside their own network. Chainlink acts as their eyes and ears to the outside world.",
      concepts: [
        { title: "Oracles", text: "An Oracle is a messenger. Chainlink uses Oracles to fetch real-world data (like the weather or stock prices) and feed it to smart contracts safely." },
        { title: "Data Security", text: "Instead of trusting one website for a price, Chainlink asks hundreds of sources, ensuring the data cannot be faked or hacked." }
      ],
      conclusion: "Chainlink is the invisible backbone of Decentralized Finance (DeFi)."
    }
  },
  { 
    id: 17, name: 'Polygon', symbol: 'MATIC', desc: 'A "Layer 2" helper that makes Ethereum faster.',
    article: {
      intro: "When Ethereum gets busy, it gets incredibly expensive. Polygon is a side-road that helps bypass the Ethereum traffic jam.",
      concepts: [
        { title: "Layer 2 (L2)", text: "Polygon processes thousands of transactions off the main Ethereum network, bundles them up, and sends a single receipt back to Ethereum." },
        { title: "Scaling", text: "This process makes using Ethereum apps almost free while still keeping the top-level security of the main network." }
      ],
      conclusion: "Polygon has partnered with massive brands like Starbucks, Nike, and Disney to bring them into Web3."
    }
  },
  { 
    id: 18, name: 'Near Protocol', symbol: 'NEAR', desc: 'A user-friendly, high-speed blockchain.',
    article: {
      intro: "Near was built to be so easy to use that your grandmother wouldn't realize she is using a blockchain.",
      concepts: [
        { title: "Human Readable Wallets", text: "Instead of complex addresses like '0x71a...', your Near wallet can just be 'mazen.near'." },
        { title: "Sharding", text: "Near splits its network into smaller pieces (shards) so it can handle heavy traffic without slowing down." }
      ],
      conclusion: "Near bridges the gap between complex crypto tech and normal user experience."
    }
  },
  { 
    id: 19, name: 'Internet Computer', symbol: 'ICP', desc: 'Aims to replace traditional cloud computing.',
    article: {
      intro: "ICP wants to rebuild the internet so we don't have to rely on giant servers owned by Amazon (AWS) or Google.",
      concepts: [
        { title: "Decentralized Web", text: "ICP can host entire websites and social media platforms directly on the blockchain, making them un-censorable." },
        { title: "Reverse Gas Model", text: "Unlike Ethereum where the user pays a fee to click a button, on ICP, the developer pre-pays the fees so the app is free for users." }
      ],
      conclusion: "ICP is highly ambitious, attempting to reinvent how the internet itself is hosted."
    }
  },
  { 
    id: 20, name: 'Litecoin', symbol: 'LTC', desc: 'The silver to Bitcoin’s gold.',
    article: {
      intro: "Created in 2011, Litecoin is one of the oldest altcoins. It is almost an exact copy of Bitcoin, but tweaked to be faster.",
      concepts: [
        { title: "Faster Blocks", text: "Bitcoin creates a block of transactions every 10 minutes. Litecoin does it every 2.5 minutes." },
        { title: "Test Network", text: "Because it is so similar to Bitcoin, developers often test new upgrades on Litecoin before putting them on Bitcoin." }
      ],
      conclusion: "Litecoin has survived over a decade simply by being a reliable, faster version of Bitcoin."
    }
  },
  { id: 21, name: 'Dai', symbol: 'DAI', desc: 'A decentralized stablecoin.', article: { intro: "Unlike USDT which is controlled by a company, DAI is a stablecoin run entirely by code.", concepts: [{ title: "Over-collateralization", text: "To make $1 of DAI, users must lock up $1.50 of Ethereum in a smart contract." }, { title: "Censorship Resistant", text: "Because no company runs it, no one can freeze or delete your DAI." }], conclusion: "DAI is the true crypto-native dollar." } },
  { id: 22, name: 'Uniswap', symbol: 'UNI', desc: 'The largest decentralized exchange.', article: { intro: "Uniswap lets you swap coins without creating an account or giving up your ID.", concepts: [{ title: "Automated Market Maker (AMM)", text: "Instead of matching buyers and sellers, users trade against a pool of money managed by a robot." }, { title: "Liquidity Pools", text: "Anyone can put their money into the pool and earn trading fees in return." }], conclusion: "Uniswap changed how trading works forever." } },
  { id: 23, name: 'Aptos', symbol: 'APT', desc: 'A high-performance chain built by ex-Facebook engineers.', article: { intro: "Aptos was born from the ashes of Facebook's canceled crypto project.", concepts: [{ title: "Move Language", text: "It uses a new, highly secure coding language called 'Move' designed to prevent hacks." }, { title: "Parallel Execution", text: "It processes multiple transactions at the same time, unlike older chains that do them one by one." }], conclusion: "Aptos is a heavy hitter in the race for the fastest blockchain." } },
  { id: 24, name: 'Stacks', symbol: 'STX', desc: 'Brings smart contracts to Bitcoin.', article: { intro: "Bitcoin cannot run apps natively. Stacks is a layer built on top of Bitcoin that makes it possible.", concepts: [{ title: "Proof of Transfer", text: "Miners use real Bitcoin to mine STX, directly linking Stacks' security to Bitcoin." }, { title: "Bitcoin DeFi", text: "It allows people to finally build Decentralized Finance apps using Bitcoin." }], conclusion: "Stacks unlocks the massive dormant capital sitting in Bitcoin." } },
  { id: 25, name: 'Optimism', symbol: 'OP', desc: 'A fast Layer 2 scaling solution for Ethereum.', article: { intro: "Optimism processes Ethereum transactions much cheaper and faster.", concepts: [{ title: "Optimistic Rollups", text: "It assumes all transactions are valid to save time, unless someone proves otherwise." }, { title: "Superchain", text: "They are building a network of multiple Layer 2s that all talk to each other seamlessly." }], conclusion: "Optimism is vital for keeping Ethereum usable for normal people." } },
  { id: 26, name: 'Arbitrum', symbol: 'ARB', desc: 'The most popular Layer 2 on Ethereum.', article: { intro: "Arbitrum is Optimism's biggest rival and currently holds the most money among Layer 2s.", concepts: [{ title: "Defi Hub", text: "It has become the premier destination for advanced decentralized trading apps." }, { title: "Lower Fees", text: "It bundles thousands of transactions together before sending them to Ethereum, dividing the cost." }], conclusion: "Arbitrum is the current king of Ethereum scaling." } },
  { id: 27, name: 'Filecoin', symbol: 'FIL', desc: 'A decentralized hard drive for the internet.', article: { intro: "Filecoin lets anyone rent out their spare computer storage space.", concepts: [{ title: "Cloud Storage", text: "Instead of storing files on Google Drive, your files are encrypted and split across computers globally." }, { title: "Marketplace", text: "You pay FIL to store files, and storage providers earn FIL for holding them securely." }], conclusion: "Filecoin aims to make internet storage cheaper and unhackable." } },
  { id: 28, name: 'Render', symbol: 'RNDR', desc: 'Decentralized 3D rendering and AI computing.', article: { intro: "Render connects artists who need massive computer power with people who have spare GPUs.", concepts: [{ title: "GPU Network", text: "Creating 3D animations takes huge computing power. Render farms it out globally." }, { title: "AI Boom", text: "It is now highly popular for training Artificial Intelligence models." }], conclusion: "Render is the Uber for graphics processing units (GPUs)." } },
  { id: 29, name: 'Cosmos', symbol: 'ATOM', desc: 'The internet of independent blockchains.', article: { intro: "Cosmos allows developers to easily launch their own custom blockchains that can talk to each other.", concepts: [{ title: "Cosmos SDK", text: "A tool kit that makes building a new blockchain as easy as building a website." }, { title: "IBC", text: "Inter-Blockchain Communication. The standard that lets these chains send money back and forth." }], conclusion: "Cosmos believes the future is thousands of connected mini-chains." } },
  { id: 30, name: 'Maker', symbol: 'MKR', desc: 'The central bank of crypto.', article: { intro: "Maker is the organization that manages the DAI stablecoin.", concepts: [{ title: "Governance", text: "Holding MKR tokens gives you the right to vote on interest rates and rules for the DAI system." }, { title: "Lender of Last Resort", text: "If the system crashes, MKR tokens are automatically created and sold to pay off bad debts." }], conclusion: "Maker is one of the oldest and most successful Decentralized Autonomous Organizations (DAOs)." } },
  { id: 31, name: 'Injective', symbol: 'INJ', desc: 'A blockchain built specifically for finance.', article: { intro: "Injective is optimized for building decentralized crypto exchanges.", concepts: [{ title: "Orderbook Module", text: "It has a built-in trading engine so developers can build apps that look like Binance." }, { title: "Zero Gas Fees", text: "For users trading on Injective apps, transaction fees are virtually zero." }], conclusion: "Injective is a powerhouse for advanced crypto traders." } },
  { id: 32, name: 'Stellar', symbol: 'XLM', desc: 'Banking the unbanked.', article: { intro: "Stellar is a cousin to XRP, but focused on helping individuals rather than massive banks.", concepts: [{ title: "Micro-payments", text: "It allows people in developing nations to send fractions of a penny across borders instantly." }, { title: "Asset Issuance", text: "It is very easy to create digital versions of local currencies on the Stellar network." }], conclusion: "Stellar focuses on financial inclusion for everyday people." } },
  { id: 33, name: 'VeChain', symbol: 'VET', desc: 'Blockchain for supply chain tracking.', article: { intro: "VeChain tracks physical items (like wine, luxury bags, or car parts) on the blockchain.", concepts: [{ title: "NFC Chips", text: "Physical items get a smart chip. When scanned with a phone, the blockchain proves it isn't fake." }, { title: "Enterprise Use", text: "It is heavily used by massive companies like Walmart China to track food safety." }], conclusion: "VeChain is the premier crypto project for the physical world." } },
  { id: 34, name: 'The Graph', symbol: 'GRT', desc: 'The Google search engine for blockchains.', article: { intro: "Blockchains hold a lot of data, but searching through it is very hard. The Graph fixes this.", concepts: [{ title: "Indexing", text: "It organizes blockchain data so apps can query it instantly." }, { title: "Subgraphs", text: "Developers create 'Subgraphs' which are specific data feeds (like 'find all Uniswap trades')." }], conclusion: "Without The Graph, most decentralized apps would take minutes to load." } },
  { id: 35, name: 'Theta Network', symbol: 'THETA', desc: 'Decentralized video streaming.', article: { intro: "Theta aims to make video streaming (like YouTube or Twitch) cheaper and higher quality.", concepts: [{ title: "Bandwidth Sharing", text: "Viewers share their spare internet bandwidth to help stream the video to their neighbors." }, { title: "Rewards", text: "You earn tokens just for watching videos and letting your computer help the network." }], conclusion: "Theta reduces the massive server costs for streaming companies." } },
  { id: 36, name: 'ThorChain', symbol: 'RUNE', desc: 'Trade native coins across different blockchains.', article: { intro: "ThorChain lets you trade real Bitcoin for real Ethereum without using a centralized exchange.", concepts: [{ title: "No Wrapping", text: "Usually, you have to use 'fake' placeholder tokens to cross chains. Thorchain swaps the actual, real coins." }, { title: "Liquidity Nodes", text: "Users provide their coins to the network to facilitate these swaps and earn high interest." }], conclusion: "ThorChain is vital for truly decentralized, cross-chain trading." } },
  { id: 37, name: 'Fantom', symbol: 'FTM', desc: 'A highly scalable smart contract platform.', article: { intro: "Fantom is another fast, cheap alternative to Ethereum, heavily focused on DeFi.", concepts: [{ title: "DAG Tech", text: "It doesn't use a traditional blockchain, but a web-like structure called a Directed Acyclic Graph." }, { title: "Independent Networks", text: "Every app on Fantom gets its own independent blockchain to prevent traffic jams." }], conclusion: "Fantom is beloved by hardcore 'yield farmers' in the DeFi space." } },
  { id: 38, name: 'Lido DAO', symbol: 'LDO', desc: 'The biggest liquid staking platform.', article: { intro: "Lido lets you earn interest on your Ethereum without locking it up permanently.", concepts: [{ title: "Liquid Staking", text: "When you deposit ETH, they give you 'stETH' (Staked ETH) back, which you can still trade or use." }, { title: "Network Security", text: "Lido is so large it secures a massive percentage of the entire Ethereum network." }], conclusion: "Lido changed the game by making staking flexible." } },
  { id: 39, name: 'Celestia', symbol: 'TIA', desc: 'The first modular blockchain.', article: { intro: "Celestia does not run smart contracts. It only handles data and security.", concepts: [{ title: "Data Availability", text: "It ensures the data for transactions is available and correct, letting other networks handle the actual math." }, { title: "Modular Future", text: "It allows developers to launch their own blockchain as easily as deploying a smart contract." }], conclusion: "Celestia introduced a totally new way to design blockchains." } },
  { id: 40, name: 'Sei', symbol: 'SEI', desc: 'The fastest Layer 1 for trading.', article: { intro: "Sei is built from the ground up to be the ultimate trading blockchain.", concepts: [{ title: "Sub-second Finality", text: "Transactions are permanent in less than half a second, making it feel like a traditional web app." }, { title: "Twin-Turbo Consensus", text: "A custom engine that drastically speeds up how blocks get approved." }], conclusion: "Sei is designed specifically for high-frequency crypto trading." } },
  { id: 41, name: 'Sui', symbol: 'SUI', desc: 'An object-oriented blockchain.', article: { intro: "Built by ex-Facebook engineers, Sui treats data differently than other chains.", concepts: [{ title: "Objects, not Accounts", text: "Instead of focusing on user accounts, Sui focuses on digital objects (like a sword in a game)." }, { title: "Instant Transactions", text: "Simple transactions bypass the complex consensus process, making them instant." }], conclusion: "Sui is highly favored by game developers for its unique architecture." } },
  { id: 42, name: 'Kaspa', symbol: 'KAS', desc: 'The fastest Proof-of-Work coin.', article: { intro: "Kaspa uses 'Mining' like Bitcoin, but is incredibly fast.", concepts: [{ title: "BlockDAG", text: "Instead of a single chain of blocks, it allows multiple blocks to be created simultaneously." }, { title: "Fair Launch", text: "It was launched with no pre-mining or venture capital money, just like Bitcoin." }], conclusion: "Kaspa is trying to be what Bitcoin was originally meant to be: fast digital cash." } },
  { id: 43, name: 'Algorand', symbol: 'ALGO', desc: 'Pure Proof of Stake blockchain.', article: { intro: "Created by an MIT professor, Algorand solves the 'blockchain trilemma' (Security, Speed, Decentralization).", concepts: [{ title: "No Forking", text: "The math guarantees the blockchain will never split in two, making it highly reliable." }, { title: "Instant Finality", text: "Transactions cannot be reversed once they are made." }], conclusion: "Algorand is favored by institutions and governments for its mathematical perfection." } },
  { id: 44, name: 'Arweave', symbol: 'AR', desc: 'Permanent data storage.', article: { intro: "Arweave is a hard drive that never deletes anything. Ever.", concepts: [{ title: "The Permaweb", text: "You pay a one-time fee, and your data (like a website or historical documents) is stored forever." }, { title: "Endowment", text: "The fee you pay generates interest over time to pay the computers holding your data." }], conclusion: "Arweave ensures human history and knowledge cannot be erased." } },
  { id: 45, name: 'Flow', symbol: 'FLOW', desc: 'Built for NFTs and gaming.', article: { intro: "Created by the team behind CryptoKitties, Flow is designed to handle mainstream NFT collections.", concepts: [{ title: "NBA Top Shot", text: "Flow powers massive NFT projects like NBA Top Shot and NFL All Day." }, { title: "Multi-Role Architecture", text: "It splits the work of a blockchain into four different roles to prevent network crashes." }], conclusion: "Flow is the blockchain trusted by major sports and entertainment brands." } },
  { id: 46, name: 'MultiversX', symbol: 'EGLD', desc: 'A highly scalable internet scale blockchain.', article: { intro: "Formerly known as Elrond, this chain uses 'sharding' to achieve massive speeds.", concepts: [{ title: "Adaptive State Sharding", text: "It splits the network into smaller pieces (shards) that process transactions in parallel." }, { title: "Metaverse Focus", text: "It recently rebranded to focus heavily on powering the digital economy of the Metaverse." }], conclusion: "MultiversX can process tens of thousands of transactions per second." } },
  { id: 47, name: 'Gala', symbol: 'GALA', desc: 'Blockchain gaming ecosystem.', article: { intro: "Gala is a platform for making blockchain games that you actually want to play.", concepts: [{ title: "Player Ownership", text: "If you earn a magical sword in a Gala game, you truly own it and can sell it to someone else." }, { title: "Node Network", text: "Players can run 'Nodes' on their home computers to help run the games and earn rewards." }], conclusion: "Gala puts the power of the gaming industry back into the hands of players." } },
  { id: 48, name: 'Quant', symbol: 'QNT', desc: 'Connecting enterprise software to blockchain.', article: { intro: "Quant focuses entirely on big businesses and banks, rather than retail consumers.", concepts: [{ title: "Overledger", text: "An operating system that lets massive corporations connect their old private networks to any public blockchain." }, { title: "CBDCs", text: "They are actively working with governments to help launch Central Bank Digital Currencies." }], conclusion: "Quant is the enterprise gateway to the blockchain world." } },
  { id: 49, name: 'The Sandbox', symbol: 'SAND', desc: 'A virtual Metaverse world.', article: { intro: "The Sandbox is a Minecraft-like virtual world where players own the land.", concepts: [{ title: "Virtual Real Estate", text: "Users can buy parcels of digital land (LAND) as NFTs and build games or art galleries on them." }, { title: "Voxel Art", text: "Players can create 3D assets, animate them, and sell them in the marketplace." }], conclusion: "The Sandbox is one of the pioneers of the digital ownership Metaverse." } },
  { id: 50, name: 'Decentraland', symbol: 'MANA', desc: 'The first fully decentralized virtual world.', article: { intro: "Decentraland is a 3D browser-based world where users explore, play, and socialize.", concepts: [{ title: "DAO Governed", text: "The entire world is governed by the players who hold the MANA token. No company is in charge." }, { title: "Digital Economy", text: "People have hosted digital concerts, casinos, and corporate headquarters inside the game." }], conclusion: "Decentraland is the premier experiment in decentralized, virtual societies." } }
];

// --- DATA: 2. CRYPTO APPLICATIONS ---
const APPLICATIONS = [
  { sector: 'DeFi (Decentralized Finance)', desc: 'Borrowing, lending, and trading without traditional banks using smart contracts.' },
  { sector: 'Supply Chain Management', desc: 'Tracking products from the factory to the store shelf so you know they are authentic.' },
  { sector: 'Digital Identity', desc: 'Proving who you are online without giving giant tech companies your private data.' },
  { sector: 'GameFi & Gaming', desc: 'Allowing players to truly own their in-game items (swords, skins) as NFTs.' },
  { sector: 'Real Estate Tokenization', desc: 'Splitting the ownership of a physical building into thousands of digital tokens.' },
  { sector: 'Healthcare Records', desc: 'Storing patient history securely so different hospitals can access it safely.' },
  { sector: 'Voting Systems', desc: 'Creating unhackable, transparent digital voting booths for elections.' },
  { sector: 'Creator Economy', desc: 'Allowing musicians and artists to get paid directly by fans without record labels.' },
];

// --- DATA: 3. CRYPTO PAPERS (TOP 20) ---
// --- DATA: 3. CRYPTO PAPERS (TOP 10) ---
const PAPERS = [
  { 
    id: 1, 
    title: 'Bitcoin: A Peer-to-Peer Electronic Cash System', 
    author: 'Satoshi Nakamoto (2008)',
    pdfUrl: 'https://bitcoin.org/bitcoin.pdf',
    summary: [
      "The Bitcoin whitepaper is the foundational document of the entire cryptocurrency industry. Published in late 2008 by a mysterious creator named Satoshi Nakamoto, it introduced a way to send digital money directly from one person to another without needing a bank to verify the transaction.",
      "Nakamoto solved the 'double-spending' problem—the risk that someone could copy and paste digital money—by creating a public network where thousands of computers double-check every transaction. This verification process is called 'Proof of Work' (or mining).",
      "By chaining these verified batches of transactions together, the system creates an unbreakable digital history book. This paper laid the groundwork for the modern blockchain and proved that decentralized, trustless money was actually possible."
    ]
  },
  { 
    id: 2, 
    title: 'Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform', 
    author: 'Vitalik Buterin (2014)',
    pdfUrl: 'https://ethereum.org/en/whitepaper/', 
    summary: [
      "While Bitcoin proved that a blockchain could securely track money, Vitalik Buterin realized the technology could do much more. The Ethereum whitepaper introduced the concept of a decentralized 'world computer'.",
      "The massive breakthrough here is the 'Smart Contract'. Think of a Smart Contract as a digital vending machine: if you insert the right amount of money and press a button, it automatically releases your item. The rules are written in code, and because they live on the blockchain, no human can stop or alter the transaction.",
      ,
      "This document shifted the crypto world from simply sending digital cash to building unstoppable applications, creating the foundation for NFTs and modern crypto finance."
    ]
  },
  { 
    id: 3, 
    title: 'Uniswap v3 Core', 
    author: 'Hayden Adams, Noah Zinsmeister, et al. (2021)',
    pdfUrl: 'https://uniswap.org/whitepaper-v3.pdf',
    summary: [
      "Uniswap is a Decentralized Exchange (DEX). Instead of a traditional stock market where human buyers and sellers are matched by a broker, Uniswap uses an AMM (Automated Market Maker)—a robot that holds pools of tokens and automatically calculates prices based on supply and demand.",
      "The v3 whitepaper introduced a massive upgrade called 'Concentrated Liquidity'. Previously, users who deposited money into the robot's pool had their funds spread out from $0 to infinity, which was highly inefficient.",
      "V3 allows users to set specific price limits on their money. By letting users concentrate their funds only where trading is actually happening, the platform became significantly faster and cheaper to use."
    ]
  },
  { 
    id: 4, 
    title: 'Solana: A new architecture for a high performance blockchain', 
    author: 'Anatoly Yakovenko (2017)',
    pdfUrl: 'https://solana.com/solana-whitepaper.pdf',
    summary: [
      "A major problem with older blockchains is speed. Because thousands of computers globally must agree on the exact order of transactions, the network acts like a massive traffic jam. The Solana whitepaper aims to solve this.",
      "Anatoly Yakovenko introduced 'Proof of History' (PoH). Instead of forcing all computers to constantly talk to each other to figure out the time, PoH acts as a cryptographic, synchronized digital clock. It automatically stamps every transaction with a verified time.",
      "Because the computers no longer have to wait to agree on the time, Solana can process thousands of transactions simultaneously, making it one of the fastest networks in the world."
    ]
  },
  { 
    id: 5, 
    title: 'Chainlink: A Decentralized Oracle Network', 
    author: 'Steve Ellis, Ari Juels, Sergey Nazarov (2017)',
    pdfUrl: 'https://research.chain.link/whitepaper-v1.pdf',
    summary: [
      "Blockchains are inherently 'blind'. They cannot see anything outside of their own network, which means a Smart Contract cannot know the current price of Apple stock or the weather in London. This is known as the 'Oracle Problem'.",
      "An Oracle is a digital messenger that fetches real-world data and brings it onto the blockchain. However, if you rely on just one messenger, they could lie or get hacked, ruining the security of the blockchain.",
      "The Chainlink whitepaper proposes a decentralized network of thousands of independent messengers. They all fetch the data, compare notes, and only deliver the information to the blockchain if the majority agrees it is true. This ensures Smart Contracts execute flawlessly based on real-world facts."
    ]
  },
  { 
    id: 6, 
    title: 'Polkadot: Vision for a Heterogeneous Multi-Chain Framework', 
    author: 'Gavin Wood (2016)',
    pdfUrl: 'https://polkadot.network/PolkaDotPaper.pdf',
    summary: [
      "In the early days of crypto, every new blockchain was its own isolated island. Bitcoin couldn't talk to Ethereum, and Ethereum couldn't talk to others. Polkadot was designed to be the bridges connecting these islands, a concept called 'Interoperability'.",
      "Gavin Wood, one of Ethereum's original co-founders, designed a system with a central hub (the Relay Chain) and multiple customizable branches (Parachains).",
      ,
      "This architecture allows specialized blockchains—like one built just for gaming and another built just for banking—to securely pass data and tokens back and forth, creating a unified web of networks."
    ]
  },
  { 
    id: 7, 
    title: 'MakerDAO: The Dai Stablecoin System', 
    author: 'The Maker Team (2017)',
    pdfUrl: 'https://makerdao.com/whitepaper/DaiDecentralizedStablecoin.pdf',
    summary: [
      "Cryptocurrencies are famous for their wild price swings, making them difficult to use for everyday shopping or loans. MakerDAO solved this by creating 'DAI', a decentralized Stablecoin designed to always be worth exactly $1.00.",
      "Unlike traditional stablecoins that hold real paper dollars in a bank account, DAI is entirely run by code. It works through 'Over-collateralization'. If you want to borrow $100 worth of DAI, you must lock up $150 worth of Ethereum in a smart vault.",
      "If the price of your Ethereum drops too much, the code automatically sells it to ensure the DAI in circulation is always fully backed by real value. This paper birthed the concept of decentralized banking."
    ]
  },
  { 
    id: 8, 
    title: 'Ouroboros: A Provably Secure Proof-of-Stake Protocol (Cardano)', 
    author: 'Aggelos Kiayias, et al. (2017)',
    pdfUrl: 'https://eprint.iacr.org/2016/889.pdf',
    summary: [
      "Bitcoin relies on 'Proof of Work' (mining), which consumes massive amounts of electricity. The alternative is 'Proof of Stake' (PoS), where users lock up their coins to secure the network instead of burning electricity. However, early PoS systems were considered vulnerable to hacks.",
      "Ouroboros is the mathematical protocol that powers the Cardano blockchain. It was the first Proof of Stake algorithm to be peer-reviewed by academic cryptographers and mathematically proven to be just as secure as Bitcoin.",
      "This paper is highly technical, but its main achievement was proving that blockchains could be environmentally friendly without sacrificing the safety of user funds."
    ]
  },
  { 
    id: 9, 
    title: 'Filecoin: A Decentralized Storage Network', 
    author: 'Protocol Labs (2017)',
    pdfUrl: 'https://filecoin.io/filecoin.pdf',
    summary: [
      "Today, most of the internet's data is stored in massive warehouses owned by Google, Amazon, and Microsoft. Filecoin's whitepaper outlines a network to turn global cloud storage into an open, algorithmic market.",
      "Instead of paying a massive tech company, you pay network participants with Filecoin tokens to store your files. These participants prove they are holding your data safely using two novel cryptographic checks: 'Proof of Replication' (proving they made a unique copy) and 'Proof of Spacetime' (proving they stored it for the agreed duration).",
      "This creates a censorship-resistant internet where anyone with spare hard drive space can become a paid storage provider."
    ]
  },
  { 
    id: 10, 
    title: 'Avalanche: A Novel Metastable Consensus Protocol Family', 
    author: 'Team Rocket (2018)',
    pdfUrl: 'https://www.avalabs.org/whitepapers',
    summary: [
      "Avalanche introduced a completely new way for computers to reach an agreement (Consensus). Instead of having one leader dictate the next block of transactions, Avalanche uses a system inspired by gossip.",
      "When a transaction occurs, the computers randomly ask a small group of their neighbors if the transaction is valid. Those neighbors ask their neighbors, and a ripple effect quickly spreads across the entire network until everyone agrees.",
      "This 'sub-sampling' method allows the Avalanche network to process thousands of transactions per second, with the transfer becoming totally permanent and irreversible in under two seconds."
    ]
  }
];

// --- DATA: 4. CRYPTOGRAPHY ---
const CRYPTOGRAPHY = [
  { title: 'What is Cryptography?', text: 'The science of hiding information. It is the math that keeps your passwords and money safe.' },
  { title: 'Hash Functions (SHA-256)', text: 'A mathematical blender. You put data in, and it spits out a unique digital fingerprint. If you change even one letter, the fingerprint changes entirely.' },
  { title: 'Public & Private Keys', text: 'Public Key = Your home address (safe to share so people can send you money). Private Key = Your house key (never share it, or they can take your money).' },
  { title: 'Digital Signatures', text: 'A way to prove you sent a message without revealing your password, using complex math.' },
];

// --- DATA: 5. BLOCKCHAIN ---
const BLOCKCHAIN = [
  { title: 'What is a Block?', text: 'A digital box filled with transaction records (like a page in an accounting book).' },
  { title: 'The Chain', text: 'Every new block is mathematically glued to the previous block. You cannot change an old block without breaking the whole chain.' },
  { title: 'Decentralization', text: 'Instead of one company keeping the records, thousands of random computers around the world all keep a copy of the exact same records.' },
  { title: 'Consensus (How they agree)', text: 'The computers must vote to agree on which transactions are real. This prevents hackers from making fake money.' },
];

// --- DATA: 6. NEWS ---
const NEWS = [
  { headline: 'Major Bank Adopts Blockchain for Settlement', date: 'Today', source: 'Crypto Insider' },
  { headline: 'New Privacy Regulations Announced in Europe', date: 'Yesterday', source: 'Block Daily' },
  { headline: 'Ethereum Network Upgrade Successfully Completed', date: '2 days ago', source: 'Tech Node' },
  { headline: 'Institutions Increase Crypto Asset Holdings by 15%', date: '1 week ago', source: 'Financial Times' },
];

// --- DATA: 7. NEW PROJECTS ---
const NEW_PROJECTS = [
  { name: 'Hyperliquid', tag: 'DeFi L1', desc: 'A custom-built blockchain specifically designed to run a blazing fast decentralized crypto exchange.' },
  { name: 'Celestia', tag: 'Modular Data', desc: 'A "modular" blockchain that only handles data availability, letting other chains build on top of it easily.' },
  { name: 'Monad', tag: 'Parallel EVM', desc: 'A highly anticipated project that takes Ethereum apps but runs them simultaneously (parallel) to make them incredibly fast.' },
  { name: 'EigenLayer', tag: 'Restaking', desc: 'Allows users to take their already-staked Ethereum and use it to secure other smaller networks.' },
];

// --- DATA: 8. CODING ---
const CODING_PROJECTS = [
  { difficulty: 'Beginner', title: 'Write a Smart Contract', desc: 'Learn Solidity. Write a simple contract that says "Hello World" and stores a number on the blockchain.' },
  { difficulty: 'Beginner', title: 'Create an ERC-20 Token', desc: 'Code your own custom cryptocurrency (like "MazenCoin") in under 50 lines of code.' },
  { difficulty: 'Intermediate', title: 'Mint an NFT Collection', desc: 'Write the code to generate digital art and allow users to mint (buy) them on a website.' },
  { difficulty: 'Intermediate', title: 'Build a DApp Frontend', desc: 'Use React.js and Ethers.js to build a website with a "Connect Wallet" button that reads blockchain data.' },
  { difficulty: 'Advanced', title: 'Code a Python Trading Bot', desc: 'Use Python and exchange APIs to write a bot that automatically buys and sells based on math rules.' },
];

// --- DATA: 9. CERTIFICATIONS ---
const CERTIFICATIONS = [
  { id: 1, title: 'Crypto Expert', icon: '🧠', desc: 'Master the fundamentals of cryptocurrency markets, trading, and security to navigate the ecosystem confidently.' },
  { id: 2, title: 'Blockchain Developer', icon: '💻', desc: 'Learn to code smart contracts using Solidity and build decentralized applications (DApps) on Ethereum.' },
  { id: 3, title: 'Blockchain Consultant', icon: '💼', desc: 'Advise enterprise businesses on implementing blockchain technology to solve real-world supply chain and data problems.' },
  { id: 4, title: 'Crypto & Blockchain Researcher', icon: '🔬', desc: 'Dive deep into protocol design, cryptography, consensus mechanisms, and academic whitepapers.' },
];

// --- DATA: 10. SUBSCRIPTION PLANS ---
const PLANS = [
  { id: 'free', name: 'Free Plan', price: '€0', period: '/mo', color: '#94a3b8', features: ['Access to Top Projects', 'Basic Cryptography Lessons', 'Community Forum Access'] },
  { id: 'student', name: 'Student Plan', price: '€5', period: '/mo', color: '#10b981', features: ['Everything in Free', 'Access to Crypto Papers', 'Developer & Coding Zone'] },
  { id: 'discovery', name: 'Discovery Plan', price: '€10', period: '/mo', color: '#3b82f6', features: ['Everything in Student', 'Real-World Applications', 'Weekly Industry News'] },
  { id: 'pro', name: 'Pro Plan', price: '€20', period: '/mo', color: '#8b5cf6', features: ['Everything in Discovery', 'Official Certifications', '1-on-1 Teacher Support'] },
];

// --- MAIN APP ---
function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null); 
  const [selectedPaper, setSelectedPaper] = useState(null); 
  const [authMode, setAuthMode] = useState(null); 

  const handleTabClick = (id) => {
    setActiveTab(id);
    setSelectedProject(null); 
    setSelectedPaper(null); 
  };

  const NavButton = ({ id, icon, label }) => (
    <button className={`nav-btn ${activeTab === id ? 'active' : ''}`} onClick={() => handleTabClick(id)}>
      <span className="nav-icon">{icon}</span> {label}
    </button>
  );

  return (
    <div className="container">
      
      {/* --- AUTHENTICATION MODAL --- */}
      {authMode && (
        <div className="modal-overlay" onClick={() => setAuthMode(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setAuthMode(null)}>×</button>
            <h3>{authMode === 'login' ? 'Sign In' : 'Create an Account'}</h3>
            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="submit-btn">{authMode === 'login' ? 'Sign In' : 'Sign Up'}</button>
            </form>
            <p className="auth-switch">
              {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}>
                {authMode === 'login' ? 'Sign Up' : 'Sign In'}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* --- SIDEBAR NAVIGATION --- */}
      <div className="sidebar">
        <h1 className="logo">Blokly <span className="logo-accent">Academy</span></h1>
        
        {/* Main Navigation (Scrollable) */}
        <div className="nav-menu">
          <NavButton id="projects" icon="🪙" label="Crypto Projects" />
          <NavButton id="applications" icon="📱" label="Crypto Applications" />
          <NavButton id="papers" icon="📄" label="Crypto Papers" />
          <NavButton id="cryptography" icon="🔐" label="Cryptography" />
          <NavButton id="blockchain" icon="🔗" label="Blockchain Tech" />
          <NavButton id="news" icon="📰" label="Latest News" />
          <NavButton id="newProjects" icon="🚀" label="New Projects" />
          <NavButton id="coding" icon="💻" label="Coding & Dev" />
        </div>
        
        {/* Bottom Navigation (Pinned to bottom left) */}
        <div className="sidebar-bottom">
          <NavButton id="certifications" icon="🎓" label="Certifications" />
          <NavButton id="subscription" icon="💳" label="Subscription" />
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="main">
        <div className="header">
          <div className="header-text">
            <h2>
              {activeTab === 'projects' && !selectedProject && 'Top Crypto Projects'}
              {activeTab === 'projects' && selectedProject && 'Project Lesson'}
              {activeTab === 'applications' && 'Real-World Applications'}
              {activeTab === 'papers' && !selectedPaper && 'Legendary Crypto Papers'}
              {activeTab === 'papers' && selectedPaper && 'Paper Reading Room'}
              {activeTab === 'cryptography' && 'Learn Cryptography'}
              {activeTab === 'blockchain' && 'Learn Blockchain'}
              {activeTab === 'news' && 'Industry News'}
              {activeTab === 'newProjects' && 'Innovative New Tech'}
              {activeTab === 'coding' && 'Developer Zone'}
              {activeTab === 'certifications' && 'Official Certifications'}
              {activeTab === 'subscription' && 'Choose Your Plan'}
            </h2>
            <p className="subtitle">Expand your knowledge step by step.</p>
          </div>
          <div className="auth-buttons">
            <button className="auth-btn-outline" onClick={() => setAuthMode('login')}>Sign In</button>
            <button className="auth-btn-solid" onClick={() => setAuthMode('signup')}>Create Account</button>
          </div>
        </div>

        <div className="content">
          
          {/* 1. PROJECTS (GRID VIEW) */}
          {activeTab === 'projects' && !selectedProject && (
            <div className="grid-list">
              {TOP_50_CRYPTOS.map((coin) => (
                <div key={coin.id} className="edu-card clickable-card" onClick={() => setSelectedProject(coin)}>
                  <div className="card-top-row">
                    <h3>{coin.name}</h3>
                    <span className="symbol-badge">{coin.symbol}</span>
                  </div>
                  <p className="card-text">{coin.desc}</p>
                  <span className="read-more-link">Read Lesson →</span>
                </div>
              ))}
            </div>
          )}

          {/* 1A. PROJECT DETAIL (ARTICLE VIEW) */}
          {activeTab === 'projects' && selectedProject && (
            <div className="article-view">
              <button className="back-btn" onClick={() => setSelectedProject(null)}>← Back to Projects</button>
              <div className="article-header">
                <h2>{selectedProject.name} ({selectedProject.symbol})</h2>
              </div>
              {selectedProject.article ? (
                <div className="article-content">
                  <p className="article-intro">{selectedProject.article.intro}</p>
                  <div className="concept-list">
                    {selectedProject.article.concepts.map((concept, idx) => (
                      <div key={idx} className="concept-box">
                        <h4 className="concept-title">{concept.title}</h4>
                        <p className="concept-text">{concept.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="article-conclusion">
                    <p>{selectedProject.article.conclusion}</p>
                  </div>
                </div>
              ) : (
                <div className="placeholder-box">
                  <span className="placeholder-icon">✍️</span>
                  <h3>Lesson in Progress</h3>
                  <p>The professor is currently writing the detailed lesson for {selectedProject.name}. Check back soon!</p>
                </div>
              )}
            </div>
          )}

          {/* 2. APPLICATIONS */}
          {activeTab === 'applications' && (
            <div className="grid-list">
              {APPLICATIONS.map((app, i) => (
                <div key={i} className="edu-card highlight-border">
                  <h3>{app.sector}</h3>
                  <p className="card-text">{app.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* 3. PAPERS (LIST VIEW) */}
          {activeTab === 'papers' && !selectedPaper && (
            <div className="list-layout">
              {PAPERS.map((paper) => (
                <div key={paper.id} className="list-item clickable-card" onClick={() => setSelectedPaper(paper)}>
                  <span className="rank-num">#{paper.id}</span>
                  <div className="paper-info">
                    <h4 className="paper-title">{paper.title}</h4>
                    <p className="paper-author">{paper.author}</p>
                  </div>
                  <span className="read-more-link" style={{marginLeft: 'auto'}}>Read Paper & Summary →</span>
                </div>
              ))}
            </div>
          )}

          {/* 3A. PAPER DETAIL (READING VIEW WITH PDF) */}
          {activeTab === 'papers' && selectedPaper && (
            <div className="article-view">
              <button className="back-btn" onClick={() => setSelectedPaper(null)}>← Back to Papers</button>
              <div className="article-header">
                <h2>{selectedPaper.title}</h2>
                <p className="paper-author-large">By {selectedPaper.author}</p>
              </div>
              <div className="article-content">
                <h3 className="section-title">Teacher's Summary & Breakdown</h3>
                <div className="concept-box" style={{marginBottom: '40px'}}>
                  {selectedPaper.summary.map((paragraph, idx) => (
                    <p key={idx} className="concept-text" style={{marginBottom: '15px'}}>{paragraph}</p>
                  ))}
                </div>
                <h3 className="section-title">Original Document</h3>
                <p className="subtitle" style={{marginBottom: '20px'}}>Read the official academic whitepaper below.</p>
                <div className="pdf-container">
                  <iframe src={selectedPaper.pdfUrl} title={selectedPaper.title}></iframe>
                </div>
                <div className="pdf-fallback">
                  <p>Having trouble viewing? <a href={selectedPaper.pdfUrl} target="_blank" rel="noreferrer">Open PDF in a new tab ↗</a></p>
                </div>
              </div>
            </div>
          )}

          {/* 4. CRYPTOGRAPHY */}
          {activeTab === 'cryptography' && (
            <div className="lesson-layout">
              {CRYPTOGRAPHY.map((lesson, i) => (
                <div key={i} className="lesson-card">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* 5. BLOCKCHAIN */}
          {activeTab === 'blockchain' && (
            <div className="lesson-layout">
              {BLOCKCHAIN.map((lesson, i) => (
                <div key={i} className="lesson-card">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* 6. NEWS */}
          {activeTab === 'news' && (
            <div className="news-layout">
              {NEWS.map((item, i) => (
                <div key={i} className="news-card">
                  <span className="news-date">{item.date} • {item.source}</span>
                  <h3>{item.headline}</h3>
                  <button className="read-more-btn">Read Article</button>
                </div>
              ))}
            </div>
          )}

          {/* 7. NEW PROJECTS */}
          {activeTab === 'newProjects' && (
            <div className="grid-list">
              {NEW_PROJECTS.map((proj, i) => (
                <div key={i} className="edu-card innovative-card">
                  <div className="card-top-row">
                    <h3>{proj.name}</h3>
                    <span className="tag-badge">{proj.tag}</span>
                  </div>
                  <p className="card-text">{proj.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* 8. CODING */}
          {activeTab === 'coding' && (
            <div className="coding-layout">
              {CODING_PROJECTS.map((proj, i) => (
                <div key={i} className="code-card">
                  <span className={`diff-badge ${proj.difficulty.toLowerCase()}`}>{proj.difficulty}</span>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <div className="code-terminal-mock">
                    <code>&gt; start coding...</code>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 9. CERTIFICATIONS */}
          {activeTab === 'certifications' && (
            <div className="grid-list">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="edu-card cert-card">
                  <span className="cert-icon">{cert.icon}</span>
                  <h3>{cert.title}</h3>
                  <p className="card-text">{cert.desc}</p>
                  <button className="cert-btn">View Requirements</button>
                </div>
              ))}
            </div>
          )}

          {/* 10. SUBSCRIPTIONS */}
          {activeTab === 'subscription' && (
            <div className="pricing-layout">
              {PLANS.map((plan) => (
                <div key={plan.id} className="pricing-card" style={{ borderTopColor: plan.color }}>
                  <h3 className="plan-title">{plan.name}</h3>
                  <div className="plan-price-box">
                    <span className="price-big">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}><span style={{color: plan.color, marginRight: '8px'}}>✓</span> {feature}</li>
                    ))}
                  </ul>
                  <button className="subscribe-btn" style={{ backgroundColor: plan.color }}>Select Plan</button>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;