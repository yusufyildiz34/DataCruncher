/*
 *   DataCruncher is a Data Quality Firewall, a Data Quality Monitor and an ETL middleware to manage data streams on the fly.
 *   DataCruncher is released under AGPL license.

 *   Copyright (c) 2019 Altimari Mario
 *   All rights reserved
 *
 *   Site: http://altimario.github.io/DataCruncher
 *   Contact:  altimario@gmail.com
 */

package com.seer.datacruncher.macros;

public class IntegerField extends AbstractJEXLField {

	public IntegerField(String value) {
		super(value);
	}

	@Override
	public Integer getValue() {
		return Integer.valueOf(value);
	}
}