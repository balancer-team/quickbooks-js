import 'dotenv/config'
import test from 'node:test'
import assert from 'node:assert'

import { QuickBooks } from '../src'

const qb = new QuickBooks({
  clientId: process.env.INTUIT_CLIENT_ID || '',
  clientSecret: process.env.INTUIT_SECRET || '',
  redirectUri: process.env.INTUIT_REDIRECT_URI || '',
  environment: 'sandbox',
})

test('Get the auth URL', async () => {
  const authUrl = qb.getAuthUrl()
  assert.ok(authUrl.startsWith('https://appcenter.intuit.com/connect/oauth2?client_id='))
})
