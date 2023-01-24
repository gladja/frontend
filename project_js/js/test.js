var number = function(busStops){

  let sum = 0
  const sunBusStop = busStops.map(item => sum += (item[0]-item[1]));
  // sunBusStop.map((item ,idx) =>  sum += item);
  console.log(sunBusStop);
  console.log(sum);
  return sum;
    };

number([[10,0],[3,5],[5,8]]); //5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]); //17