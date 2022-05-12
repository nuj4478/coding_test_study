///////////////////// 실행: F5

let dp = new Array();

// 1. 탑다운
// const fibo = (x) => {
//     if( x==1 || x==2 ) return 1;
//     if( dp[x] != undefined ) return dp[x];
//     dp[x] = fibo(x-1) + fibo(x-2);
//     return dp[x];
// }
// console.log(fibo(99));



// 2. 보텀업
// const fibo = (x) => {
//     dp[1] = 1;
//     dp[2] = 1;
//     for(var i=3; i<100; i++)
//         dp[i] = dp[i-1] + dp[i-2]
//     return dp[x]
// }
// console.log(fibo(99));



// 3. 개미 전사
// const array = [1, 3, 1, 5]; // 답:8

// dp[0] = array[0];
// dp[1] = Math.max(array[0], array[1]);

// for( var i = 2; i < array.length; i++ )
//     dp[i] = Math.max(dp[i-1], dp[i-2] + array[i]);

// console.log(dp[array.length-1]);



// 4. 1로 만들기
// const num = 26; // 답:3

// for (let i = 0; i < num + 1; i++) dp[i] = 0;

// for (let i = 2; i < num + 1; i++){
//     dp[i] = dp[i-1] + 1;
   
//     if (i%5 == 0){
//         dp[i] = Math.min(dp[i], dp[i/5] + 1);
//     }
//     if (i%3 == 0){
//         dp[i] = Math.min(dp[i], dp[i/3] + 1);
//     }
//     if (i%2 == 0){
//         dp[i] = Math.min(dp[i], dp[i/2] + 1);
//     }
// }
// console.log(dp[num]);



// 5. 효율적인 화폐 구성
// const total = 15;
// const money = [2, 3, 5]; // 화폐 단위

// for (let i = 0; i < total + 1; i++){
//     dp[i] = 10001;
// }
// dp[0] = 0;
// for (let i = 0; i < money.length; i++){ 
//     for (let j = money[i]; j < total + 1; j++){ 
//         if ( dp[j-money[i]] != 10001 ){ 
//             dp[j] = Math.min(dp[j], dp[j-money[i]] + 1);
//         }
//     }
// }
// if (dp[total] == 10001) console.log(-1);
// else console.log(dp[total]);



// 6. 금광
// const gold = [[1, 3, 3, 2],[2, 1, 4, 1],[0, 6, 4, 7]]; // 답: 2 8 12 <19> 
// // const gold = [[1, 3, 1, 5],[2, 2, 4, 1],[5, 0, 2, 3],[0, 6, 1, 2]]; // 답: 5 11 13 <16> 

// const array = gold[0].map((_, colIndex) => gold.map(row => row[colIndex]));

// for (let i = 0; i <gold[0].length; i++){
//     dp[i] = 0;
// }
// dp[0] = Math.max(...array[0]); // dp: [2,0,0,0]
// var col = array[0].indexOf(dp[0]); // 1 
// var next = 0;

// for (let i = 1; i < gold[0].length; i++){ // 1 2 3 < 4
//     if ( col-1 >= 0 ){ //위
//         dp[i] = Math.max(dp[i], dp[i-1] + gold[col-1][i]);
//         next = array[i].indexOf(dp[i]-dp[i-1]);
//     }

//     if ( col+1 < gold.length){ //아래
//         dp[i] = Math.max(dp[i], dp[i-1] + gold[col+1][i]);
//         next = array[i].indexOf(dp[i]-dp[i-1]);
//     }

//     if ( i <= gold[0].length-1 ){ //옆
//         dp[i] = Math.max(dp[i], dp[i-1] + gold[col][i]);
//         next = array[i].indexOf(dp[i]-dp[i-1]);  
//     }   
//     col = next;
// }
// console.log(dp);



// 7. 가장 큰 정사각형 찾기
// let square = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]; // 답:9
// // let square = [[0,0,1,1],[1,1,1,1]]; // 답:4

// // dp = square.map(nemo => nemo.slice());
// for (var i = 0; i < square.length; i++) {
//     for (var j = 0; j < square[0].length; j++) {
//         dp[i] = square[i].slice();
//     }
// }

// let row = 0;
// for (var i = 1; i < square.length; i++) {
//     for (var j = 1; j < square[0].length; j++) {
//         if (dp[i][j] != 0 ){
//             dp[i][j] = Math.min( dp[i][j] + dp[i-1][j-1], dp[i][j] + dp[i-1][j], dp[i][j] + dp[i][j-1] );
//             row = Math.max(dp[i][j], row);
//         }
//     }
// }
// console.log(row * row);



// 8. 정수 삼각형
// let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]; // 답:30

// for (let i = triangle.length; 0 < i; i--){ //5 4 3 2 1 
//     for (let j = 0; j < triangle[i-1].length; j++){ 
//         if ( j != triangle[i-1].length-1 && i >= 2){
//             triangle[i-2][j] = Math.max(triangle[i-1][j] + triangle[i-2][j], triangle[i-1][j+1] + triangle[i-2][j]);
//         }
//     }
// }
// console.log(triangle[0][0]);

