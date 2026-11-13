/*
 * SPDX-FileCopyrightText: 2001 FAO-UN and others <geonetwork@osgeo.org>
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

package org.geonetwork.index.model.record;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/** Coordinate reference system. */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CrsDetails {
    private String code;
    private String codeSpace;
    private String name;
    private String url;
    /** Reference system type (eg. from MD_ReferenceSystemTypeCode), set by GeoNetwork 4.x indexing. */
    private String type;
}
