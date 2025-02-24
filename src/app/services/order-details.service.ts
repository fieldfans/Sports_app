import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"LONG-RANGE ROCKET! Rishad score a screamer, and Serigo provides the assist. We are loving this teamwork! Full time GKFC 1-1 AFC ",
      foodDetails:"Photocredits : Justin V Jose 3/12/2024",
      
      foodImg:"assets/img/Football-1.jpg"
    },
    {
      id:2,
      foodName:"KBFC 0-3 MBSG Highlights, ISL 2024-25: MacLaren scores brace as Mohun Bagan beats Kerala Blasters ",
      foodDetails:"Photocredits : Krishnaprasad 2/15/2025",
      foodImg:"assets/img/Football-2.jpeg"
    },
    {
      id:3,
      foodName:"Kerala maintain winning streak, kerala book Santosh Trophy 2024-25 quarter-final spot ",
      foodDetails:"Photocredits :  Justin V Jose 11/22/2024",
      foodImg:"assets/img/Football-3.jpg"
    },
    {
      id:4,
      foodName:"ISL 2024-25: Mendez scores brace as Bengaluru FC beats Kerala Blasters 3-1 to extend lead at top of standings",
      foodDetails:"Photocredits : Krishnaprasad 10/26/2024",
      foodImg:"assets/img/Football-4.jpg"
    },
    {
      id:5,
      foodName:"Malappuram FC beat Forca Kochi in Super League Kerala opener. Malappuram FC 2-0 Forca Kochi FC",
      foodDetails:"Photocredits : Justin V Jose 07/08/2024",
      foodImg:"assets/img/Football-5.JPG"
    }
  ]


  

}