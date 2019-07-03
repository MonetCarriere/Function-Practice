// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------
    for( i=0; i<n; i++)  //or use math().max

// ---------------------------
// 2. Find longest string
// ---------------------------


// ---------------------------
// 3. Find even numbers
// ---------------------------
for(int i=0;i<a.length;i++){  
    if(a[i]%2==0){  


// ---------------------------
// 4. Find odd numbers
// ---------------------------
for(int i=0;i<a.length;i++){  
    if(a[i]%2!=0){  

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var instructors = numbers.concat(strings);  //I got this example from w3schools 


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

find instructors.sort(function(a,b)) {
    var x=a.firstname.toLowerCase()
    var y=b.firstname.toLowerCase()
    if(x<y) {return -1}
    if(x>y) {return 1}
    return 0 })
}                           //stole this straight from w3schools