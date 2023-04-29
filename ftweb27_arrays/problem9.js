//spread operator(...) --> copy the array.

let class_room= ["luffy","zoro","nami","sanji"];

let class_room_2= ["goku", "vegita"];

// class_room.push(class_room_2);

// console.log(class_room);
let class_room_3= [...class_room, ...class_room_2];

console.log(class_room_3);