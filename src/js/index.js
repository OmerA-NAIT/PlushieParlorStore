// import {ref as dataRef, get, set, update} from 'firebase/database';
// import ref from "firebase/database";
import { get } from "firebase/database";
import { db, storage } from "./libs/firebase/firebaseConfig.js";
// ^ you can take the '.js' off the end of the import line once you fully commit to using a module bundler to test + deploy
// since we're still using Live Server to test, we're not quite there yet!
// import { db, storage } from "./libs/firebase/firebaseConfig";

console.log("logg");
console.log(db);
console.log(storage);

async function pageInit() {
  const plushieRef = ref(db, "plushies/");
  const plushieSnapshot = await get(plushieRef);
  const data = plushieSnapshot.val();

  console.log(plushieRef);
  console.log(plushieSnapshot);
  console.log(data);
  console.log(Object.values(data));
}

pageInit();
