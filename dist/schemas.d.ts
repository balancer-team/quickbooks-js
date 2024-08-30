import { z } from 'zod';
export declare const grantSchema: z.ZodObject<{
    code: z.ZodString;
    state: z.ZodString;
    realmId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    state: string;
    realmId: string;
}, {
    code: string;
    state: string;
    realmId: string;
}>;
export type Grant = z.infer<typeof grantSchema>;
export interface Config {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    environment: 'sandbox' | 'production';
}
export declare const baseTokenSchema: z.ZodObject<{
    x_refresh_token_expires_in: z.ZodNumber;
    access_token: z.ZodString;
    token_type: z.ZodString;
    refresh_token: z.ZodString;
    expires_in: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    x_refresh_token_expires_in: number;
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
}, {
    x_refresh_token_expires_in: number;
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
}>;
export type BaseToken = z.infer<typeof baseTokenSchema>;
export declare const tokenSchema: z.ZodObject<{
    x_refresh_token_expires_in: z.ZodNumber;
    x_refresh_token_expires_at: z.ZodNumber;
    access_token: z.ZodString;
    token_type: z.ZodString;
    refresh_token: z.ZodString;
    expires_in: z.ZodNumber;
    expires_at: z.ZodNumber;
    realm_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    x_refresh_token_expires_in: number;
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    x_refresh_token_expires_at: number;
    expires_at: number;
    realm_id: string;
}, {
    x_refresh_token_expires_in: number;
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    x_refresh_token_expires_at: number;
    expires_at: number;
    realm_id: string;
}>;
export type Token = z.infer<typeof tokenSchema>;
export declare const userInfoSchema: z.ZodObject<{
    sub: z.ZodString;
    givenName: z.ZodString;
    familyName: z.ZodString;
    email: z.ZodString;
    phoneNumber: z.ZodString;
    emailVerified: z.ZodBoolean;
    phoneNumberVerified: z.ZodBoolean;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sub: z.ZodString;
    givenName: z.ZodString;
    familyName: z.ZodString;
    email: z.ZodString;
    phoneNumber: z.ZodString;
    emailVerified: z.ZodBoolean;
    phoneNumberVerified: z.ZodBoolean;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sub: z.ZodString;
    givenName: z.ZodString;
    familyName: z.ZodString;
    email: z.ZodString;
    phoneNumber: z.ZodString;
    emailVerified: z.ZodBoolean;
    phoneNumberVerified: z.ZodBoolean;
}, z.ZodTypeAny, "passthrough">>;
export type UserInfo = z.infer<typeof userInfoSchema>;
export interface PhysicalAddress {
    Id: string;
    Line1: string;
    City: string;
    CountrySubDivisionCode: string;
    PostalCode: string;
    Lat: string;
    Long: string;
    [key: string]: any;
}
export interface CompanyInfo {
    CompanyName: string;
    LegalName: string;
    CompanyAddr: PhysicalAddress;
    CustomerCommunicationAddr: PhysicalAddress;
    LegalAddr: PhysicalAddress;
    CustomerCommunicationEmailAddr: {
        Address: string;
    };
    PrimaryPhone: any;
    CompanyStartDate: string;
    FiscalYearStartMonth: string;
    Country: string;
    Email: {
        Address: string;
    };
    WebAddr: any;
    SupportedLanguages: string;
    NameValue: any[];
    domain: string;
    sparse: boolean;
    Id: string;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    [key: string]: any;
}
export declare const accountSchema: z.ZodObject<{
    Id: z.ZodString;
    Name: z.ZodString;
    SubAccount: z.ZodBoolean;
    FullyQualifiedName: z.ZodString;
    Active: z.ZodBoolean;
    Classification: z.ZodString;
    AccountType: z.ZodString;
    AccountSubType: z.ZodString;
    CurrentBalance: z.ZodNumber;
    CurrentBalanceWithSubAccounts: z.ZodNumber;
    CurrencyRef: z.ZodObject<{
        value: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>;
    domain: z.ZodString;
    sparse: z.ZodBoolean;
    SyncToken: z.ZodString;
    MetaData: z.ZodObject<{
        CreateTime: z.ZodString;
        LastUpdatedTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        CreateTime: string;
        LastUpdatedTime: string;
    }, {
        CreateTime: string;
        LastUpdatedTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    SubAccount: boolean;
    FullyQualifiedName: string;
    Active: boolean;
    Classification: string;
    AccountType: string;
    AccountSubType: string;
    CurrentBalance: number;
    CurrentBalanceWithSubAccounts: number;
    CurrencyRef: {
        value: string;
        name: string;
    };
}, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    SubAccount: boolean;
    FullyQualifiedName: string;
    Active: boolean;
    Classification: string;
    AccountType: string;
    AccountSubType: string;
    CurrentBalance: number;
    CurrentBalanceWithSubAccounts: number;
    CurrencyRef: {
        value: string;
        name: string;
    };
}>;
export declare const accountsSchema: z.ZodArray<z.ZodObject<{
    Id: z.ZodString;
    Name: z.ZodString;
    SubAccount: z.ZodBoolean;
    FullyQualifiedName: z.ZodString;
    Active: z.ZodBoolean;
    Classification: z.ZodString;
    AccountType: z.ZodString;
    AccountSubType: z.ZodString;
    CurrentBalance: z.ZodNumber;
    CurrentBalanceWithSubAccounts: z.ZodNumber;
    CurrencyRef: z.ZodObject<{
        value: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>;
    domain: z.ZodString;
    sparse: z.ZodBoolean;
    SyncToken: z.ZodString;
    MetaData: z.ZodObject<{
        CreateTime: z.ZodString;
        LastUpdatedTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        CreateTime: string;
        LastUpdatedTime: string;
    }, {
        CreateTime: string;
        LastUpdatedTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    SubAccount: boolean;
    FullyQualifiedName: string;
    Active: boolean;
    Classification: string;
    AccountType: string;
    AccountSubType: string;
    CurrentBalance: number;
    CurrentBalanceWithSubAccounts: number;
    CurrencyRef: {
        value: string;
        name: string;
    };
}, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    SubAccount: boolean;
    FullyQualifiedName: string;
    Active: boolean;
    Classification: string;
    AccountType: string;
    AccountSubType: string;
    CurrentBalance: number;
    CurrentBalanceWithSubAccounts: number;
    CurrencyRef: {
        value: string;
        name: string;
    };
}>, "many">;
export type Account = z.infer<typeof accountSchema>;
export interface Vendor {
    Id: string;
    DisplayName: string;
    Fax: {
        FreeFormNumber: string;
    };
    Title: string;
    Active: boolean;
    Mobile: {
        FreeFormNumber: string;
    };
    domain: string;
    sparse: boolean;
    AcctNum: string;
    Balance: number;
    WebAddr: {
        URI: string;
    };
    BillAddr: PhysicalAddress;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    GivenName: string;
    SyncToken: string;
    FamilyName: string;
    Vendor1099: true;
    CompanyName: string;
    CurrencyRef: {
        name: string;
        value: string;
    };
    PrimaryPhone: {
        FreeFormNumber: string;
    };
    PrintOnCheckName: string;
    [key: string]: any;
}
export interface Customer {
    Id: string;
    DisplayName: string;
    Job: boolean;
    Active: boolean;
    domain: string;
    sparse: boolean;
    Balance: number;
    Taxable: boolean;
    BillAddr: PhysicalAddress;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    ShipAddr: PhysicalAddress;
    GivenName: string;
    SyncToken: string;
    FamilyName: string;
    CompanyName: string;
    CurrencyRef: {
        name: string;
        value: string;
    };
    PrimaryPhone: {
        FreeFormNumber: string;
    };
    BillWithParent: boolean;
    BalanceWithJobs: number;
    PrimaryEmailAddr: {
        Address: string;
    };
    PrintOnCheckName: string;
    FullyQualifiedName: string;
    PreferredDeliveryMethod: string;
    [key: string]: any;
}
export interface Employee {
    Id: string;
    DisplayName: string;
    SyncToken: string;
    domain: string;
    PrimaryPhone: {
        FreeFormNumber: string;
    };
    PrintOnCheckName: string;
    FamilyName: string;
    Active: boolean;
    SSN: string;
    PrimaryAddr: {
        CountrySubDivisionCode: string;
        City: string;
        PostalCode: string;
        Id: string;
        Line1: string;
    };
    sparse: boolean;
    BillableTime: boolean;
    GivenName: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    [key: string]: any;
}
export declare const departmentSchema: z.ZodObject<{
    Id: z.ZodString;
    Name: z.ZodString;
    FullyQualifiedName: z.ZodString;
    domain: z.ZodString;
    SyncToken: z.ZodString;
    SubDepartment: z.ZodBoolean;
    sparse: z.ZodBoolean;
    Active: z.ZodBoolean;
    MetaData: z.ZodObject<{
        CreateTime: z.ZodString;
        LastUpdatedTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        CreateTime: string;
        LastUpdatedTime: string;
    }, {
        CreateTime: string;
        LastUpdatedTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubDepartment: boolean;
}, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubDepartment: boolean;
}>;
export declare const departmentsSchema: z.ZodArray<z.ZodObject<{
    Id: z.ZodString;
    Name: z.ZodString;
    FullyQualifiedName: z.ZodString;
    domain: z.ZodString;
    SyncToken: z.ZodString;
    SubDepartment: z.ZodBoolean;
    sparse: z.ZodBoolean;
    Active: z.ZodBoolean;
    MetaData: z.ZodObject<{
        CreateTime: z.ZodString;
        LastUpdatedTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        CreateTime: string;
        LastUpdatedTime: string;
    }, {
        CreateTime: string;
        LastUpdatedTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubDepartment: boolean;
}, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubDepartment: boolean;
}>, "many">;
export type Department = z.infer<typeof departmentSchema>;
export declare const classSchema: z.ZodObject<{
    Id: z.ZodString;
    Name: z.ZodString;
    FullyQualifiedName: z.ZodString;
    domain: z.ZodString;
    SyncToken: z.ZodString;
    SubClass: z.ZodBoolean;
    sparse: z.ZodBoolean;
    Active: z.ZodBoolean;
    MetaData: z.ZodObject<{
        CreateTime: z.ZodString;
        LastUpdatedTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        CreateTime: string;
        LastUpdatedTime: string;
    }, {
        CreateTime: string;
        LastUpdatedTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubClass: boolean;
}, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubClass: boolean;
}>;
export declare const classesSchema: z.ZodArray<z.ZodObject<{
    Id: z.ZodString;
    Name: z.ZodString;
    FullyQualifiedName: z.ZodString;
    domain: z.ZodString;
    SyncToken: z.ZodString;
    SubClass: z.ZodBoolean;
    sparse: z.ZodBoolean;
    Active: z.ZodBoolean;
    MetaData: z.ZodObject<{
        CreateTime: z.ZodString;
        LastUpdatedTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        CreateTime: string;
        LastUpdatedTime: string;
    }, {
        CreateTime: string;
        LastUpdatedTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubClass: boolean;
}, {
    Id: string;
    domain: string;
    sparse: boolean;
    SyncToken: string;
    MetaData: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    Name: string;
    FullyQualifiedName: string;
    Active: boolean;
    SubClass: boolean;
}>, "many">;
export type Class = z.infer<typeof classSchema>;
export interface ObjectValidationError {
    property: string;
    message: string;
}
export interface JournalEntryLineDetail {
    Id?: string;
    JournalEntryLineDetail: {
        PostingType: 'Credit' | 'Debit';
        AccountRef: {
            value?: string;
            name?: string;
        };
        TaxApplicableOn?: 'Sales' | 'Purchase';
        Entity?: {
            EntityRef?: {
                value?: string;
                name?: string;
            };
            Type?: 'Vendor' | 'Customer' | 'Employee';
        };
        TaxInclusiveAmt?: number;
        ClassRef?: {
            value?: string;
            name?: string;
        };
        DepartmentRef?: {
            value?: string;
            name?: string;
        };
        TaxCodeRef?: {
            value?: string;
            name?: string;
        };
        BillableStatus?: 'EntityRef' | 'NotBillable' | 'Billable' | 'HasBeenBilled';
        TaxAmount?: number;
    };
    DetailType: 'JournalEntryLineDetail';
    Amount: number;
    Description?: string;
    LineNum?: number;
}
export interface DescriptionOnlyLineDetail {
    Id: string;
    DetailType: 'DescriptionOnly';
    DescriptionLineDetail: {
        TaxCodeRef?: {
            value: string;
            name?: string;
        };
        ServiceDate?: string;
    };
    Description?: string;
    LineNum?: number;
    Amount?: number;
}
export interface JournalEntry {
    Id?: string;
    Line: JournalEntryLineDetail[];
    SyncToken?: string;
    domain?: string;
    sparse?: boolean;
    CurrencyRef?: {
        value: string;
        name?: string;
    };
    DocNumber?: string;
    PrivateNote?: string;
    TxnDate?: string;
    ExchangeRate?: number;
    TaxRateRef?: {
        value: string;
        name?: string;
    };
    TxnTaxDetail?: any;
    GlobalTaxCalculation?: 'TaxExcluded' | 'TaxInclusive';
    Adjustment?: boolean;
    MetaData?: {
        CreateTime: string;
        LastUpdatedTime: string;
    };
    RecurDataRef?: {
        value: string;
        name?: string;
    };
    TotalAmt?: number;
    HomeTotalAmt?: number;
    Errors?: string[];
}
