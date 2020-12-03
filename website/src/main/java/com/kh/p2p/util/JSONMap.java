package com.kh.p2p.util;


public class JSONMap {
    private int status = 1;
    private String msg = "成功";

    public JSONMap() {
    }

    public JSONMap(int status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    public int getStatus() {
        return status;
    }

    public String getMsg() {
        return msg;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
