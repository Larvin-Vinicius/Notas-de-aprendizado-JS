/*
https://javascript.info/object
Crie uma função multiplyNumeric(obj)que multiplique todos os valores numéricos de propriedade de objpor 2.
*/



function multiplyNumeric (object) {
   for (let key in object) {

      if (typeof(object[key] === 'number')) {
         object[key] *= 2;     
      }
   }
   return object;
}


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
          
console.log(multiplyNumeric(menu))