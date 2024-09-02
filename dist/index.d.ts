import { Grant, Config, Token } from './schemas';
export declare class QuickBooks {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly redirectUri: string;
    readonly responseType: string;
    readonly authorizeEndpoint: string;
    readonly tokenEndpoint: string;
    readonly revokeEndpoint: string;
    readonly userEndpoint: string;
    readonly apiEndpoint: string;
    readonly scopes: {
        [key: string]: string;
    };
    readonly accessTokenLatency: number;
    readonly refreshTokenLatency: number;
    readonly minorversion: string;
    constructor(config: Config);
    getUnixTimestamp(): number;
    createStateString(): string;
    getAuthUrl(): string;
    isAccessTokenValid(token: Token): boolean;
    isRefreshTokenValid(token: Token): boolean;
    parseToken(token: any, realm_id: string): Token;
    getAuthHeader(): string;
    getTokenFromGrant(grant: Grant): Promise<Token>;
    getRefreshedToken(token: Token): Promise<Token>;
    validateOrRefreshToken(token: any): Promise<Token>;
    getUserInfo(token: Token): Promise<any>;
    getCompanyInfo(token: Token): Promise<any>;
    get(token: Token, path: string): Promise<any>;
    post(token: Token, path: string, body: any): Promise<any>;
    revokeAccess(token: Token): Promise<unknown>;
}
