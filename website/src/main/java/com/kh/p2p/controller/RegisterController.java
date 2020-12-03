package com.kh.p2p.controller;

import com.kh.p2p.base.service.IRegisterService;
import com.kh.p2p.util.JSONMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RegisterController {

    @Autowired
    IRegisterService service;

    @RequestMapping("register.do")
    @ResponseBody
    public JSONMap register(String phone, String password1) {
        JSONMap map = new JSONMap();
        try {
            if (phone != null && phone.length() > 0 && password1 != null && password1.length() > 0) {
                service.register(phone,password1);
                map.setMsg("注册成功");
            } else {
                map.setMsg("注册失败，请检查用户名和密码");
                map.setStatus(0);
            }
        } catch (Exception ex) {
            map.setMsg(ex.getMessage());
            map.setStatus(0);
        } finally {
            return  map;
        }
    }

}
