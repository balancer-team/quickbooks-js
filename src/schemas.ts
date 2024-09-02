// TODO: Create zod schemas for each QuickBooks object

import { z } from 'zod'

export const grantSchema = z.object({
  code: z.string(),
  state: z.string(),
  realmId: z.string(),
})

export type Grant = z.infer<typeof grantSchema>

export interface Config {
  clientId: string
  clientSecret: string
  redirectUri: string
  environment: 'sandbox' | 'production'
}

export const baseTokenSchema = z.object({
  x_refresh_token_expires_in: z.number(),
  access_token: z.string(),
  token_type: z.string(),
  refresh_token: z.string(),
  expires_in: z.number(),
})

export type BaseToken = z.infer<typeof baseTokenSchema>

export const tokenSchema = z.object({
  x_refresh_token_expires_in: z.number(),
  x_refresh_token_expires_at: z.number(),
  access_token: z.string(),
  token_type: z.string(),
  refresh_token: z.string(),
  expires_in: z.number(),
  expires_at: z.number(),
  realm_id: z.string(),
})

export type Token = z.infer<typeof tokenSchema>

export const userInfoSchema = z
  .object({
    sub: z.string(),
    givenName: z.string(),
    familyName: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    emailVerified: z.boolean(),
    phoneNumberVerified: z.boolean(),
  })
  .passthrough()

export type UserInfo = z.infer<typeof userInfoSchema>

export interface PhysicalAddress {
  Id: string
  Line1: string
  City: string
  CountrySubDivisionCode: string
  PostalCode: string
  Lat: string
  Long: string
  [key: string]: any
}

export interface CompanyInfo {
  CompanyName: string
  LegalName: string
  CompanyAddr: PhysicalAddress
  CustomerCommunicationAddr: PhysicalAddress
  LegalAddr: PhysicalAddress
  CustomerCommunicationEmailAddr: {
    Address: string
  }
  PrimaryPhone: any
  CompanyStartDate: string
  FiscalYearStartMonth: string
  Country: string
  Email: {
    Address: string
  }
  WebAddr: any
  SupportedLanguages: string
  NameValue: any[]
  domain: string
  sparse: boolean
  Id: string
  SyncToken: string
  MetaData: {
    CreateTime: string
    LastUpdatedTime: string
  }
  [key: string]: any
}

export const accountSchema = z.object({
  Id: z.string(),
  Name: z.string(),
  SubAccount: z.boolean(),
  FullyQualifiedName: z.string(),
  Active: z.boolean(),
  Classification: z.string(),
  AccountType: z.string(),
  AccountSubType: z.string(),
  CurrentBalance: z.number(),
  CurrentBalanceWithSubAccounts: z.number(),
  CurrencyRef: z.object({
    value: z.string(),
    name: z.string(),
  }),
  domain: z.string(),
  sparse: z.boolean(),
  SyncToken: z.string(),
  MetaData: z.object({
    CreateTime: z.string(),
    LastUpdatedTime: z.string(),
  }),
})

export const accountsSchema = z.array(accountSchema)

export type Account = z.infer<typeof accountSchema>

export interface Vendor {
  Id: string
  DisplayName: string
  Fax: { FreeFormNumber: string }
  Title: string
  Active: boolean
  Mobile: { FreeFormNumber: string }
  domain: string
  sparse: boolean
  AcctNum: string
  Balance: number
  WebAddr: { URI: string }
  BillAddr: PhysicalAddress
  MetaData: {
    CreateTime: string
    LastUpdatedTime: string
  }
  GivenName: string
  SyncToken: string
  FamilyName: string
  Vendor1099: true
  CompanyName: string
  CurrencyRef: {
    name: string
    value: string
  }
  PrimaryPhone: { FreeFormNumber: string }
  PrintOnCheckName: string
  [key: string]: any
}

export interface Customer {
  Id: string
  DisplayName: string
  Job: boolean
  Active: boolean
  domain: string
  sparse: boolean
  Balance: number
  Taxable: boolean
  BillAddr: PhysicalAddress
  MetaData: {
    CreateTime: string
    LastUpdatedTime: string
  }
  ShipAddr: PhysicalAddress
  GivenName: string
  SyncToken: string
  FamilyName: string
  CompanyName: string
  CurrencyRef: {
    name: string
    value: string
  }
  PrimaryPhone: { FreeFormNumber: string }
  BillWithParent: boolean
  BalanceWithJobs: number
  PrimaryEmailAddr: { Address: string }
  PrintOnCheckName: string
  FullyQualifiedName: string
  PreferredDeliveryMethod: string
  [key: string]: any
}

export interface Employee {
  Id: string
  DisplayName: string
  SyncToken: string
  domain: string
  PrimaryPhone: {
    FreeFormNumber: string
  }
  PrintOnCheckName: string
  FamilyName: string
  Active: boolean
  SSN: string
  PrimaryAddr: {
    CountrySubDivisionCode: string
    City: string
    PostalCode: string
    Id: string
    Line1: string
  }
  sparse: boolean
  BillableTime: boolean
  GivenName: string
  MetaData: {
    CreateTime: string
    LastUpdatedTime: string
  }
  [key: string]: any // TODO
}

export const departmentSchema = z.object({
  Id: z.string(),
  Name: z.string(),
  FullyQualifiedName: z.string(),
  domain: z.string(),
  SyncToken: z.string(),
  SubDepartment: z.boolean(),
  sparse: z.boolean(),
  Active: z.boolean(),
  MetaData: z.object({
    CreateTime: z.string(),
    LastUpdatedTime: z.string(),
  }),
})

export const departmentsSchema = z.array(departmentSchema)

export type Department = z.infer<typeof departmentSchema>

export const classSchema = z.object({
  Id: z.string(),
  Name: z.string(),
  FullyQualifiedName: z.string(),
  domain: z.string(),
  SyncToken: z.string(),
  SubClass: z.boolean(),
  sparse: z.boolean(),
  Active: z.boolean(),
  MetaData: z.object({
    CreateTime: z.string(),
    LastUpdatedTime: z.string(),
  }),
})

export const classesSchema = z.array(classSchema)

export type Class = z.infer<typeof classSchema>

export interface ObjectValidationError {
  property: string
  message: string
}

export interface JournalEntryLineDetail {
  Id?: string
  JournalEntryLineDetail: {
    PostingType: 'Credit' | 'Debit'
    AccountRef: {
      value?: string
      name?: string
    }
    TaxApplicableOn?: 'Sales' | 'Purchase'
    Entity?: {
      EntityRef?: {
        value?: string
        name?: string
      }
      Type?: 'Vendor' | 'Customer' | 'Employee'
    }
    TaxInclusiveAmt?: number
    ClassRef?: {
      value?: string
      name?: string
    }
    DepartmentRef?: {
      value?: string
      name?: string
    }
    TaxCodeRef?: {
      value?: string
      name?: string
    }
    BillableStatus?: 'EntityRef' | 'NotBillable' | 'Billable' | 'HasBeenBilled'
    TaxAmount?: number
  }
  DetailType: 'JournalEntryLineDetail'
  Amount: number
  Description?: string
  LineNum?: number
}

export interface DescriptionOnlyLineDetail {
  Id: string
  DetailType: 'DescriptionOnly'
  DescriptionLineDetail: {
    TaxCodeRef?: {
      value: string
      name?: string
    }
    ServiceDate?: string
  }
  Description?: string
  LineNum?: number
  Amount?: number
}

export interface JournalEntry {
  Id?: string
  Line: JournalEntryLineDetail[]
  SyncToken?: string
  domain?: string
  sparse?: boolean
  CurrencyRef?: {
    value: string
    name?: string
  }
  DocNumber?: string
  PrivateNote?: string
  TxnDate?: string
  ExchangeRate?: number
  TaxRateRef?: {
    value: string
    name?: string
  }
  TxnTaxDetail?: any // TODO
  GlobalTaxCalculation?: 'TaxExcluded' | 'TaxInclusive'
  Adjustment?: boolean
  MetaData?: {
    CreateTime: string
    LastUpdatedTime: string
  }
  RecurDataRef?: {
    value: string
    name?: string
  }
  TotalAmt?: number
  HomeTotalAmt?: number
  Errors?: string[] // Will not post if this is present
}
