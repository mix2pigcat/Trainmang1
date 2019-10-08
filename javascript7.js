var a=[];
for (let i=0;i<10;i++){
    a[i]=parseInt(prompt('Nhap phan tu thu : '+i))}
    var v=parseInt(prompt("nhap 1 can tim kiem : "));
for(var i=0;i<10;i++){
    if (a[i]=v){
    a[i]=a[i+1];
    }alert(a[i])
        break;
    }else {
        alert('nhap lai so')
        break;
    }
}