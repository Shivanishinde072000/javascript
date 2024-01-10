
const map=new Map();
map.set("Height","6ft");
map.set("Weigth",78);
map.set("Name","Shivani");
map.set("City","Pune");
map.set("Married_status",true);
console.log(map);
console.log(map.get("Name"));

console.log(`Adding duplicate key-name`);
map.set("Name","Shivani Shinde");
console.log(map);

map.set("Country" ,"Pune");
console.table(map);

console.log(`Map size is: ${map.size}`);
map.delete("Country");
console.table(map);

console.log(map.keys());
console.log(map.values());

console.log(`Map traversing...`);
const keys = map.keys();
for (const key of keys) {
    console.log(`${key} ==> ${map.get(key)}`);
}