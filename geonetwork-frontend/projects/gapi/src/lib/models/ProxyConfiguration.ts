/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.6 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.6
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface ProxyConfiguration
 */
export interface ProxyConfiguration {
  /**
   *
   * @type {boolean}
   * @memberof ProxyConfiguration
   */
  enabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof ProxyConfiguration
   */
  host?: string;
  /**
   *
   * @type {string}
   * @memberof ProxyConfiguration
   */
  ignoreHostList?: string;
  /**
   *
   * @type {string}
   * @memberof ProxyConfiguration
   */
  password?: string;
  /**
   *
   * @type {string}
   * @memberof ProxyConfiguration
   */
  port?: string;
  /**
   *
   * @type {boolean}
   * @memberof ProxyConfiguration
   */
  proxyConfiguredInSystemProperties?: boolean;
  /**
   *
   * @type {string}
   * @memberof ProxyConfiguration
   */
  username?: string;
}

/**
 * Check if a given object implements the ProxyConfiguration interface.
 */
export function instanceOfProxyConfiguration(
  value: object
): value is ProxyConfiguration {
  return true;
}

export function ProxyConfigurationFromJSON(json: any): ProxyConfiguration {
  return ProxyConfigurationFromJSONTyped(json, false);
}

export function ProxyConfigurationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ProxyConfiguration {
  if (json == null) {
    return json;
  }
  return {
    enabled: json['enabled'] == null ? undefined : json['enabled'],
    host: json['host'] == null ? undefined : json['host'],
    ignoreHostList:
      json['ignoreHostList'] == null ? undefined : json['ignoreHostList'],
    password: json['password'] == null ? undefined : json['password'],
    port: json['port'] == null ? undefined : json['port'],
    proxyConfiguredInSystemProperties:
      json['proxyConfiguredInSystemProperties'] == null
        ? undefined
        : json['proxyConfiguredInSystemProperties'],
    username: json['username'] == null ? undefined : json['username'],
  };
}

export function ProxyConfigurationToJSON(
  value?: ProxyConfiguration | null
): any {
  if (value == null) {
    return value;
  }
  return {
    enabled: value['enabled'],
    host: value['host'],
    ignoreHostList: value['ignoreHostList'],
    password: value['password'],
    port: value['port'],
    proxyConfiguredInSystemProperties:
      value['proxyConfiguredInSystemProperties'],
    username: value['username'],
  };
}
