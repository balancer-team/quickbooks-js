# QuickBooks JavaScript Client

JavaScript library for QuickBooks API access. Built-in TypeScript support for type safety.

### Install

```
npm i @balancer-team/quickbooks
```

### Connect

```js
import { QuickBooks } from '@balancer-team/quickbooks'

export const qb = new QuickBooks({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'YOUR_REDIRECT_URI',
  environment: 'SANDBOX_OR_PRODUCTION_ENVIRONMENT',
})
```

### Get Auth URL

Begin the OAuth 2.0 flow by getting the auth url.

```js
const authUrl = qb.getAuthUrl()
window.location.href = authUrl
```

### Get Access Token from Grant

Complete the OAuth 2.0 flow by retrieving the access token.

```js
const token = await qb.getTokenFromGrant({
  code: 'GRANT_CODE',
  state: 'STATE_STRING',
  realmId: 'REALM_ID',
})
```
