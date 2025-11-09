function maskEmail(email){
  let maskStart = 1;
  let maskEnd = email.indexOf("@")-1;
  let mask = "*".repeat(maskEnd-maskStart);
  let maskedEmail = `${email.slice(0,1)}${mask}${email.slice(maskEnd)}`;
  return maskedEmail;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));