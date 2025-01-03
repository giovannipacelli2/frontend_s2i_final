/* tslint:disable */
/* eslint-disable */
/**
 * S2I final
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { AccountBodyReq } from '../models';
// @ts-ignore
import type { CreateAccount201Response } from '../models';
// @ts-ignore
import type { DeleteAccount200Response } from '../models';
// @ts-ignore
import type { DeleteAccount500Response } from '../models';
// @ts-ignore
import type { GetAccount200Response } from '../models';
// @ts-ignore
import type { GetAccount404Response } from '../models';
// @ts-ignore
import type { GetAccountInfo200Response } from '../models';
// @ts-ignore
import type { GetAllAccounts200Response } from '../models';
// @ts-ignore
import type { GetAllAccounts401Response } from '../models';
// @ts-ignore
import type { GetAllUsernames200Response } from '../models';
// @ts-ignore
import type { UpdateAccount200Response } from '../models';
// @ts-ignore
import type { UpdateAccount400Response } from '../models';
// @ts-ignore
import type { UpdateAccount500Response } from '../models';
/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create new account
         * @param {AccountBodyReq} accountBodyReq JSON with account data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAccount: async (accountBodyReq: AccountBodyReq, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountBodyReq' is not null or undefined
            assertParamExists('createAccount', 'accountBodyReq', accountBodyReq)
            const localVarPath = `/api/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(accountBodyReq, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing account
         * @param {string} accountId Account id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccount: async (accountId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('deleteAccount', 'accountId', accountId)
            const localVarPath = `/api/account/{accountId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get data of a single account
         * @param {string} accountId model id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccount: async (accountId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getAccount', 'accountId', accountId)
            const localVarPath = `/api/account/{accountId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get info of a single account
         * @param {string} accountId model id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountInfo: async (accountId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getAccountInfo', 'accountId', accountId)
            const localVarPath = `/api/account/{accountId}/info`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all accounts data
         * @param {number} [limit] Limit of elements
         * @param {number} [page] Current page
         * @param {string} [sortBy] sort by element
         * @param {string} [sortValue] sorting type
         * @param {string} [filterBy] fields to filter
         * @param {string} [filterValue] Values to filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAccounts: async (limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/account/all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortValue !== undefined) {
                localVarQueryParameter['sortValue'] = sortValue;
            }

            if (filterBy !== undefined) {
                localVarQueryParameter['filterBy'] = filterBy;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all accounts usernames
         * @param {number} [limit] Limit of elements
         * @param {number} [page] Current page
         * @param {string} [sortBy] sort by element
         * @param {string} [sortValue] sorting type
         * @param {string} [filterBy] fields to filter
         * @param {string} [filterValue] Values to filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUsernames: async (limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/accounts/username/all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortValue !== undefined) {
                localVarQueryParameter['sortValue'] = sortValue;
            }

            if (filterBy !== undefined) {
                localVarQueryParameter['filterBy'] = filterBy;
            }

            if (filterValue !== undefined) {
                localVarQueryParameter['filterValue'] = filterValue;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a specific account
         * @param {string} accountId model id
         * @param {AccountBodyReq} accountBodyReq JSON with account data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAccount: async (accountId: string, accountBodyReq: AccountBodyReq, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('updateAccount', 'accountId', accountId)
            // verify required parameter 'accountBodyReq' is not null or undefined
            assertParamExists('updateAccount', 'accountBodyReq', accountBodyReq)
            const localVarPath = `/api/account/{accountId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(accountBodyReq, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create new account
         * @param {AccountBodyReq} accountBodyReq JSON with account data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAccount(accountBodyReq: AccountBodyReq, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateAccount201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAccount(accountBodyReq, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountApi.createAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete an existing account
         * @param {string} accountId Account id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAccount(accountId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteAccount200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAccount(accountId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountApi.deleteAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get data of a single account
         * @param {string} accountId model id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccount(accountId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccount200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccount(accountId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountApi.getAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get info of a single account
         * @param {string} accountId model id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccountInfo(accountId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccountInfo200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountInfo(accountId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountApi.getAccountInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all accounts data
         * @param {number} [limit] Limit of elements
         * @param {number} [page] Current page
         * @param {string} [sortBy] sort by element
         * @param {string} [sortValue] sorting type
         * @param {string} [filterBy] fields to filter
         * @param {string} [filterValue] Values to filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllAccounts(limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAllAccounts200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllAccounts(limit, page, sortBy, sortValue, filterBy, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountApi.getAllAccounts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all accounts usernames
         * @param {number} [limit] Limit of elements
         * @param {number} [page] Current page
         * @param {string} [sortBy] sort by element
         * @param {string} [sortValue] sorting type
         * @param {string} [filterBy] fields to filter
         * @param {string} [filterValue] Values to filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllUsernames(limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAllUsernames200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllUsernames(limit, page, sortBy, sortValue, filterBy, filterValue, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountApi.getAllUsernames']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a specific account
         * @param {string} accountId model id
         * @param {AccountBodyReq} accountBodyReq JSON with account data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAccount(accountId: string, accountBodyReq: AccountBodyReq, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateAccount200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAccount(accountId, accountBodyReq, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AccountApi.updateAccount']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountApiFp(configuration)
    return {
        /**
         * 
         * @summary Create new account
         * @param {AccountBodyReq} accountBodyReq JSON with account data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAccount(accountBodyReq: AccountBodyReq, options?: RawAxiosRequestConfig): AxiosPromise<CreateAccount201Response> {
            return localVarFp.createAccount(accountBodyReq, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an existing account
         * @param {string} accountId Account id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccount(accountId: string, options?: RawAxiosRequestConfig): AxiosPromise<DeleteAccount200Response> {
            return localVarFp.deleteAccount(accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get data of a single account
         * @param {string} accountId model id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccount(accountId: string, options?: RawAxiosRequestConfig): AxiosPromise<GetAccount200Response> {
            return localVarFp.getAccount(accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get info of a single account
         * @param {string} accountId model id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountInfo(accountId: string, options?: RawAxiosRequestConfig): AxiosPromise<GetAccountInfo200Response> {
            return localVarFp.getAccountInfo(accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all accounts data
         * @param {number} [limit] Limit of elements
         * @param {number} [page] Current page
         * @param {string} [sortBy] sort by element
         * @param {string} [sortValue] sorting type
         * @param {string} [filterBy] fields to filter
         * @param {string} [filterValue] Values to filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAccounts(limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GetAllAccounts200Response> {
            return localVarFp.getAllAccounts(limit, page, sortBy, sortValue, filterBy, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all accounts usernames
         * @param {number} [limit] Limit of elements
         * @param {number} [page] Current page
         * @param {string} [sortBy] sort by element
         * @param {string} [sortValue] sorting type
         * @param {string} [filterBy] fields to filter
         * @param {string} [filterValue] Values to filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUsernames(limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig): AxiosPromise<GetAllUsernames200Response> {
            return localVarFp.getAllUsernames(limit, page, sortBy, sortValue, filterBy, filterValue, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a specific account
         * @param {string} accountId model id
         * @param {AccountBodyReq} accountBodyReq JSON with account data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAccount(accountId: string, accountBodyReq: AccountBodyReq, options?: RawAxiosRequestConfig): AxiosPromise<UpdateAccount200Response> {
            return localVarFp.updateAccount(accountId, accountBodyReq, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI {
    /**
     * 
     * @summary Create new account
     * @param {AccountBodyReq} accountBodyReq JSON with account data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public createAccount(accountBodyReq: AccountBodyReq, options?: RawAxiosRequestConfig) {
        return AccountApiFp(this.configuration).createAccount(accountBodyReq, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an existing account
     * @param {string} accountId Account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public deleteAccount(accountId: string, options?: RawAxiosRequestConfig) {
        return AccountApiFp(this.configuration).deleteAccount(accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get data of a single account
     * @param {string} accountId model id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public getAccount(accountId: string, options?: RawAxiosRequestConfig) {
        return AccountApiFp(this.configuration).getAccount(accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get info of a single account
     * @param {string} accountId model id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public getAccountInfo(accountId: string, options?: RawAxiosRequestConfig) {
        return AccountApiFp(this.configuration).getAccountInfo(accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all accounts data
     * @param {number} [limit] Limit of elements
     * @param {number} [page] Current page
     * @param {string} [sortBy] sort by element
     * @param {string} [sortValue] sorting type
     * @param {string} [filterBy] fields to filter
     * @param {string} [filterValue] Values to filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public getAllAccounts(limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return AccountApiFp(this.configuration).getAllAccounts(limit, page, sortBy, sortValue, filterBy, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all accounts usernames
     * @param {number} [limit] Limit of elements
     * @param {number} [page] Current page
     * @param {string} [sortBy] sort by element
     * @param {string} [sortValue] sorting type
     * @param {string} [filterBy] fields to filter
     * @param {string} [filterValue] Values to filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public getAllUsernames(limit?: number, page?: number, sortBy?: string, sortValue?: string, filterBy?: string, filterValue?: string, options?: RawAxiosRequestConfig) {
        return AccountApiFp(this.configuration).getAllUsernames(limit, page, sortBy, sortValue, filterBy, filterValue, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a specific account
     * @param {string} accountId model id
     * @param {AccountBodyReq} accountBodyReq JSON with account data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public updateAccount(accountId: string, accountBodyReq: AccountBodyReq, options?: RawAxiosRequestConfig) {
        return AccountApiFp(this.configuration).updateAccount(accountId, accountBodyReq, options).then((request) => request(this.axios, this.basePath));
    }
}

