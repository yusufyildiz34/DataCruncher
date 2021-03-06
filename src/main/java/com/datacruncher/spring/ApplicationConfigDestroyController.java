/*
 * DataCruncher
 * Copyright (c) Mario Altimari. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

package com.datacruncher.spring;

import com.datacruncher.constants.ApplicationConfigType;
import com.datacruncher.jpa.Destroy;
import com.datacruncher.jpa.dao.DaoSet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class ApplicationConfigDestroyController implements Controller, DaoSet {

	public ModelAndView handleRequest(HttpServletRequest request , HttpServletResponse response) throws ServletException, IOException {

		String configType = request.getParameter("configType");
				
		ObjectMapper mapper = new ObjectMapper();
		ServletOutputStream out = null;
		response.setContentType("application/json");
		out = response.getOutputStream();
		
		if(configType.equals("email")) {
            Destroy destroy = applicationConfigDao.destroy(ApplicationConfigType.EMAIL);
            if(destroy.isSuccess())
                applicationConfigDao.destroy(ApplicationConfigType.APPLURL);
			out.write(mapper.writeValueAsBytes(destroy));
		}	
		
		out.flush();
		out.close();
		return null;		
	}
}