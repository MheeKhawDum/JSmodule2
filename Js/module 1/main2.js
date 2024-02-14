function palindromesCheck(words){
    let a = [...words]
    let reverseArray = a.reverse();
    let newWord = reverseArray.reduce((a,b)=>a+b);

    if(newWord === words){
        return `${words} is Palindrome`
    }else{
        return `${words} is not Palindrome`
    }
    
}

function palindromeGroup(Array){
    Array.forEach(element => {
        let a = [...element]
        let reverseArray = a.reverse();
        let newWord = reverseArray.reduce((a,b)=>a+b);

        if(newWord === element){
            console.log( `${element} is Palindrome`)
        }else{
            console.log( `${element} is not Palindrome`)
        }
    });
}

palindromes = ["radar", "level", "civic", "racecar", "madam", "refer", "deed", "noon", "kayak"]
palindromeGroup(palindromes)
console.log(palindromesCheck("tenet"))

