## 核心概念
- 一条查询语句执行过程经历一般是：连接器->分析器->优化器->执行器等功能模块，最后到达存储引擎
  + 连接器：管理连接，权限验证
  + 分析器：吃法分析，语法分析
  + 查询缓存：命中则直接返回结果
  + 优化器：执行计划生成，索引选择
  + 执行器：操作引擎，返回结果
  + 存储引擎：存储数据，提供读写接口
- redo log 重做日志:保证异常重启，之前提交的记录都不会丢失，这个能力称为**crash-safe**，这个是InnoDB特有的日志
- binlog 归档日志
  + 两个日志的异同点：
    * redo log 是InnoDB引擎特有的；binlog是MySQL的Server层面实现的，所有引擎都可以使用
    * redo log是物理日志，记录的是“在某个数据页上做了什么修改”；binlog是逻辑日志，记录的是这个语句的原始路基，比如，给id=2这一行的c字段加1
    * redo log是循环写的，空间固定会用完；binlog是可以追加写入的，“追加写”是指binlog文件写到一定大小会切换到写一个并不会覆盖以前的日志
- WAL技术--Write-Ahead Logging ，先写日志，再写磁盘
- 数据库底层存储的核心就是基于这些数据模型的。每碰到一个新数据库，我们需要先关注它的数据模型，这样才能从理论上分析出这个数据库的适用场景
- 当内存数据页跟磁盘数据页内容不一致的时候，我们称这个内存页为“脏页”
- 内存数据写入到磁盘后，内存和磁盘上的数据页的内容就一致了，成为‘干净页’
- InnoDB使用缓存池（buffer pool）管理内存，缓存池中的内存页有三种状态：
  + 还没有使用的
  + 使用了并且是干净页
  + 使用了并且是脏页
- InnoDB的刷盘速度参考两个因素：
  + 脏页比例
  + redo log写盘速度
- 建议将innodb_file_per_table设置为ON；如此，每个InnoDB表数据存储在一个以.ibd为后缀的文件中，一个表单独存储为一个文件更容易管理，不需要的时候，通过drop table命令，系统直接删除这个文件，如果放在共享表空间中也就是为OFF的时候，表删除了，空间也不会回收
- 


### 查询语句
- select 
- from 
- order by 
- desc
- group by 
- where
- and
- or
- not
- having 满足where不能和聚合语句group by联合使用
- inner join ... on ... 会形成一个表 查询结束就没了,常用于需要计算的子表数据的情况
- min
- max
- avg
- sum
- count
- as
- limit 
- offset
- like
- 窗口函数 <窗口函数> over (partition by <用于分组的列名> order by <用于排序的列名>) 
- 窗口函数位置可以放置如下两种函数:
  + rank,dese_rank,row_number(函数括号内无需放置聚合的列名)
  + sum,avg,count,max,min(函数括号内需要放置需要聚合的列名)
- 窗口函数绝大部分都是作为select子句来使用
- 窗口函数总结的
- alter table SUser and index index2(email(6)) // 给SUser表加上索引index2并选取邮箱这个字符串字段的前六位作为索引