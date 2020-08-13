var rnd = function(min, max) {
  return Math.floor( Math.random() * (max - min) ) + min;
};
var rndListItem = function(array){
  return array[rnd(0,array.length)];
};

var actions = {
    object:function(){
      return rndListItem([
        "קורל,",
        "נוי,",
        "לינוי,",
        "לינוי,",
        "נוגה,",
        "אורלי,"
      ]);
    },
    adobj:function(){
      return rndListItem([
        "בת 23",
        "בת 24",
        "בת 25",
        "בת 26",
        "בת 27"
      ]);
    },
    witha:function(){
      return rndListItem([
        "מרחובות",
        "מראשון לציון",
        "מקריית אונו",
        "מהרצליה"
      ]);
    },
    madeBy:function(){
      return rndListItem([
     "אוהבת המבורגר,",
        "אוהבת בירה,",
        "אוהבת יין טוב, ",
        "אוהבת להנות,"
      ]);
    },
    whileThey:function(){
      return rndListItem([
    " קפה טוב",
        "פואטרי סלאם",
        "פירות",
        "שקיעות"
      ]);
    },
    because:function(){
      return rndListItem([
           "ונטפליקס.",
        "וסרטים.",
        "וטיולים.",
        "וסדרות."
      ]);
    },
    but:function(){
      return rndListItem([
         "חברים זה החיים! ",
        "ברוקלין 9-9! ",
        "איך פגשתי את אמא! ",
        "מכירה את כל המשרד בעל-פה"
      ]);
    },
    psv:function(){
      return rndListItem([
        "קשר רציני",
        "לא מחפשת משחקים",
        "לרציניים בלבד",
   "לא פה לסטוצים",
 "1.8 ומעלה"
      ])
    }
};

module.exports =  function(){
  with(actions){
    var str = object();
    str += " " + adobj() + "  " + witha() + "</br>";
    str += madeBy() + " " + whileThey() + " " + because() + "</br>";
    str += but() + "</br>";
    str += psv();
    return str;
  }
};
