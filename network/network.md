root@test:~# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether fa:16:3e:c7:79:75 brd ff:ff:ff:ff:ff:ff
    inet 10.100.122.2/24 brd 10.100.122.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec7:7975/64 scope link 
     
- ip地址来至哪里？
这里就要提到一个自动配置的协议DHCP（Dynamic Host Configuration Protocol），动态主机配置协议。有了这个协议，网络管理员就轻松多了。他只需要配置一段共享IP地址。每一台新接入的机器都会通过DHCP协议，去这个共享的IP地址池中进行申请，然后自动进行配置。用完了，就还回去，需要用时，再申请，也可以续租。 
这就好比租房子，你自己不用装修，都是帮你弄好了的，你只需要领包入住就行了。想接着住就续租，不想住了就退租
