var body = context.getVariable("request.content");
var encodedAssertion = body.split("&SAMLResponse=")[1];
var decodedAssertion = samldecode(encodedAssertion); 
context.setVariable("request.content", decodedAssertion);
context.setVariable("request.header.Content-Type", "application/xml");