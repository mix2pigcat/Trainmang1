let a=[1,56,64,12,35,14,9,8,72,3];
let n=a.length;
let max=a[0];
let index=0;
for (i=0;i<=10;i++){
    if(a[i]>max){
        max=a[i];
        index=i;
    }
}alert('max: '+max+' index '+index);