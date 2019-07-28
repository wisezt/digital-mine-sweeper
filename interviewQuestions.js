// function getCommonElements(array01, array02) {
//   var theComEleArr = [];
//
//
//   for (var i = 0; i < array01.length; i++) {
//     if (array02.indexOf(array01[i]) > -1) {
//       theComEleArr.push(array01[i]);
//     }
//
//
//   }
//   return theComEleArr;
// }
// var theArray01 = [1, 2, 3, 4, 5, 6, 2, 3];
// var theArray02 = [3, 4, 5, 6, 5, 3, 2, 3, 7];
//
// console.log(getCommonElements(theArray01, theArray02));
//
//



//
function addNumberForArround(x, y, map) {
  // console.log("map[0].length: " + map[0].length);
  var theX = x;
  var theY = y;

  for (var i = -1; i < 2; i++) {
    theX = x + i;
    console.log("theX: " + theX);
    for (var j = -1; j < 2; j++) {
      theY = y + j;
      console.log("theY: " + theY);


      if (theX >= 0 && theX < map.length && theY >= 0 && theY < map[0].length && (map[theX][theY] != -1)) {

        map[theX][theY] = map[theX][theY] + 1;
        console.log("theX: " + theX + " theY: " + theY + " map[theX][theY]: " + map[theX][theY]);
      }

    theY = y;

    }
    theX = x;



  }




  // if ((x >= 0) && (x < map.length) && (y >= 0) && (y < map[0].length)) {
  //   if (map[x][y] != -1){
  //
  //
  //   map[x][y] = map[x][y] + 1;

  // console.log(" map[x][y]: " + map[y][x]);

}





function minesweeper(bombs, num_rows, num_cols, ) {
  var map = [];
  var map_rows = [];


  for (var i = 0; i < num_rows; i++) {

    for (var j = 0; j < num_cols; j++) {
      map_rows.push(0);

    }
    console.log(map_rows);
    map.push(map_rows);
    map_rows = [];
  }

  console.log(" map_length: " + map.length + " map_row_length: " + map[1].length);


  for (var i = 0; i < bombs.length; i++) {
    // console.log("bombs.length: " + bombs.length);
    var x = bombs[i][0];
    var y = bombs[i][1];

    map[x][y] = -1;

  }

  for (var i = 0; i < bombs.length; i++) {

    var x = bombs[i][0];
    var y = bombs[i][1];
    addNumberForArround(x, y, map);

    // console.log("origin: x: " + x + " y: " + y);
    //
    //
    // console.log("first layer");
    // addNumberForArround(x - 1, y - 1, map);
    // addNumberForArround(x , y - 1, map);
    // addNumberForArround(x + 1, y - 1, map);
    //
    // console.log("second layer");
    //
    // addNumberForArround(x - 1, y , map);
    // addNumberForArround(x + 1, y , map);
    //
    // console.log("thired layer");
    // addNumberForArround(x - 1, y + 1, map);
    // addNumberForArround(x , y + 1, map);
    // addNumberForArround(x + 1, y + 1, map);







  }







  console.log(map);

}









var theBombs = [
  [0, 0],
  [1, 2],
  [3, 4]
];

minesweeper(theBombs, 5, 6);
