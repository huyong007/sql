## 核心概念
- 数据库底层存储的核心就是基于这些数据模型的。每碰到一个新数据库，我们需要先关注它的数据模型，这样才能从理论上分析出这个数据库的适用场景



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