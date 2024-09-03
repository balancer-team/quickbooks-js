# QuickBooks JavaScript Client

JavaScript library for QuickBooks API access. Bulit-in TypeScript definitions.

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

### Access and Refresh Tokens

Tokens aren't stored by the `qb` instance like they are in the official Intuit library. This makes it easier to create multi-tennant applications, where different tokens have to be used for different users.

Intuit access tokens are valid for one hour, and refresh tokens are valid for 100 days. You should ensure you are using an active access token by calling the following function in your application. If the access token is still valid, it will simply return the token. If it needs to be refreshed, it will send the request to Intuit and obtain the refreshed token.

```js
const definitelyValidToken = await qb.validateOrRefreshToken(staleToken)
```

### General-purpose Query Request

The QuickBooks API uses queries to access resources. Unlike most APIs, It is not necessary to specify an endpoint when retrieving a resource. Instead, the resource is specified in a SQL-like query language. Refer to the API reference (https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) for structuring your queries.

```js
const vendors = await qb.query({
  token: token,
  query: 'select * from Vendor',
})
```

### General-purpose Post Request

Use any endpoint and create any object using a general-purpose post request. Refer to the API reference for endpoints and object structures: https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account

```js
const createdJournalEntry = await qb.post({
  token: token,
  endpoint: '/journalentry',
  body: newJournalEntry,
})
```
