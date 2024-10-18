import EventEmitter from "events";

//creating instance
const customEmitter = new EventEmitter();

// 1. on: listen/register for an event
// 2. once: listen/register for an event
// 3. emit: emit/call an event

// customEmitter.on("anyEventName", (name, id) => {
//   console.log(`user name: ${name}, id: ${id}`);
// }); //create event it can run on every call by use emit

customEmitter.once("anyEventName", (name, id) => {
  console.log(`user name: ${name}, id: ${id}`);
}); //create event it can run on first call by use emit

//call the anyEventName event
customEmitter.emit("anyEventName", "jeyapandi", 1);
customEmitter.emit("anyEventName", "jeyapandi2", 12);

