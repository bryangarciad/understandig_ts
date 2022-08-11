// Enum only exists in TS
// enum {NEW,OLD}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} // Upper case is for standard but not a must

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: number; // enum assign numbers to identifiers
} = {
  name: "ramses",
  age: 27,
  hobbies: ["coding", "videogames"],
  role: Role.ADMIN,  // 0
};

console.log(Role.AUTHOR); // this prints 0 in console


/* You can assign your own values to ENUMS, in the example bellow ADMIN will take 5 an the next
elements will take id incrementing the previus element, therefore, READ_ONLY will take 6 an so only */
enum Role2 {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
} 

/* You can assign your own values to ENUMS to all elements, in the example bellow first two elements have
 own id's but AUTHOR is not so will take it incrementally based on his previus element taking 201 */
enum Role3 {
  ADMIN = 100,
  READ_ONLY = 200,
  AUTHOR,
} 

/* You can assign your own values to ENUMS with STRINGS, but TS will not know how to assign next elements
 therefore you'll must assign either id's manually and allow TS to continue incrementally or assing id 
 to all elements */
enum Role4 {
  ADMIN = "STRING MOFO",
  READ_ONLY = 200,
  AUTHOR,
} 

// example with touple
const person: {
  // explicit assignment I could use interfaces
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // touple
} = {
  name: "ramses",
  age: 27,
  hobbies: ["coding", "videogames"],
  role: [1, "engineer"],
};