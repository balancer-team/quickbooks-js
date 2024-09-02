"use strict";
// TODO: Create zod schemas for each QuickBooks object
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
