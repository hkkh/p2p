package com.kh.p2p.base.domain;

public class Logininfo {

    public static final Byte LONININFO_NORMAL = 0;
    public static final Byte LONININFO_ERROR = 1;

    private Long id;
    private String name;
    private String pw;
    private Byte state;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }
    public String getPw() {
        return pw;
    }
    public void setPw(String pw) {
        this.pw = pw == null ? null : pw.trim();
    }
    public Byte getState() {
        return state;
    }
    public void setState(Byte state) {
        this.state = state;
    }
}