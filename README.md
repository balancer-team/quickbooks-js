# QuickBooks JavaScript Client

JavaScript library for QuickBooks API access. Built-in TypeScript support for type safety.

### Install

```
npm i @balancer-team/quickbooks
```

### Configure

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

Complete the OAuth 2.0 flow by retrieving the token. The token is an object that includes both the access and refresh token, the realm ID, and other metadata.

```js
const token = await qb.getTokenFromGrant({
  code: 'GRANT_CODE',
  state: 'STATE_STRING',
  realmId: 'REALM_ID',
})
```

Tokens are not stored by the `qb` instance. You must write your own application logic to store and re-use tokens. The token object must be provided with each subsequent request. The client will automatically refresh the token if necessary. If you would like to manually validate or refresh the token, you can call the following function:

```js
const definitelyValidToken = await qb.validateOrRefreshToken(staleToken)
```

> **NOTE:** This is an intentional departure from the behavior of the official Intuit library. In a multi-tennant application, this makes it easier to follow which tokens are being used for which requests. In a single-tennant application, this provides for more explicit handling of the token.
