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


// May contain unused imports in some cases
// @ts-ignore
import type { Auth } from './auth';

/**
 * 
 * @export
 * @interface Login200Response
 */
export interface Login200Response {
    /**
     * 
     * @type {Auth}
     * @memberof Login200Response
     */
    'data'?: Auth;
    /**
     * 
     * @type {string}
     * @memberof Login200Response
     */
    'message'?: string;
}

