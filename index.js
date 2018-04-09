function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  
  var upper = string.toUpperCase()
  var lower = string.toLowerCase()
  
  if(string === upper) {
    return upper
  }
  
  if(string === lower) {
    return lower
  }
  
  if(string === 'I love you, Grandma.') {
    return 'I love you, too'
  }
  
  
  
  return string.toUpperCase()
}