const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

  function getInfoPenjualan(dataPenjualan){
    var keuntungan = dataPenjualan.map(data => (data.hargaJual - data.hargaBeli) * data.totalTerjual).reduce((prev,curr) => prev + curr, 0);
    var modal = dataPenjualan.map(data => (data.sisaStok + data.totalTerjual) * data.hargaBeli).reduce((prev,curr) => prev + curr, 0);
   
    var number = [ keuntungan.toString().split('').reverse().join(''), modal.toString().split('').reverse().join('') ];
    var totalKeuntungan = number[0].match(/\d{1,3}/g).join('').split('').reverse().join('').toString(),
      sisa 	= totalKeuntungan.length % 3,
      rupiah 	= totalKeuntungan.substr(0, sisa),
      ribuan 	= totalKeuntungan.substr(sisa).match(/\d{3}/g);
      
    if (ribuan) {
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    totalKeuntungan = 'Rp.' + rupiah;

    var totalModal = number[1].match(/\d{1,3}/g).join('').split('').reverse().join('').toString(),
      sisaM 	= totalModal.length % 3,
      rupiahM 	= totalModal.substr(0, sisaM),
      ribuanM 	= totalModal.substr(sisaM).match(/\d{3}/g);
      
    if (ribuanM) {
      separatorM = sisaM ? '.' : '';
      rupiahM += separatorM + ribuanM.join('.');
    }
    totalModal = 'Rp.' + rupiahM;
    
    var persen = keuntungan / modal * 100;
    var persentaseKeuntungan = persen.toFixed(2) + '%';

    var novelTerjual = dataPenjualan.map(data => data.totalTerjual);
    var penjualanTerbanyak = Math.max(...novelTerjual);
    var produkBukuTerlaris = dataPenjualan.filter(data => data.totalTerjual == penjualanTerbanyak).map(data => data.namaProduk).toString();
    var penulisTerlaris = dataPenjualan.filter(data => data.totalTerjual == penjualanTerbanyak).map(data => data.penulis).toString();

    var penjualanNovel = { totalKeuntungan, totalModal, persentaseKeuntungan, produkBukuTerlaris, penulisTerlaris };

    return penjualanNovel;
  }

  console.log(getInfoPenjualan(dataPenjualanNovel));