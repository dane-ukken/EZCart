package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ezcart.dto.UserDTO;

public class VendorNameWrapper implements RowMapper<UserDTO> {

	@Override
	public UserDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		UserDTO u = new UserDTO();
		u.setfName(rs.getString("FName"));
		u.setlName(rs.getString("LName"));
		
		return u;
	}

}
