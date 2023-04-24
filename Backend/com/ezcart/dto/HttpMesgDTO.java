package com.ezcart.dto;

import org.springframework.http.HttpStatus;

public class HttpMesgDTO {
	
	private String successMesg;
	private String errorMesg;
	private HttpStatus successCode;
	private HttpStatus errorCode;
	public String getSuccessMesg() {
		return successMesg;
	}
	public void setSuccessMesg(String successMesg) {
		this.successMesg = successMesg;
	}
	public String getErrorMesg() {
		return errorMesg;
	}
	public void setErrorMesg(String errorMesg) {
		this.errorMesg = errorMesg;
	}
	public HttpStatus getSuccessCode() {
		return successCode;
	}
	public void setSuccessCode(HttpStatus ok) {
		this.successCode = ok;
	}
	public HttpStatus getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(HttpStatus badRequest) {
		this.errorCode = badRequest;
	}
	@Override
	public String toString() {
		return "HttpMesgDTO [successMesg=" + successMesg + ", errorMesg=" + errorMesg + ", successCode=" + successCode
				+ ", errorCode=" + errorCode + "]";
	}
	
	
	
}
