- 使用前缀索引,定义好长度,就可以做到既节省空间,又不用额外增加太多的查询成本
- 建立索引的区分度,区分度越高越好,因为区分度越高,意味着重复的键值越少
  + mysql> select count(distinct left(email,4)) as L4, count(distinct left(email,5)) as L5 from SUser;
- 倒序存储
- 使用hash字段
- 两者都不支持范围查询