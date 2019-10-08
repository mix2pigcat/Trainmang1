let a=[2,5,1,6,9,7,3,2,12];
let N=a.length;
let max=a[0];
let index=0;
let sum=0;
let medium=0;
for (let i=0;i<N;i++){
    if( a[i]>max){
        max=a[i];
        index=i;
        sum+=a[i];
    }

} medium=sum/N;
document.write('gia tri trung binh la : '+medium);
document.write('gia tri lon nhat la : '+max);

