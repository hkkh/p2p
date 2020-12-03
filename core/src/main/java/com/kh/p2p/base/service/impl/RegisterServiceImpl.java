package com.kh.p2p.base.service.impl;

import com.kh.p2p.base.domain.Logininfo;
import com.kh.p2p.base.mapper.LogininfoMapper;
import com.kh.p2p.base.service.IRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterServiceImpl implements IRegisterService {

    @Autowired
    LogininfoMapper mapper;

    public void register(String name, String pw) {
        Long count = mapper.selectCountWithName(name);
        if (count > 0) {
            throw new RuntimeException("账户已存在");
        } else {
            Logininfo logininfo = new Logininfo();
            logininfo.setName(name);
            logininfo.setPw(pw);
            logininfo.setState(Logininfo.LONININFO_NORMAL);
            mapper.insert(logininfo);
        }
    }
}
