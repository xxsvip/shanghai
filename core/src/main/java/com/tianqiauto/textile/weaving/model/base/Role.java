package com.tianqiauto.textile.weaving.model.base;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

/**
 * @ClassName Role
 * @Description TODO
 * @Author xingxiaoshuai
 * @Date 2019-02-19 16:12
 * @Version 1.0
 **/

@Entity(name = "base_role")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToMany
    @JoinTable(name = "base_role_permission", joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id"))
    private Set<Permission> permissions;

//    @ManyToMany(mappedBy = "roles",fetch = FetchType.LAZY)
//    private Set<User> users;

}
