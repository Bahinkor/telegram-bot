# Telegram Bot

A Telegram bot developed as a personal project that performs tasks by entering relevant commands. Bot is developed with
NodeJS and Telegraf library.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

You need to have the following software installed on your system:

- Node.js

### Installing

1. Clone the repository to your local machine:

```
https://github.com/Bahinkor/telegram-bot.git
```

2. Navigate to the project directory:

```
cd telegram-bot
```

3. Install dependencies:

```
npm install
```

### Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:

```
BOT_TOKEN=TELEGRAM_BOT_TOKEN
BOT_ID=TELEGRAM_BOT_ID
COIN_GECKO_TOKEN=COIN_GECKO_API_TOKEN
FIAT_TOKEN=CURRENCY_LAYER_API_TOKEN
```

### Running the Server

Start the server by running the following command:

```
npm start
```

Your bot is ready.