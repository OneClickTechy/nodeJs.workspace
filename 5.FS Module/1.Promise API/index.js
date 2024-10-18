import path, { dirname } from "node:path";
import * as fs from "node:fs/promises";

try {
  // await fs.mkdir("/home/onclicktechy/web dev/nodeJs.workspace/newOne/inside", {
  //   recursive: true,
  // });
  //read dir
  // const data = await fs.readdir("/home/onclicktechy/web dev/nodeJs.workspace")
  //write file
  // await fs.writeFile("README.md", "hello Jeyapandi")
  //read file
  // const data = await fs.readFile("README.md", "utf-8");
  // await fs.appendFile("README.md", " is a full stack developer")
  await fs.copyFile("README.md", "info.txt")
  console.log(data);
} catch (error) {
  console.log(error);
}

///home/onclicktechy/web dev/nodeJs.workspace/4.PathModule/index.js
