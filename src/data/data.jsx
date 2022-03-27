
export const PELABUHAN = {
    BKH:{
        pelabuhan_id: "BKH",
        pelabuhan_nama: "Bakauheni", 
    },
    MRK:{
        pelabuhan_id: "MRK",
        pelabuhan_nama: "Merak", 
    },
    TPR:{
        pelabuhan_id: "TPR",
        pelabuhan_nama: "Tanjung Priok", 
    },
    TBY:{
        pelabuhan_id: "TBY",
        pelabuhan_nama: "Teluk Bayur", 
    },
    BPN:{
        pelabuhan_id: "BPN",
        pelabuhan_nama: "BalikPapan", 
    },
};

export const LAYANAN = {
    ECO:{
        layanan_kode: "ECO",
        layanan_nama: "Economy",
    },
    EXC:{
        bandara_kode: "EXC",
        bandara_nama: "Executive",
    },
    BUS:{
        bandara_kode: "BUS",
        bandara_nama: "Bussiness",
    },
};

export const JADWAL = [
    {
        jadwal_id: "1",
        pelabuhan_kode_keberangkatan: "BKH",
        pelabuhan_kode_tujuan: "MRK",
        layanan_kode: "ECO",
        harga : "50.000"
    },
    {
        jadwal_id: "2",
        pelabuhan_kode_keberangkatan: "TPR",
        pelabuhan_kode_tujuan: "MRK",
        layanan_kode: "BUS",
        harga : "100.000"
    },
    {
        jadwal_id: "3",
        pelabuhan_kode_keberangkatan: "TBY",
        pelabuhan_kode_tujuan: "TPR",
        layanan_kode: "EXC",
        harga : "450.000"
    },
    {
        jadwal_id: "4",
        pelabuhan_kode_keberangkatan: "BKH",
        pelabuhan_kode_tujuan: "BPN",
        layanan_kode: "ECO",
        harga : "250.000"
    },
    {
        jadwal_id: "5",
        pelabuhan_kode_keberangkatan: "BPN",
        pelabuhan_kode_tujuan: "MRK",
        layanan_kode: "BUS",
        harga : "450.000"
    },
   

];