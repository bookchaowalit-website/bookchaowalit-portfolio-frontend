export interface Testimonial {
  id: string;
  name: string;
  nameTh?: string;
  role: string;
  roleTh?: string;
  company?: string;
  companyTh?: string;
  quote: string;
  quoteTh?: string;
  category: 'client' | 'colleague' | 'partner' | 'mentor';
  featured?: boolean;
  avatarInitials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    nameTh: 'ซาร่าห์ เชน',
    role: 'Product Manager',
    roleTh: 'ผู้จัดการผลิตภัณฑ์',
    company: 'TechVenture Asia',
    companyTh: 'TechVenture Asia',
    quote: "Chaowalit brought a rare combination of technical depth and business acumen to our project. He didn't just build what we asked for — he challenged our assumptions and delivered something far better than we imagined.",
    quoteTh: 'คุณเชาวลิตนำทั้งความรู้เชิงเทคนิคที่ลึกซึ้งและมุมมองทางธุรกิจที่เฉียบคมมาช่วยโครงการของเรา เขาไม่ได้แค่ทำตามสิ่งที่เราขอ แต่เขาช่วยตั้งคำถามเพื่อต่อยอดไอเดียและส่งมอบผลงานที่ดีกว่าที่เราคาดคิดไว้มาก',
    category: 'client',
    featured: true,
    avatarInitials: 'SC'
  },
  {
    id: 't2',
    name: 'Marcus Weber',
    nameTh: 'มาร์คัส เวเบอร์',
    role: 'Founder & CEO',
    roleTh: 'ผู้ก่อตั้ง & CEO',
    company: 'Digital Nomad Collective',
    companyTh: 'Digital Nomad Collective',
    quote: 'Working with Chaowalit felt like having a full-stack team in one person. From strategy to execution, he handled everything with professionalism and creativity. Our platform launched ahead of schedule.',
    quoteTh: 'การทำงานกับคุณเชาวลิตเหมือนกับการมีทีมฟูลสแต็กครบทั้งทีมในคนเดียว ตั้งแต่เรื่องกลยุทธ์จนถึงการลงมือทำจริง เขาจัดการทุกอย่างได้อย่างเป็นมืออาชีพและสร้างสรรค์มาก ทำให้แพลตฟอร์มของเราสามารถเปิดตัวได้ก่อนกำหนดเวลา',
    category: 'client',
    featured: true,
    avatarInitials: 'MW'
  },
  {
    id: 't3',
    name: 'Priya Sharma',
    nameTh: 'ปรียา ชาร์มา',
    role: 'Senior Developer',
    roleTh: 'นักพัฒนาอาวุโส',
    company: 'CloudScale Solutions',
    companyTh: 'CloudScale Solutions',
    quote: "I've collaborated with many developers, but Chaowalit's ability to connect dots across domains is exceptional. He sees the bigger picture and builds systems that are both elegant and practical.",
    quoteTh: 'ฉันเคยร่วมงานกับนักพัฒนามาหลายคน แต่ความสามารถของคุณเชาวลิตในการเชื่อมโยงความรู้ข้ามสาขานั้นยอดเยี่ยมมาก เขามองเห็นภาพรวมและออกแบบระบบการทำงานที่ทั้งสวยงามและใช้งานได้จริง',
    category: 'colleague',
    featured: true,
    avatarInitials: 'PS'
  },
  {
    id: 't4',
    name: 'James Morrison',
    nameTh: 'เจมส์ มอร์ริสัน',
    role: 'Marketing Director',
    roleTh: 'ผู้อำนวยการฝ่ายการตลาด',
    company: 'GrowthLab Digital',
    companyTh: 'GrowthLab Digital',
    quote: 'Chaowalit transformed our digital presence with a solution that integrated seamlessly with our existing workflows. His attention to UX and performance metrics made a real difference in our conversion rates.',
    quoteTh: 'คุณเชาวลิตช่วยปฏิวัติช่องทางดิจิทัลของเราด้วยโซลูชันที่เชื่อมโยงเข้ากับระบบงานเดิมได้อย่างราบรื่น ความใส่ใจของเขาในเรื่อง UX และตัวชี้วัดประสิทธิภาพของระบบส่งผลให้ยอดการตัดสินใจซื้อ (Conversion Rate) ของเราเพิ่มขึ้นอย่างเห็นได้ชัด',
    category: 'client',
    avatarInitials: 'JM'
  },
  {
    id: 't5',
    name: 'Nattapong Siriwat',
    nameTh: 'ณัฐพงษ์ ศิริวัฒน์',
    role: 'Business Development Lead',
    roleTh: 'หัวหน้าฝ่ายพัฒนาธุรกิจ',
    company: 'Bangkok Innovation Hub',
    companyTh: 'Bangkok Innovation Hub',
    quote: 'Chaowalit has a deep understanding of both technology and business. He is able to translate complex requirements into simple, effective solutions.',
    quoteTh: 'เชาวลิตมีความเข้าใจลึกซึ้งทั้งในด้านเทคโนโลยีและธุรกิจ เขาสามารถแปลงความต้องการที่ซับซ้อนให้เป็นโซลูชันที่ใช้งานง่ายและได้ผลลัพธ์จริง',
    category: 'partner',
    avatarInitials: 'NS'
  },
  {
    id: 't6',
    name: 'Elena Rodriguez',
    nameTh: 'เอเลนา โรดริเกซ',
    role: 'Creative Director',
    roleTh: 'ผู้อำนวยการฝ่ายสร้างสรรค์',
    company: 'DesignForward Studio',
    companyTh: 'DesignForward Studio',
    quote: 'What sets Chaowalit apart is his genuine curiosity and willingness to explore unconventional solutions. He brought fresh perspectives to our creative projects that we never would have considered.',
    quoteTh: 'สิ่งที่ทำให้คุณเชาวลิตโดดเด่นคือความอยากรู้และความกระตือรือร้นในการค้นหาโซลูชันใหม่ๆ นอกกรอบ เขานำมุมมองที่สดใหม่มาสู่โปรเจกต์สร้างสรรค์ของเราในแบบที่เราไม่เคยคิดถึงมาก่อน',
    category: 'colleague',
    avatarInitials: 'ER'
  }
];

export function getTestimonialsByCategory(category: Testimonial['category']): Testimonial[] {
  return testimonials.filter(t => t.category === category);
}

export function getFeaturedTestimonials(limit = 3): Testimonial[] {
  return testimonials.filter(t => t.featured).slice(0, limit);
}

export function getTestimonialCategories(): Testimonial['category'][] {
  return ['client', 'colleague', 'partner', 'mentor'];
}
