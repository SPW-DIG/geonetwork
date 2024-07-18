/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.5 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.5
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
 * @interface MetadataResourceExternalManagementProperties
 */
export interface MetadataResourceExternalManagementProperties {
  /**
   *
   * @type {string}
   * @memberof MetadataResourceExternalManagementProperties
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataResourceExternalManagementProperties
   */
  url?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataResourceExternalManagementProperties
   */
  validationStatus?: MetadataResourceExternalManagementPropertiesValidationStatusEnum;
}

/**
 * @export
 */
export const MetadataResourceExternalManagementPropertiesValidationStatusEnum =
  {
    Unknown: 'UNKNOWN',
    Valid: 'VALID',
    Incomplete: 'INCOMPLETE',
  } as const;
export type MetadataResourceExternalManagementPropertiesValidationStatusEnum =
  (typeof MetadataResourceExternalManagementPropertiesValidationStatusEnum)[keyof typeof MetadataResourceExternalManagementPropertiesValidationStatusEnum];

/**
 * Check if a given object implements the MetadataResourceExternalManagementProperties interface.
 */
export function instanceOfMetadataResourceExternalManagementProperties(
  value: object
): value is MetadataResourceExternalManagementProperties {
  return true;
}

export function MetadataResourceExternalManagementPropertiesFromJSON(
  json: any
): MetadataResourceExternalManagementProperties {
  return MetadataResourceExternalManagementPropertiesFromJSONTyped(json, false);
}

export function MetadataResourceExternalManagementPropertiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MetadataResourceExternalManagementProperties {
  if (json == null) {
    return json;
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    url: json['url'] == null ? undefined : json['url'],
    validationStatus:
      json['validationStatus'] == null ? undefined : json['validationStatus'],
  };
}

export function MetadataResourceExternalManagementPropertiesToJSON(
  value?: MetadataResourceExternalManagementProperties | null
): any {
  if (value == null) {
    return value;
  }
  return {
    id: value['id'],
    url: value['url'],
    validationStatus: value['validationStatus'],
  };
}
