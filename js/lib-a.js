function entried(obj) {
    for(let [k,v] of Object.entries(obj)){
        console.log(`${JSON.stringify(k)}:${JSON.stringify(v)}`);
        
    }
}

entried({ a: 1, b: 3, c: { a: { b: 4 } } });