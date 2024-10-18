import { URL } from "url";
const myurl = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);
// console.log(myurl.hash);
// console.log(myurl.host)
// console.log(myurl.hostname)
// console.log(myurl.href)
// console.log(myurl.origin)
// console.log(myurl.password)
// console.log(myurl.pathname)
// console.log(myurl.port)
// console.log(myurl.protocol)
// console.log(myurl.search)
// console.log(myurl.searchParams)
// console.log(myurl.username)

//both are work in a same way
console.log(myurl.toString())
console.log(myurl.toJSON())
