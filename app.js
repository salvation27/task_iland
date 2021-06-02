let grid1 = [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
];

let grid2 = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
];

// console.log(grid2[0].length);

let numIsland = function(grid){
 
 let counter = 0
 let rowsL = grid.length
 let colsL = grid[0].length
 if(rowsL === 0) return 0

 function  markNaibar (grid,R,C){
   grid[R][C] ='6'
    if(grid[R][C-1] === '1'){markNaibar(grid,R,C-1)}
    if(grid[R][C+1] === '1'){markNaibar(grid,R,C+1)}
    if(grid?.[R-1]?.[C] === '1'){markNaibar(grid,R-1,C)}
    if(grid?.[R+1]?.[C] === '1'){markNaibar(grid,R+1,C-1)}
 }

for(let R = 0 ; R < rowsL; R ++ ){
    for(let C = 0; C < colsL;C++ ){
      if(grid[R][C] === '1'){
        counter++
        markNaibar(grid,R,C)
      }
    }
}


 return counter
}

console.log(numIsland(grid1));
console.log(numIsland(grid2));