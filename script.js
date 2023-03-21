function accomodation(month, days){
    // let appartment_price = 0;
    // let studio_price = 0;
    // let total_studio
if (month === 'string'){
    console.log('please enter a valid month')
    return false
}
if (isNaN(days)){
    console.log('please enter a valid days')
    return false
}

if(month === 'May' || month === 'october'){
    appartment_price = 65;
    studio_price = 50;
     if(days > 7 && days <= 14){
        studio_price = (studio_price*days) - (studio_price*days)*(5/100);
        appartment_price = (appartment_price*days)
    }else if (days > 14){
        appartment_price = (appartment_price*days)- (appartment_price*days)*(10/100)
        studio_price =(studio_price*days)-(studio_price*days)*(30/100);        
    }
    else{
        appartment_price = appartment_price*days;
        studio_price = studio_price * days
    }
    return `appartment: ${appartment_price.toFixed(2)}NGN \n studio ${studio_price.toFixed(2)}NGN`

}
 if(month === 'June' || month === 'september'){
    appartment_price = 68.70;
    studio_price = 75.20
    if (days > 14){
        studio_price =(studio_price*days)-(studio_price*days)*(20/100);
        appartment_price = (appartment_price*days)- (appartment_price*days)*(10/100)
 }else{
    appartment_price = appartment_price*days;
    studio_price = studio_price*days
 }
 return (`appartment: ${appartment_price.toFixed(2)}NGN \n studio: ${studio_price.toFixed(2)}NGN`)
    
}
if(month === 'July' || month === 'August'){
    appartment_price = 77;
    studio_price = 76
    if (days > 14){
        studio_price =studio_price*days
        appartment_price = (appartment_price*days)- (appartment_price*days)*(10/100)
 }else{
    appartment_price = 77*days;
    studio_price = 76*days
 }
 return (`appartment: ${appartment_price.toFixed(2)}NGN \n studio: ${studio_price.toFixed(2)}NGN`)
    
}
}
console.log(accomodation('May', 15))
console.log(accomodation('June', 14))
console.log(accomodation('August', 20))