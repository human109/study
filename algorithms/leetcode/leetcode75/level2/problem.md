# 205. Isomorphic Strings

## 문제 설명
```
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
```

## 입출력 예
### Example 1 :
```
input : s = "egg, t = "add"

output : true
```

### Exmaple 2 :
```
input : s = "foo", t = "bar"
output : false
```

### Exmaple 2 :
```
input : s = "paper", t = "title"
output : false
```

## Solution(내가 한 것)
```js
let isIsomorphic = (s, t) => {
    let answer = true;
    let sArray = [];
    let tArray = [];
    
    for(let i = 0 ; i < s.length ; i++) {
        if(i === 0) { 
            sArray.push(s.at(i));
            tArray.push(t.at(i));
        }
        else if( (sArray.includes(s.at(i)) || tArray.includes(t.at(i))) && tArray[sArray.indexOf(s.at(i))] !== t.at(i)) answer = false;
        else if( (sArray.includes(s.at(i)))) continue;
        else {
            sArray.push(s.at(i));
            tArray.push(t.at(i));
        }

    }
    return answer;
}
```
느리다.

## Solution(더 나은 방법)
```js
let isIsomorphic = (s, t) => {
    if(s.length != t.length) return false;

    let sMap = {};
    let tMap = {};
    
    for(let i = 0 ; i < s.length ; i++) {
        let sChar = s[i];
        let tChar = t[i];
        if(sMap[sChar] == undefined) sMap[sChar] = tChar;
        if(tMap[tChar] == undefined) tMap[tChar] = sChar;
        
        if(sMap[sChar] != tChar || tMap[tChar] != sChar) return false;
    }
    
    return true;
}
```