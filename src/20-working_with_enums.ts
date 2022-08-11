// Enum only exists in TS
// enum {NEW,OLD}

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
  role: [1, "software engineer"]
};
