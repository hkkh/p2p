package com.kh.p2p.base.util;


/**
 * 一般性加密服务，用于邮件或手机等登录方式。
 * 
 * @author apple
 * 
 */
public class MD5PasswordEncoder {
	final static MD5 m = new MD5();

	public static String encode(String plainText) {

		if (plainText == null) {
			return "";
		}
		return m.getMD5ofStr(plainText.trim().toLowerCase());
	}

}
