// High Order Array Loops

// 1) for-of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const name = "Praveen Desai"
for (const c of name) {
    if(c == " ") continue;
    // console.log(c);
    
}

// Maps
const map = new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA','United States of America')

for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}


// applying for-of loop on Object
const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}

for (const [k,v] of myObject) {
    console.log(k,":-",v);
    
}