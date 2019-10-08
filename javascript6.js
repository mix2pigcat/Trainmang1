var a=[];
for (let i=0;i<10;i++){
    a[i]=parseInt(prompt('Nhap phan tu thu : '+i))
    var v=7
    if (a[i]==v){
        alert('V is in the array')
    }else {
       alert('V is not in the array')
    }
}