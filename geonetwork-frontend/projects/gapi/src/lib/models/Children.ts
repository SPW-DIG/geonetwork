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
import type { RelatedMetadataItem } from './RelatedMetadataItem';
import {
  RelatedMetadataItemFromJSON,
  RelatedMetadataItemFromJSONTyped,
  RelatedMetadataItemToJSON,
} from './RelatedMetadataItem';

/**
 *
 * @export
 * @interface Children
 */
export interface Children {
  /**
   *
   * @type {Array<RelatedMetadataItem>}
   * @memberof Children
   */
  item?: Array<RelatedMetadataItem>;
}

/**
 * Check if a given object implements the Children interface.
 */
export function instanceOfChildren(value: object): value is Children {
  return true;
}

export function ChildrenFromJSON(json: any): Children {
  return ChildrenFromJSONTyped(json, false);
}

export function ChildrenFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Children {
  if (json == null) {
    return json;
  }
  return {
    item:
      json['item'] == null
        ? undefined
        : (json['item'] as Array<any>).map(RelatedMetadataItemFromJSON),
  };
}

export function ChildrenToJSON(value?: Children | null): any {
  if (value == null) {
    return value;
  }
  return {
    item:
      value['item'] == null
        ? undefined
        : (value['item'] as Array<any>).map(RelatedMetadataItemToJSON),
  };
}
