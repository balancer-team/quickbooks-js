# QuickBooks JavaScript Client

JavaScript library for easy QuickBooks API access

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
