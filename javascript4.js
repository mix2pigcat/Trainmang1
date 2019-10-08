var a=[2,5,47,6,2,3,44,8,9];
let N=a.length;
let b=0;
let c=N-1;
while (b<c){
    let x=a[b]
    a[b]=a[c];
    a[c]=x;
    b++
    c--
}document.write(a)