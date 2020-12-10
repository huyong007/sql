## 核心概念
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