import path from "path";

// console.log(path.basename("/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"))
// console.log(path.basename("/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js", ".js"))
// console.log(path.dirname("/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"))
// console.log(path.extname("/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"))
// console.log(path.join("home", "onclicktechy"));
// console.log(path.join("home", "onclicktechy", ".."));
///home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js
// console.log(path.normalize("///home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"))
// console.log(path.parse("/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"))
console.log(
  path.parse(
    "/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"
  ).root
);
console.log(
  path.parse(
    "/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"
  ).dir
);
console.log(
  path.parse(
    "/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"
  ).base
);
console.log(
  path.parse(
    "/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"
  ).ext
);
console.log(
  path.parse(
    "/home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js"
  ).name
);
