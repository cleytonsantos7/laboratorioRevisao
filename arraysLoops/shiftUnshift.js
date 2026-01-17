const names = ['Ana', 'Bruno', 'Carlos', 'Diana'];
console.log('Original names:', names);

const removedName = names.shift();
console.log('After shift:', names);
console.log('Removed name:', removedName);

const addName = 'Zara';
names.unshift(addName);
console.log('After unshift:', names);
console.log('Added name:', addName);