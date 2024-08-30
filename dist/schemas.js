"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classesSchema = exports.classSchema = exports.departmentsSchema = exports.departmentSchema = exports.accountsSchema = exports.accountSchema = exports.userInfoSchema = exports.tokenSchema = exports.baseTokenSchema = exports.grantSchema = void 0;
const zod_1 = require("zod");
exports.grantSchema = zod_1.z.object({
    code: zod_1.z.string(),
    state: zod_1.z.string(),
    realmId: zod_1.z.string(),
});
exports.baseTokenSchema = zod_1.z.object({
    x_refresh_token_expires_in: zod_1.z.number(),
    access_token: zod_1.z.string(),
    token_type: zod_1.z.string(),
    refresh_token: zod_1.z.string(),
    expires_in: zod_1.z.number(),
});
exports.tokenSchema = zod_1.z.object({
    x_refresh_token_expires_in: zod_1.z.number(),
    x_refresh_token_expires_at: zod_1.z.number(),
    access_token: zod_1.z.string(),
    token_type: zod_1.z.string(),
    refresh_token: zod_1.z.string(),
    expires_in: zod_1.z.number(),
    expires_at: zod_1.z.number(),
    realm_id: zod_1.z.string(),
});
// export interface UserInfo {
//   sub: string
//   givenName: string
//   familyName: string
//   email: string
//   phoneNumber: string
//   emailVerified: boolean
//   phoneNumberVerified: boolean
//   [key: string]: any
// }
exports.userInfoSchema = zod_1.z
    .object({
    sub: zod_1.z.string(),
    givenName: zod_1.z.string(),
    familyName: zod_1.z.string(),
    email: zod_1.z.string(),
    phoneNumber: zod_1.z.string(),
    emailVerified: zod_1.z.boolean(),
    phoneNumberVerified: zod_1.z.boolean(),
})
    .passthrough();
// export interface Account {
//   Name: string
//   SubAccount: boolean
//   FullyQualifiedName: string
//   Active: boolean
//   Classification: string
//   AccountType: string
//   AccountSubType: string
//   CurrentBalance: number
//   CurrentBalanceWithSubAccounts: number
//   CurrencyRef: { value: string; name: string }
//   domain: string
//   sparse: boolean
//   Id: string
//   SyncToken: string
//   MetaData: {
//     CreateTime: string
//     LastUpdatedTime: string
//   }
//   [key: string]: any
// }
exports.accountSchema = zod_1.z.object({
    Id: zod_1.z.string(),
    Name: zod_1.z.string(),
    SubAccount: zod_1.z.boolean(),
    FullyQualifiedName: zod_1.z.string(),
    Active: zod_1.z.boolean(),
    Classification: zod_1.z.string(),
    AccountType: zod_1.z.string(),
    AccountSubType: zod_1.z.string(),
    CurrentBalance: zod_1.z.number(),
    CurrentBalanceWithSubAccounts: zod_1.z.number(),
    CurrencyRef: zod_1.z.object({
        value: zod_1.z.string(),
        name: zod_1.z.string(),
    }),
    domain: zod_1.z.string(),
    sparse: zod_1.z.boolean(),
    SyncToken: zod_1.z.string(),
    MetaData: zod_1.z.object({
        CreateTime: zod_1.z.string(),
        LastUpdatedTime: zod_1.z.string(),
    }),
});
exports.accountsSchema = zod_1.z.array(exports.accountSchema);
// export interface Department {
//   Id: string
//   Name: string
//   FullyQualifiedName: string
//   domain: string
//   SyncToken: string
//   SubDepartment: boolean
//   sparse: boolean
//   Active: boolean
//   MetaData: {
//     CreateTime: string
//     LastUpdatedTime: string
//   }
//   [key: string]: any // TODO
// }
exports.departmentSchema = zod_1.z.object({
    Id: zod_1.z.string(),
    Name: zod_1.z.string(),
    FullyQualifiedName: zod_1.z.string(),
    domain: zod_1.z.string(),
    SyncToken: zod_1.z.string(),
    SubDepartment: zod_1.z.boolean(),
    sparse: zod_1.z.boolean(),
    Active: zod_1.z.boolean(),
    MetaData: zod_1.z.object({
        CreateTime: zod_1.z.string(),
        LastUpdatedTime: zod_1.z.string(),
    }),
});
exports.departmentsSchema = zod_1.z.array(exports.departmentSchema);
// export interface Class {
//   Id: string
//   Name: string
//   FullyQualifiedName: string
//   domain: string
//   SyncToken: string
//   SubClass: boolean
//   sparse: boolean
//   Active: boolean
//   MetaData: {
//     CreateTime: string
//     LastUpdatedTime: string
//   }
//   [key: string]: any // TODO
// }
exports.classSchema = zod_1.z.object({
    Id: zod_1.z.string(),
    Name: zod_1.z.string(),
    FullyQualifiedName: zod_1.z.string(),
    domain: zod_1.z.string(),
    SyncToken: zod_1.z.string(),
    SubClass: zod_1.z.boolean(),
    sparse: zod_1.z.boolean(),
    Active: zod_1.z.boolean(),
    MetaData: zod_1.z.object({
        CreateTime: zod_1.z.string(),
        LastUpdatedTime: zod_1.z.string(),
    }),
});
exports.classesSchema = zod_1.z.array(exports.classSchema);
