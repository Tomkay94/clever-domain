/* Returns a clever domain for the given text, if one exists. */
function checkDomains() {

  /* Get the input string */
  var userString = document.getElementById("domainInput").value;

  /* Sample list of domain suffixes */
  var data = [
    'io',
    'biz',
    'im',
    'info'
  ];

  /* Try to find a matching domain ending. */
  for(var ending = 0; ending < data.length; ++ending) {
    var domain = data[ending];

    if(userString.slice(userString.length - domain.length, userString.length) === domain) {
      var domainPrefix = userString.slice(0, userString.lastIndexOf(domain[0]) );
      var pickedDomain = domainPrefix + '.' + domain;
      break;
    };

  };

  /* Check if a domain was found. */
  if (typeof domainPrefix === 'undefined') {
    message = 'No clever domains were found for \'' + userString + '\' :(';
  }

  else {
    message = 'Congrats! We\'ve found a domain for you: ' + pickedDomain;
  }

  setDivMessage(message);
  return;

};

/* Set the message to the output div. */
function setDivMessage(message) {
  var outputDiv = document.getElementById("domainOutput");
  outputDiv.textContent = message;
  outputDiv.style.display = "block";
};
