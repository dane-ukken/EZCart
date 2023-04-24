package com.ezcart.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.ezcart.dto.UserDTO;
import com.ezcart.pojos.User;

public class UserRowMapper implements RowMapper<UserDTO> {

	@Override
	public UserDTO mapRow(ResultSet rs, int rowNum) throws SQLException {

		UserDTO u = new UserDTO();
		u.setfName(rs.getString("FName"));
		u.setlName(rs.getString("LName"));
//		u.setAccountPassword(rs.getString("AccountPassword"));
//		u.setCreateDate(rs.getDate("CreateDate"));
		u.setEmail(rs.getString("Email"));
		u.setPhone(rs.getString("Phone"));
		u.setUserId(rs.getString("UserId"));
		return u;
	}

}
