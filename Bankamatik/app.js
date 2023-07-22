let giris=true;
do{
    let key= prompt("Lütfen Kart şifrenizi giriniz:");

    let sifre="3625";
    let tekrar=true;
    if(key==sifre){
       do{
       let Bakiye=10000;
       let yeniBakiye=0;
       let yeniSatir="\r\n";
       let bilgiMetni="Bankamatiğe hoşgeldiniz."+yeniSatir
       +"1-Para Çekme"+yeniSatir
       +"2-Para Yatırma"+yeniSatir
       +"3-Para Transferi"+yeniSatir
       +"4-Bakiye Sorgulama"+yeniSatir
       
       let secim=prompt(bilgiMetni+"Lütfen yapmak istediğiniz işlemi tuşlayın:");
       let metin="Toplam bakiyeniz "+Bakiye+" TL dir."+yeniSatir
       switch(secim){
         case "1":
          let cekim=Number(prompt(metin+" Lütfen çekmek istediğiniz tutarı girin:"));
          let istek=confirm("Hesabınızdan "+cekim+" TL çekilecektir.");
          if(cekim>Bakiye){
            alert("Üzgünüz çekmek istediğiniz tutar bakiyenizden fazla güncel bakiyeniz "+Bakiye+" TL dir.");
          }
          else if(istek==true){
            yeniBakiye=(Bakiye-cekim);
            let bilgi="Hesabınızdan "+cekim+" TL çekilmiştir."+yeniSatir
            +"Güncel Bakiyeniz : "+yeniBakiye+" TL dir."
            alert(bilgi);
          }
          else{
            alert("Hesabınızdan para çekme işlemi iptal edildi.");
          }
          tekrar=confirm("Başka işlem yapmak ister misiniz?");
          giris=false;
         break;
         case "2":
          let ekle=Number(prompt(metin+" Lütfen yatırmak istediğiniz tutarı girin:"));
          let istek1=confirm("Hesabınıza "+ekle+" TL yatırılacaktır.");
          if(istek1==true){
            yeniBakiye=(Bakiye+ekle);
            let bilgi1="Hesabınıza "+ekle+" TL yatırılmıştır."+yeniSatir
            +"Güncel Bakiyeniz : "+yeniBakiye+" TL dir."
            alert(bilgi1);
          }
          else{
            alert("Hesabınıza para yatırma işlemi iptal edildi.");
          }
          tekrar=confirm("Başka işlem yapmak ister misiniz?");
          giris=false;
         break;
         case "3":
            let transfer=Number(prompt(metin+" Lütfen transfer etmek istediğiniz tutarı girin:"));
            let istek2=confirm("Hesabınızdan "+transfer+" TL transfer edilecektir.");
            if(transfer>Bakiye){
              alert("Üzgünüz transfer etmek istediğiniz tutar bakiyenizden fazla güncel bakiyeniz "+Bakiye+" TL dir.");
            }
            else if(istek2==true){
              yeniBakiye=(Bakiye-transfer);
              let bilgi2="Hesabınızdan "+transfer+" TL transfer edilmiştir."+yeniSatir
              +"Güncel Bakiyeniz : "+yeniBakiye+" TL dir."
              alert(bilgi2);
            }
            else{
              alert("Hesabınızdan para transfer işlemi iptal edildi.");
            }
            tekrar=confirm("Başka işlem yapmak ister misiniz?");
            giris=false;
         break;
         case "4":
            alert("Güncel bakiyeniz : "+Bakiye+" TL dir.");
            tekrar=confirm("Başka işlem yapmak ister misiniz?");
            giris=false;
         break;
         default:
            alert("Doğru tuşlama yaptığınızdan emin olun lütfen.");
            tekrar=true;
            giris=false;
       }
       }while(tekrar==true);
       if(tekrar==false){
        alert("Mutlu ve huzurlu günler dileriz.");
        giris=false;
       }
    }
    else{
        tekrar=confirm("Hatalı şifre girdiniz.Tekrar giriniz:");
        giris=true;
        if(tekrar==false){
            alert("Mutlu ve huzurlu günler dileriz.");
            giris=false;
        }
    }
    
}while(giris==true);
