import { Injectable } from '@angular/core';
import { Post } from '../../model/post';

@Injectable({
  providedIn: 'root',
})

export class PostService {
  pathImg: string = "img/"
  getAllPosts():Post[]{
    return [
      {
        imgSrc: this.pathImg+"post1.jpg",
        message: `สิ่งทั้งปวงไม่เที่ยง เป็นทุกข์ ไม่ใช่ตัวตน\nยึดสิ่งใดอยู่ ย่อมทุกข์เพราะสิ่งนั้น\nทางสายเอก คือมหาสติปัฏฐาน`,
      },
      {
        imgSrc: this.pathImg+"post2.jpg",
        message: `ธรรมะไม่ใช่ภาษา นิพพานไม่ใช่ภาษา\nสิ่งใดที่เกิด สิ่งนั้นย่อมดับ\nพ้นออกจากอุปาทาน พ้นออกจากสิ่งที่เกิด และดับ\nพ้นออกจากว่าอะไรเป็นอะไร พ้นออกจากสัญญา ภาษา\nมีแต่เกิด และดับไปอยู่อย่างนั้น`,
      },
    ]
  }
}
