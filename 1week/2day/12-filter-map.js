let arr = [
  {
    category:'fruits', 
    item:{
      name:'mango', 
      rating: 7.35
    }
  },
  {category:'electronics', item:{name:'mango', rating: 7.35}},
  {category:'fruits', item:{name:'grapes', rating: 7.35}},
  {category:'vegetables', item:{name:'celery', rating: 7.35}},
  {category:'fruits', item:{name:'oranges', rating: 7.35}},
  {category:'electronics', item:{name:'tv', rating: 7.35}},
  {category:'fruits', item:{name:'apples', rating: 7.35}},
  ];

let filtered = arr.filter(ele => {
  return ele.category === 'fruits';
})
.map(ele => {
  return ele.item;
})

console.log(filtered);