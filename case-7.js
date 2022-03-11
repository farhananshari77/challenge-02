const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ];

function hitungTotalPenjualan(dataPenjualan){
  if(!dataPenjualan){
    return "Error"
  } else {
    var totalProdukTerjual = dataPenjualan.map(data => (data.totalTerjual)).reduce((prevValue,currentValue) => prevValue + currentValue);
    // var totalPerProduk =  dataPenjualan.map((data,index,arr) => arr[index] = data.hargaSatuan * data.totalTerjual);
    // var totalSemuaProduk = totalPerProduk.reduce((prevValue,currentValue) => prevValue + currentValue);
    
    return totalProdukTerjual;
  }
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));