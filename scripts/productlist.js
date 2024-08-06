
import { getDocs, collection , db , productType } from "./firebase.js";

console.log('product type =>',productType);
console.log('product type =>');
console.log("helo");
// const querySnapshot = await getDocs(collection(db, "products"));
// querySnapshot.forEach((doc) => {
//     // console.log(doc);
//     const stampTime = doc._document.data.value.mapValue.fields.createdAt.timestampValue
//     const productName = doc._document.data.value.mapValue.fields.productName.stringValue 
//     const productPrice = doc._document.data.value.mapValue.fields.productPrice.integerValue
// });