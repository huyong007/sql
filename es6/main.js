function Person(name){
    if(name.target===Person){
        this.name = name;
    }else{
        console.log('wrong')
        // new target属性
    }
}