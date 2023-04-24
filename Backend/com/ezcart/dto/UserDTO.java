package com.ezcart.dto;

public class UserDTO {
	
	private String userId;
	private String email;
	private String phone;
	private String fName;
	private String lName;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	
	@Override
	public String toString() {
		return "UserDTO [userId=" + userId + ", email=" + email + ", phone=" + phone + ", fName=" + fName + ", lName="
				+ lName + "]";
	}
	
	
	
}
