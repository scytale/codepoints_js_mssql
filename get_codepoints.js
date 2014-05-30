//get a range of num char refs http://www.w3.org/MarkUp/html3/latin1.html
//edit values the the for loop condition
//paste back to ms sql server 2008 r2


var result="";

function codePointValue(number){
  return String.fromCodePoint(number);
};
for (var i=1;i<=255;i++){
  if (codePointValue(i) == ""){
    console.log("no value");
  } else {
      console.log(i + " is " + codePointValue(i));
      console.log("SELECT Id,TopicText,Description from Topic where TopicText like '%[" + codePointValue(i) + "]%' Collate SQL_Latin1_General_CP1_CS_AS" );
      console.log("UPDATE Topic SET TopicText=REPLACE(TopicText,'"+ codePointValue(i) + "','&#" + i + ";') WHERE Id in (" + "SELECT Id from Topic where TopicText like '%[" + codePointValue(i) + "]%' Collate SQL_Latin1_General_CP1_CS_AS)")
      result = result + codePointValue(i);
  }
}

console.log("SELECT Id,TopicText,Description from Topic where TopicText like '%[" + result + "]%' Collate SQL_Latin1_General_CP1_CS_AS" );
