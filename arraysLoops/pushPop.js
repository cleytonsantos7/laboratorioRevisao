const names = ['Ana', 'Bruno', 'Carlos', 'Diana'];
console.log('Initial names:', names);

names.push('Eva');
names.push('Eva');
console.log('After push:', names);

const removedName = names.pop();
console.log('After pop:', names);
console.log('Removed name:', removedName);