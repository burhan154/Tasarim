export const medicines = 
[
    {name:'AFINITOR® 10 mg tablet', time:'09:00', piece: 1 , info: 'Tok karnına', startDate:"2022-10-06T00:00:00", endDate:"2022-11-06T00:00:00" },
    {name:'Parol', time:'21:00', piece: 1 , info: 'Aç karnına', startDate:"2022-08-22", endDate:"2022-10-30" },
    {name:'Parol', time:'20:30', piece: 1 , info: 'Aç karnına', startDate:"2022-08-22", endDate:"2022-10-30" },
    {name:'Parol', time:'20:30', piece: 1 , info: 'Aç karnına', startDate:"2022-08-22", endDate:"2022-10-30" },
    {name:'BCA', time:'22:00', piece: 5 , info: 'Tok karnına', startDate:"2022-08-22", endDate:"2022-10-24" },
    {name:'BCA', time:'22:00', piece: 5 , info: 'Tok karnına', startDate:"2022-08-22", endDate:"2022-10-24" },
    {name:'AFINITOR® 10 mg tablet', time:'23:00', piece: 1 , info: 'Tok karnına', startDate:"2022-08-22", endDate:"2022-10-24" },
]

export const med =
[
    {
      id: 4,
      hastaId: 2,
      ilacId: 1,
      ilac: {
        id: 1,
        ilacAdi: "Parol",
        ilacDetayi: "Agri Kesici",
        ilacSaatleri: [
          {
            id: 1,
            saat: "09:00:00",
            adet: 1,
            ilacId: 1
          },
          {
            id: 2,
            saat: "13:00:00",
            adet: 1,
            ilacId: 1
          }
        ]
      },
      baslangic: "2022-11-06T00:00:00",
      bitis: "2022-11-11T00:00:00"
    },
    {
      id: 5,
      hastaId: 2,
      ilacId: 2,
      ilac: {
        id: 2,
        ilacAdi: "Asist Plus",
        ilacDetayi: "Balgam Sökücü",
        ilacSaatleri: [
            {
                id: 3,
                saat: "12:00:00",
                adet: 1,
                ilacId: 2
            },
        ]
      },
      baslangic: "2022-11-06T00:00:00",
      bitis: "2022-11-10T00:00:00"
    }
  ]