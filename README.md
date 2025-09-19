## Project

Holy Soul is a learning oriented platform for Holy Quran.

## Tech & Tools

- Next Js (For both Backend and Frontend support)
- Typescript
- Tailwind
- Axios
- SWR for API caching

## Getting Started

- clone the repo from github

```bash
git clone https://github.com/farhanabsar21/holy-soul.git
```

- install dependencies

```bash
npm i
# or
yarn install
```

#### Environment configuration for local development

```bash
# Logging level (e.g., debug, info, warn, error)
LOG_LEVEL=debug

# Node environment (development, production, test)
NODE_ENV=development

# QF API credentials (replace with actual values)
# Client ID for QF API authentication
QF_CLIENT_ID=your-secret-id

# Client secret for QF API authentication (keep secure!)
QF_CLIENT_SECRET=your-client-secret

# Base URL for QF API (e.g., prelive or production endpoint)
QF_API_BASE_URL="use the prelive url"

# OAuth token endpoint for QF authentication
QF_OAUTH_TOKEN_URL="use the prelive Oauth token"
```

#### Then run the development server:

```bash
npm run dev
# or
yarn dev
```

#### Run Test

```bash
npm run test
# or
yarn test
```

#### Project Summary

```bash
The project do not return any data in local. But no worries. You can check the live version
Visit [Holy-Soul](https://holy-soul.vercel.app/) for live
```
