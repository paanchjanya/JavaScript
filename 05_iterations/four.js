const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    py : 'python'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(key,"-", programming[key]);
    
}

const map = new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA','United States of America')

for (const key in map) {
    // console.log(key);
    
}

