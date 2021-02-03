
const nums =[1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
    if (element >= 4) {
        break;
    }
    
}

console.log('Division');

const nums2 =[1, -2, 3, 4, -5, 6, -7, 8, -9];

for (let i = 0; i < nums2.length; i++) {
    const element = nums2[i];
   
    if (element < 0) {
        continue;
    }
    console.log(element);
}