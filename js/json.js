const user = { id: 1, name: 'borolax', job: 'actor'}
//JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

/**
 * {"id":1,"name":"borolax","job":"actor"}==>javascript
{ id: 1, name: 'borolax', job: 'actor' }==>JSON
 */

const shop = {
    owner:'Lamisifat',
    address: {
        street: 'pathkheter booth er ghor',
        city: 'Noyakhali',
        country: 'Bangladesh',
    },
    products: ['Laptop', 'mic', 'monitor', 'Keyboard'],
    revenue: 50000,
    isOpen: true,
    isNew: false,
}
// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
