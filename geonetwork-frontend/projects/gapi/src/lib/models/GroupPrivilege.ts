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
 * @interface GroupPrivilege
 */
export interface GroupPrivilege {
  /**
   *
   * @type {number}
   * @memberof GroupPrivilege
   */
  group?: number;
  /**
   *
   * @type {{ [key: string]: boolean; }}
   * @memberof GroupPrivilege
   */
  operations?: { [key: string]: boolean };
  /**
   *
   * @type {boolean}
   * @memberof GroupPrivilege
   */
  reserved?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof GroupPrivilege
   */
  userGroup?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof GroupPrivilege
   */
  userProfile?: Array<GroupPrivilegeUserProfileEnum>;
  /**
   *
   * @type {Array<string>}
   * @memberof GroupPrivilege
   */
  userProfiles?: Array<GroupPrivilegeUserProfilesEnum>;
}

/**
 * @export
 */
export const GroupPrivilegeUserProfileEnum = {
  Administrator: 'Administrator',
  UserAdmin: 'UserAdmin',
  Reviewer: 'Reviewer',
  Editor: 'Editor',
  RegisteredUser: 'RegisteredUser',
  Guest: 'Guest',
  Monitor: 'Monitor',
} as const;
export type GroupPrivilegeUserProfileEnum =
  (typeof GroupPrivilegeUserProfileEnum)[keyof typeof GroupPrivilegeUserProfileEnum];

/**
 * @export
 */
export const GroupPrivilegeUserProfilesEnum = {
  Administrator: 'Administrator',
  UserAdmin: 'UserAdmin',
  Reviewer: 'Reviewer',
  Editor: 'Editor',
  RegisteredUser: 'RegisteredUser',
  Guest: 'Guest',
  Monitor: 'Monitor',
} as const;
export type GroupPrivilegeUserProfilesEnum =
  (typeof GroupPrivilegeUserProfilesEnum)[keyof typeof GroupPrivilegeUserProfilesEnum];

/**
 * Check if a given object implements the GroupPrivilege interface.
 */
export function instanceOfGroupPrivilege(
  value: object
): value is GroupPrivilege {
  return true;
}

export function GroupPrivilegeFromJSON(json: any): GroupPrivilege {
  return GroupPrivilegeFromJSONTyped(json, false);
}

export function GroupPrivilegeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GroupPrivilege {
  if (json == null) {
    return json;
  }
  return {
    group: json['group'] == null ? undefined : json['group'],
    operations: json['operations'] == null ? undefined : json['operations'],
    reserved: json['reserved'] == null ? undefined : json['reserved'],
    userGroup: json['userGroup'] == null ? undefined : json['userGroup'],
    userProfile: json['userProfile'] == null ? undefined : json['userProfile'],
    userProfiles:
      json['userProfiles'] == null ? undefined : json['userProfiles'],
  };
}

export function GroupPrivilegeToJSON(value?: GroupPrivilege | null): any {
  if (value == null) {
    return value;
  }
  return {
    group: value['group'],
    operations: value['operations'],
    reserved: value['reserved'],
    userGroup: value['userGroup'],
    userProfile: value['userProfile'],
    userProfiles: value['userProfiles'],
  };
}
