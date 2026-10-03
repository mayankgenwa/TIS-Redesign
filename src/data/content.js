// All copy is taken from https://tis.edu.in/ and lives here, not in JSX.
// Images are hotlinked from the live site; for production, download them into /public.
const MEDIA = 'https://tis.edu.in/_next/static/media'

export const school = {
  name: 'Tulas International School',
  short: 'TIS',
  applyUrl: 'https://admission.tis.edu.in',
  phone: '+91-9837983791',
  phoneDisplay: '+91-98379 83791',
  email: 'info@tis.edu.in',
  landlines: ['0135-2699444', '0135-2699666'],
  address:
    'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  mapUrl: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  virtualTourUrl: 'https://tis.edu.in/virtual-tour/',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
    { label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Campus', href: '#campus' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Community', href: '#community' },
  { label: 'Parents', href: '#parents' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  lines: ['Let’s do it', 'with Tulas'],
  title: 'Welcome to Tulas International School (TIS)',
  intro: 'TIS is one of India’s top boarding and day schools in Dehradun, India.',
  body: 'Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.',
  image: `${MEDIA}/polo.973ddbae.webp`,
}

export const stats = [
  { value: 22, suffix: '', label: 'Acre pollution-free campus' },
  { value: 16, suffix: '+', label: 'Olympic sports' },
  { value: 24, suffix: '×7', label: 'Medical assistance' },
  { value: 6, suffix: ':1', label: 'Student-teacher ratio' },
]

export const about = {
  statement:
    'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.',
  heading: 'Boarding and Day School Excellence',
  body: 'We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally. Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.',
  secretQuestion: 'At Tulas, we always ask, “What’s the secret to making school awesome?”',
  secretAnswer:
    'It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover.',
  punchline: 'There, we cracked it!',
}

export const sports = {
  heading: 'Sports? It’s not just a facility. At Tulas it’s the foundation!',
  body: '16+ sports curated to bring joy and discipline to your life.',
  list: [
    'Archery', 'Cycling', 'Hockey', 'Swimming', 'Taekwondo', 'Football',
    'Shooting Range', 'Horse Riding', 'Billiards', 'Squash', 'Volleyball',
    'Basketball', 'Cricket', 'Lawn Tennis', 'Badminton', 'Table Tennis',
  ],
}

export const rankings = [
  { rank: '#1', place: 'In Dehradun', title: 'Co-Educational Boarding School in Dehradun', by: 'Education Today' },
  { rank: '#2', place: 'In Uttarakhand', title: 'Co-Educational Boarding School in North India', by: 'Education Today' },
  { rank: '#1', place: 'In North India', title: 'Co-Educational Boarding School in North India', by: 'Outlook' },
  { rank: '#4', place: 'In India', title: 'Co-Educational Boarding School in India', by: 'Education Today' },
]

const person = (name, role, file) => ({ name, role, img: `${MEDIA}/${file}` })

export const community = {
  heading: 'Influential personalities on campus',
  people: [
    person('Sakshi Malik', 'First Indian woman wrestler to win an Olympic medal — Rio 2016 bronze. Padma Shri 2017.', 'SakshiMalik.91174bf4.webp'),
    person('Abhishek Verma', 'Arjuna Awardee, Asian Games gold medallist in archery, 2013.', 'AbhishekVerma.18f9d349.webp'),
    person('Aditi Gopichand Swami', 'Arjuna Awardee and archery World Champion, 2024.', 'AditiGopichandSwami.b7afa246.webp'),
    person('Ojas Deotale', 'Arjuna Awardee 2023 and current world champion in archery.', 'OjasPravinDeotale.1d2e01cc.webp'),
    person('Vishesh Bhriguvanshi', 'Indian basketball team captain and major FIBA Asia Championship player.', 'VisheshBhriguvanshi.52af8bfd.webp'),
    person('Rajat Chauhan', 'Arjuna Awardee 2016 in archery.', 'RajatChauhan.bcb1fbf2.webp'),
    person('Laxmi Agarwal', 'Founder of The Laxmi Foundation. Her story inspired the film “Chhapaak”.', 'LakshmiAgarwal.7405df5d.webp'),
    person('Arushi Nishank', 'Kathak dancer, actor, film producer, environmentalist and TEDx speaker.', 'ArushiNishank.f3341404.webp'),
  ],
}

export const parents = {
  heading: 'From the parents',
  quotes: [
    {
      name: 'Namita Agarwal',
      relation: 'M/O Krishna Agarwal',
      text: 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.',
    },
    {
      name: 'Ashu Arora',
      relation: 'M/O Manisha Changrani',
      text: 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.',
    },
    {
      name: 'Suresh Kumar',
      relation: 'F/O Aditya Kumar',
      text: 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.',
    },
    {
      name: 'Tashi Tsering',
      relation: 'F/O Jigmet Skaldon',
      text: 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.',
    },
  ],
}

export const cta = {
  heading: 'Enquire now',
  body: 'We see the potential in every student and help them bring it to life.',
}

export const footerLinks = [
  { label: 'FAQ', href: 'https://tis.edu.in/faq/' },
  { label: 'Brochure', href: 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf' },
  { label: 'Virtual tour', href: 'https://tis.edu.in/virtual-tour/' },
  { label: 'Privacy policy', href: 'https://tis.edu.in/privacy-policy/' },
  { label: 'Terms & conditions', href: 'https://tis.edu.in/terms-conditions/' },
  { label: 'Fedena login', href: 'https://tis.fedena.com/' },
]
