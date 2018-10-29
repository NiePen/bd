package com.bd.dao;

import com.bd.bean.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {

    User selectUserByName(String name);
}
