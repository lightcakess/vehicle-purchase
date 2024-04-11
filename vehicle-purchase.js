export function needsLicense(kind) {

  return kind === 'truck' || kind === 'car'
/*   if (kind === 'truck' || kind === 'car'){
    return true
  } else{
    return false
  } */
}

export function chooseVehicle(option1, option2) {

  return (option1[0] < option2[0]) ? option1 + ' is clearly the better choice.' 
                                   : option2 + ' is clearly the better choice.';

/*   if (option1[0] < option2[0]){
    return option1 + ' is clearly the better choice.'
  } else{
    return option2 + ' is clearly the better choice.'
  } */
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3){
    return originalPrice * 0.8
  } else if(age > 10){
    return originalPrice * 0.5
  } else{
    return originalPrice * 0.7
  }
}
