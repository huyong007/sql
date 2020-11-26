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