//using if and else if
for (var i=1; i<=10; i++) {
    if (i == 1){
        console.log("Gold Medal")
    } else if ( i == 2){
        console.log("silver Medal")
    } else if (i==3) {
        console.log("Bronze Medal")
    } else {
        console.log(i)
    }
}

// using switch rather than if and else if
for (var i=1; i<=10; i++) {
    switch (i){
        case 1:
            console.log("Gold Medal")
            break
        case 2:
            console.log("silver Medal")
            break
        case 3:
            console.log("Bronze Medal")
            break
     default:
        console.log(i)
        break
    }
}