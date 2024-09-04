# QuickBooks JavaScript Client

JavaScript client for QuickBooks. TypeScript definitions built in.

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
  environment: 'SANDBOX_OR_PRODUCTION',
})
```

### Get Auth URL

Begin the OAuth 2.0 flow by getting the auth url.

```js
const authUrl = qb.getAuthUrl()
```

### Get Access Token from Grant

Complete the OAuth 2.0 flow by using the grant details to retrieve the access token.

```js
const token = await qb.getTokenFromGrant({
  code: 'GRANT_CODE',
  state: 'STATE_STRING',
  realmId: 'REALM_ID',
})
```

### Access and Refresh Tokens

The `token` is an object that includes the access and refresh tokens, the realm ID, expirations, and other metadata. Tokens aren't stored in the `qb` instance. You must write your own application logic to manage tokens. This makes it easier to create multi-tenant applications, where different tokens have to be used for different users.

Intuit's access tokens are valid for one hour, and refresh tokens are valid for 100 days. You should ensure you are using an active access token by calling the following function. If the access token is still valid, it will simply return the token. If it needs to be refreshed, it will send the request to Intuit and obtain the refreshed token.

```js
const validToken = await qb.validateToken(staleToken) // -->
// {
//   access_token: 'eyJlbmMiOiJBMTI4...',
//   refresh_token: 'AB11734177244q21...',
//   token_type: 'bearer',
//   realm_id: '8241451349686734',
//   expires_in: 3600,
//   expires_at: 1725454384,
//   x_refresh_token_expires_in: 8726400,
//   x_refresh_token_expires_at: 1733918044,
// }
```

### General-purpose Query Request

The QuickBooks API uses queries to access resources. Unlike most APIs, It is not necessary to specify an endpoint when retrieving a resource. Instead, the resource is specified in a SQL-like query language. Refer to the [API Explorer](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) for structuring your queries.

```js
const vendors = await qb.query({
  token: token,
  query: 'select * from Vendor',
})
```

### General-purpose Post Request

Use any endpoint and create any object using a general-purpose post request. Refer to the [API Explorer](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account) for endpoints and object structures.

```js
const createdJournalEntry = await qb.post({
  token: token,
  endpoint: '/journalentry',
  body: newJournalEntry,
})
```
