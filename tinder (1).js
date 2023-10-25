var rnd = function(min, max) {
  return Math.floor( Math.random() * (max - min) ) + min;
};
var rndListItem = function(array){
  return array[rnd(0,array.length)];
};

var actions = {
    Response:function(){
      return rndListItem([
        "אתה יודע... כמה שאפשר",
        "מחזיקים מעמד *משיכה בכפתיים*",
        "עושים מה שאפשר",
"אני לא כ״כ יודעת מה לענות בימים האלה",
"אתה יודע...",
"קשה... אבל ממשיכים",
"*עצימה איטית של עיניים והנהון*",
	
      ]);
    },
    Age:function(){
      return rndListItem([
        "23",
        "24",
        "25",
        "26",
        "27"
      ]);
    },
    From:function(){
      return rndListItem([
        "Lives in Rehovot",
        "Lives in Tel Aviv",
        "עכשיו בתל אביב אבל מושבנקית בדם Lives in",
        "תל אביב Lives in",
		"Lives in Ramat gan",
		"Lives in TLV"
      ]);
    },
    Love1:function(){
      return rndListItem([
     "אוהבת המבורגר,",
	"אוהבת פיצה,",
     "אוהבת בירה,",
     "אוהבת יין טוב, ",
     "אוהבת להנות,"
      ]);
    },
    Love2:function(){
      return rndListItem([
    " קפה טוב",
    "פואטרי סלאם",
    "פירות",
	"בעלי חיים",
"ספורט ואקסטרים",
	"ירקות",
    "שקיעות"
      ]);
    },
    Love3:function(){
      return rndListItem([
        "ונטפליקס.",
        "וסרטים.",
        "וטיולים.",
        "וסדרות."
      ]);
    },
    Extra:function(){
      return rndListItem([
        "חברים זה החיים! ",
        "420",
		"לא מעשנים",
        "חייב לאהוב כלבים",
        "מכירה את כל המשרד בעל-פה",
		"אותיות איתן נעים להכיר",
"אם יש לך סלפי בלי חולצה זה לא יעבוד בינינו"
      ]);
    },
    lookingFor:function(){
      return rndListItem([
        "קשר רציני",
        "לא מחפשת משחקים",
        "לרציניים בלבד",
   "לא פה לסטוצים",
   "מחפשת את האחד שיקום איתי ב6 בבוקר לפקל קפה",
   "מעדיפה מעיין וספר על מסיבה",
 "1.8 ומעלה",
 "אל תשלח הודעה אם אתה לא אוהב סושייי"
    

      ])
    }
};


var randomImage = new Array(); 
	randomImage[0] = "profile.png"; 		
	randomImage[1] = "profile1.png"; 
	randomImage[2] = "profile2.png";


function getRandomImage() { 
	var number = Math.floor(Math.random()*randomImage.length);
	console.log(number);
	console.log(randomImage[number])
	return(randomImage[number]);
}

module.exports =  function(){
  with(actions){
    var str = Names();
	str +=  Response() 
    return str;
  }
};

function rndPic(){
console.log(document.getElementById('random-pic').src);
document.getElementById('random-pic').src = getRandomImage();};

function domGen(){document.getElementById('random-text').innerHTML = gen();};
