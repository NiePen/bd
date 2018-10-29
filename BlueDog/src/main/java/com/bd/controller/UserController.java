package com.bd.controller;

import com.bd.bean.User;
import com.bd.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 用户类控制层
 *
 * @author Administrator
 * @create 2018-10-29 20:44
 */
//@RestController相当于@Controller与@ResponseBody
@RestController
public class UserController {

    //依赖注入
    @Autowired
    UserDao userMapper;

    @RequestMapping(value = "/find")
    public User findUserByName(){
        System.out.println("aaaaaaaaaaaaaa");
        //调用dao层
        User user = userMapper.selectUserByName("jay");
        System.out.println(user);
        //返回json数据，因为restController注解中有@ResponseBody的作用
        return user;

    }

}
