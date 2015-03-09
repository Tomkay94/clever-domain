/* Returns a clever domain for the given text, if one exists. */
function checkDomains() {

  /* Get the input string */
  var userString = document.getElementById("domainInput").value;

  /* The input was empty */
  if (userString.length == 0) {
    message = 'That was empty! Please input a word or phrase.';
    setDivMessage(message, false);
    return;
  }

  const MIN_DOMAIN_LENGTH = 2;

  /* Scraped list of possible TLDs */
  var data = [
    "com","org","net","int","edu","gov","mil","arpa","ac","ad","ae","af","ag","ai","al","am","an","ao","aq","ar","as","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","bq","br","bs","bt","bv","bw","by","bz","ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cs","cu","cv","cw","cx","cy","cz","dd","de","dj","dk","dm","do","dz","ec","ee","eg","eh","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","nl","no","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","ss","st","su","sv","sx","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","ye","yt","yu","za","zm","zr","zw","academy","accountants","active","actor","adult","aero","agency","airforce","app (gTLD)","archi","army","associates","attorney","auction","audio","autos","band","bargains","beer","best","bid","bike","bio","biz","black","blackfriday","blue","boo","boutique","build","builders","business","buzz","cab","camera","camp","cancerresearch","capital","cards","care","career","careers","cash","catering","center","ceo","channel","cheap","christmas","church","city","claims","cleaning","click","clinic","clothing","club","coach","codes","coffee","college","community","company","computer","condos","construction","consulting","contractors","cooking","cool","country","credit","creditcard","cricket","cruises","dad","dance","dating","day","deals","degree","delivery","democrat","dental","dentist","diamonds","diet","digital","direct","directory","discount","domains","eat","education","email","energy","engineer","engineering","equipment","esq","estate","events","exchange","expert","exposed","fail","farm","feedback","finance","financial","fish","fishing","fitness","flights","florist","fly","foo","forsale","foundation","fund","furniture","futbol","gallery","gift","gifts","gives","glass","global","gop","graphics","green","gripe","guide","guitars","guru","healthcare","help","here","hiphop","hiv","holdings","holiday","homes","horse","host","hosting","house","how","irish","info","ing","ink","institute[51]","insure","international","investments","jobs","kim","kitchen","land","lawyer","legal","lease","lgbt","life","lighting","limited","limo","link","loans","lotto","luxe","luxury","management","market","marketing","media","meet","meme","memorial","menu","mobi","moe","money","mortgage","motorcycles","mov","museum","name","navy","network","new","ngo","ninja","ong","onl","ooo","organic","partners","parts","party","pharmacy","photo","photography","photos","physio","pics","pictures","pink","pizza","place","plumbing","poker","porn","post","press","pro","productions","prof","properties","property","qpon","recipes","red","rehab","ren","rentals","repair","report","republican","reviews","rich","rip","rocks","rodeo","rsvp","science","services","sexy","shoes","singles","social","software","solar","solutions","space","supplies","supply","support","surf","surgery","systems","tattoo","tax","technology","tel","tips","tires","today","tools","top","town","toys","trade","training","travel","university","vacations","vet","villas","vision","vodka","vote","voting","voyage","wang","watch","webcam","website","wed","whoswho","wiki","work","works","world","wtf","xxx","xyz","yoga","zone","maison","abogado","gratis","juegos","soy","tienda","uno","viajes","haus","immobilien","jetzt","kaufen","reise","reisen","schule","versicherung","desi","shiksha","casa","immo","moda","voto","bar","coop","enterprises","industries","institute","ltda","pub","realtor","reit","rest","restaurant","sarl","ventures","capetown","durban","joburg","asia","krd","nagoya","okinawa","ryukyu","taipei","tatar","tokyo","yokohama","alsace","bayern","berlin","brussels","budapest","bzh","cat","cologne","cymru","eus","frl","gal","gent","hamburg","koeln","london","madrid","moscow","nrw","paris","ruhr","saarland","scot","tirol","vlaanderen","wales","wien","miami","nyc","quebec","vegas","kiwi","melbourne","sydney","rio","allfinanz","android","aquarelle","axa","bloomberg","bmw","bnpparibas","cal","caravan","cern","chrome","citic","crs","cuisinella","dnp","dvag","emerck","everbank","firmdale","flsmidth","frogans","gbiz","gle","globo","gmail","gmo","gmx","google","ibm","kred","lacaixa","latrobe","lds","mango","mini","monash","mormon","neustar","nexus","nhk","nra","otsuka","ovh","pohl","praxi","prod","sca","scb","schmidt","sohu","spiegel","suzuki","tui","uol","williamhill","wme","wtc","yandex","youtube"
  ];

  /* Try to find a matching domain ending. */
  for(var ending = 0; ending < data.length; ++ending) {
    var domain = data[ending];
    var foundTLD = userString.slice(userString.length - domain.length, userString.length);

    if(foundTLD === domain && userString.length > MIN_DOMAIN_LENGTH) {
      var domainPrefix = userString.slice(0, userString.lastIndexOf(domain[0]));
      var pickedDomain = domainPrefix + '.' + domain;
      break;
    };

  };

  /* Check if a domain was found. */
  if (typeof domainPrefix === 'undefined') {
    message = 'No clever domains were found for \'' + userString + '\' :(';
    foundDomain = false;
  }

  else {
    message = 'Congrats! We\'ve found a domain with a clever suffix for you: ' + pickedDomain;
    foundDomain = true;
  }

  setDivMessage(message, foundDomain);
  return;

};

/* Set the message to the output div.
   Style the div based on domainWasFound. */
function setDivMessage(message, domainWasFound) {
  var outputDiv = document.getElementById("domainOutput");
  outputDiv.textContent = message;
  outputDiv.style.display = "block";

  /* Reset the class name to the new name */
  outputDiv.className = "";
  outputDiv.className = (domainWasFound === true) ? 'btn btn-success' : 'btn btn-warning';
}
