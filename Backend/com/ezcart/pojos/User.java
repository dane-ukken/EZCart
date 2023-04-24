package com.ezcart.pojos;

import java.sql.Date;

public class User {
	
	private String userId;
	private String email;
	private String phone;
	private String fName;
	private String lName;
	private Date createDate;
	private String accountPassword;
	
	
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
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public String getAccountPassword() {
		return accountPassword;
	}
	public void setAccountPassword(String accountPassword) {
		this.accountPassword = accountPassword;
	}
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", phone=" + phone + ", fName=" + fName + ", lName="
				+ lName + ", createDate=" + createDate + ", accountPassword=" + accountPassword + "]";
	}
	
	
	
	
	
	
	
}
