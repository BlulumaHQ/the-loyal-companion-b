// All copy below is taken word-for-word from theloyalcompanionwi.com (Home, Grooming, About Us, Contact Us).
export const SITE_URL = "https://www.theloyalcompanionwi.com";
export const BOOK_URL = "https://theloyalcompanion.franpos.co/appointment/";
export const PHONE = "608-568-4558";
export const PHONE_HREF = "tel:6085684558";
export const EMAIL = "theloyalcompanionplatteville@gmail.com";
export const ADDRESS = "55 W Main St, Platteville, WI 53818";
export const MAP_EMBED =
  "https://www.google.com/maps?q=55+W+Main+St,+Platteville,+WI+53818&output=embed";

export const HOURS: [string, string][] = [
  ["Monday", "Closed"],
  ["Tuesday", "Closed (Grooming Open)"],
  ["Wednesday", "9:00 AM – 5:00 PM"],
  ["Thursday", "9:00 AM – 7:00 PM"],
  ["Friday", "9:00 AM – 7:00 PM"],
  ["Saturday", "9:00 AM – 3:00 PM"],
  ["Sunday", "Closed"],
];

export const SOCIAL = {
  facebook: "https://www.facebook.com/theloyalcompanionplatteville",
  instagram: "https://www.instagram.com/theloyalcompanionplatteville",
  tiktok: "https://www.tiktok.com/@theloyalcompanionwi",
};

export const ABOUT_INTRO =
  "At The Loyal Companion, we believe our four-legged family deserves the same unconditional love they give us every day. From personalized grooming experiences and thoughtfully curated nutrition to wellness essentials and everyday little luxuries, everything we do comes from the heart. With a dedicated team who cares for your companions like their own and a personal pet nutrition consultant to help guide their wellness journey, we're here to make every visit feel special. Our passion is helping your companions look their best, feel their best, and live their happiest, healthiest lives.";

export const REVIEWS = [
  { name: "Jenna M.", text: "Amazing experience! Extremely efficient, kind and intentional! Absolutely loved my experience and will be back. They were even short a person today and were willing to still squeeze in our pup!" },
  { name: "Kristin A.", text: "I used their store. There are a lot of high quality products, including Dog food that i know is good for my dog. And helpful staff member." },
  { name: "Haley C.", text: "1 stop shop for all things dog. Amazing health and wellness advice and supplies, top-notch grooming. A wonderful place to take your dog for anything it may need." },
];
export const REVIEW = REVIEWS[0];

export const GROOMING_INTRO =
  "We believe grooming should be more than a fresh haircut. It's about comfort, connection, and thoughtful care that leaves your companion feeling just as wonderful as they look.";

export const EXPERIENCE = [
  {
    name: "The Freshen-Up",
    sub: "Bath & Towel Dry",
    tier: "Essential Care",
    img: "/images/dog-being-bathed.jpg",
    text: "A gentle, refreshing bath featuring our AromaPaws Hypoallergenic Aloe Chamomile Shampoo, followed by a towel dry, nail trim, and ear cleaning. Perfect for a little freshening up!",
  },
  {
    name: "The Fluff & Finish",
    sub: "Bath & Blowout",
    tier: "Elevated Care",
    img: "/images/blowout.jpg",
    text: "Everything in our Freshen-Up Bath, plus a professional blowout to help loosen and remove excess shedding while leaving your pup's coat soft, fluffy, and refreshed!",
  },
  {
    name: "The Signature Groom",
    sub: "Full Groom & Haircut",
    tier: "Premier Care",
    img: "/images/haircut.jpg",
    text: "The complete head-to-tail experience! Includes a refreshing bath, professional blowout, nail trim, ear cleaning, and a personalized full-body haircut or trim to keep your companion looking and feeling their best.",
  },
];

export type PriceGroup = { title: string; sub?: string; desc?: string; rows: [string, string][]; notes?: string[] };

export const PRICES: PriceGroup[] = [
  {
    title: "The Freshen-Up Bath",
    sub: "Bath & Towel Dry",
    rows: [["Small Dogs (0–40 lbs)", "$35+"], ["Medium Dogs (40–80 lbs)", "$45+"], ["Large Dogs (80+ lbs)", "$55+"]],
    notes: ["Pricing varies by fur length."],
  },
  {
    title: "The Fluff & Finish",
    sub: "Bath, Blow Dry & Deshedding",
    rows: [["Small Dogs", "$50+"], ["Medium Dogs", "$60+"], ["Large Dogs", "$70+"]],
    notes: ["Pricing varies by fur length."],
  },
  {
    title: "The Signature Groom",
    sub: "Our Complete Grooming Experience",
    rows: [["Small Dogs (0–40 lbs)", "$75+"], ["Medium Dogs (40–80 lbs)", "$95+"], ["Large Dogs (80+ lbs)", "$115+"], ["Giant Breeds", "$200+"]],
    notes: [
      "Only Trim: Face, Feet & Fanny: $10 off the full groom price.",
      "Giant breed pricing applies to dogs requiring three or more hours of grooming. Additional grooming time is $70/hour.",
    ],
  },
  {
    title: "The Face, Feet & Fanny Refresh",
    desc: "A little tidy-up between full grooming appointments! Includes trimming around the face, feet, and sanitary areas to keep your loyal companion looking neat and feeling comfortable",
    rows: [["Small Dogs (0–40 lbs)", "$25+"], ["Medium Dogs (40–80 lbs)", "$30+"], ["Large Dogs (80+ lbs)", "$35+"], ["Giant Breeds/Difficult Coats/Extra Time Needed", "$40+"]],
  },
  {
    title: "Puppy Pampering",
    rows: [["Puppy Bath (4 months & under)", "$35+"], ["Puppy's First Groom", "$50+"]],
    notes: ["First groom includes bath, blow dry, sanitary and face trim, and nail trim"],
  },
  {
    title: "Nail Care",
    rows: [["Nail Trim", "$15"], ["Nail Dremel", "$20"]],
    notes: ["$5 off for two dogs."],
  },
];

export const UPGRADES_INTRO =
  "Because caring for your companion goes beyond a beautiful groom. Our thoughtfully curated enhancements combine gentle ingredients, nourishing treatments, and a little extra pampering to make every visit feel special.";
export const UPGRADES_SUB =
  "A little extra care, tailored to their coat. Our premium AromaPaws shampoos offer targeted benefits, from added hydration and nourishment to odor-neutralizing freshness.";

export const UPGRADES: [string, string][] = [
  ["Sensitive Soul Ritual", "Gentle care for our most delicate companions. Featuring AromaPaws Oatmeal & Manuka Honey, this fragrance-free treatment is designed to comfort and nourish dry, delicate, or sensitive skin."],
  ["Silky Coat Ritual", "For coats that deserve a little extra love. Our Pomegranate & Cucumber ritual pairs deep conditioning with a nourishing coat spray and gentle detangling for a beautifully soft, silky finish."],
  ["Shed-Less Ritual", "Less shedding, more snuggling. Featuring Mandarin & Ginger shampoo, deep conditioning, an extended blowout, and thorough undercoat brushing to help release loose fur and keep their coat feeling light and refreshed."],
  ["Fresh Face Facial", "A little spa moment for that sweet face! Our gentle cucumber facial is designed to cleanse and refresh your pup's delicate facial area, leaving their face feeling soft, fresh, and oh-so kissable. A soothing little luxury for the face you love most!"],
  ["Nourish & Restore Conditioning Treatment", "Because soft, healthy-looking coats start with thoughtful care. Our Argan Oil & Vitamin E conditioning treatment helps replenish moisture, support natural coat elasticity, and leave fur feeling beautifully soft."],
  ["Bright & Beautiful Coat Treatment", "Let their natural beauty shine. Our specialty brightening shampoo helps neutralize unwanted tones in white coats while bringing out the richness and brilliance of darker coats."],
  ["Fresh Kisses Teeth Brushing", "A little extra freshness for those sweet puppy kisses. Gentle brushing with dog-safe toothpaste helps freshen breath and provides a little extra attention to their smile."],
  ["Paw & Nose Nourishment", "Featuring Bloom Groom for a little love from nose to toes. Our fragrance-free, lick-safe Bloom Groom balm helps nourish, hydrate, and soothe dry, rough, or weather-worn paws and noses."],
];

export const UPGRADES_HELP =
  "Not sure which enhancement is right for your companion? Our grooming team is happy to help you choose the perfect little luxury based on their individual skin, coat, and grooming needs.";

export const GLOWUPS: [string, string, string][] = [
  ["/images/glowup-patch.jpg", "Patch", "Full Groom"],
  ["/images/glowup-petes.jpg", "Petes", "Full Groom"],
];

export const POLICY =
  "Please note: All grooming services are available by appointment only, unless otherwise noted & anal gland expression is not included in our grooming services. Please contact your veterinarian for this service.";

export const ABOUT_SERVICES = [
  "Every companion is unique, and we believe their grooming experience should be, too!",
  "Our pricing is thoughtfully based on your pup’s size, coat length, condition, and the time and care needed for their groom. After their first visit, we'll be able to provide a more personalized estimate for future appointments.",
  "Explore our grooming services and specialty enhancements above. Nail trimming and ear cleaning are included with every grooming service, because the little details matter!",
];

export type Member = { name: string; role: string; img?: string; bio: string[] };

export const CREW: Member[] = [
  {
    name: "Ashley",
    role: "Owner & Proud Dog Mom",
    img: "/images/team-ashley.jpg",
    bio: [
      "Hi, I’m Ashley! I've been a proud Dog Mom for 22 years, and dogs have always held such a special place in my heart. Owning The Loyal Companion is truly a dream come true! My passion is creating a welcoming space where every companion is treated like family and every person feels right at home.",
      "When I’m not at the shop, you’ll find me making memories with my husband, Brett, and our two Labs, Dexter and Cooper, enjoying our cabin in Prairie du Chien, binge-watching reality TV with my stepson Hudson, grabbing coffee with my Mom, or cheering on some baseball with my stepdad Bob. It's those simple moments with the people I love that mean the most.",
      "I'm so grateful for this community and the trust you place in us. My love for dogs began long before The Loyal Companion, with my first three boys, Brute, Ace, and Oscar, each leaving their own paw prints on my heart. And I truly wouldn't be who I am today without the unconditional love, guidance, and influence of my Grandma Joan and Gramps. The love they gave me, along with the memories of my first three boys, is woven into everything I'm building. This little dream is as much for them as it is for me.",
    ],
  },
  {
    name: "Brett",
    role: "Co-Owner & Proud Dog Dad",
    img: "/images/team-brett.jpg",
    bio: [
      "Hi, I’m Brett! By day, I’m a Quality Manager, but on nights and weekends, you’ll usually find me at The Loyal Companion helping bring our dream to life. I'm proud to be building something alongside my wife, Ashley, where every companion is treated like family and everyone feels right at home.",
      "I've been a proud Dog Dad for over 20 years, and if there's one thing I've learned, it's that life is always better with a dog by your side!",
      "When I'm not working (or tackling another one of Ashley's projects at the shop!), I love spending time with Ashley, our son Hudson, and our two Labs, Dexter and Cooper. You'll also find me enjoying our cabin in Prairie du Chien, hunting, golfing, exploring Southwest Wisconsin, working on projects around the house, or planning our next adventure.",
      "I'm grateful for the opportunity to build something special in our community. My journey as a Dog Dad started with Phoebe, continued with helping Ashley raise Brute and Oscar, and now includes our two boys, Dexter and Cooper. Each has played a part in making me the dog-loving guy I am today.",
      "Thank you for supporting our family's dream. We can't wait to welcome you and your four-legged family to The Loyal Companion!",
    ],
  },
  {
    name: "Hudson",
    role: "Client Experience & Animal Lover",
    img: "/images/team-hudson.jpg",
    bio: [
      "Hi, I’m Hudson! I’m a junior at Southwestern High School and proud to be part of The Loyal Companion team! You’ll usually find me welcoming customers, stocking shelves, helping keep things running smoothly, or sneaking in some extra love for our four-legged visitors.",
      "I've always had a soft spot for animals, and unlike some of my family, I'm just as much a cat person as I am a dog person! I love getting to meet all the different personalities that come through our doors.",
      "When I'm not at school or the shop, you'll find me hanging out with friends, spending time with family, or enjoying whatever adventure comes our way next.",
      "It's pretty cool getting to be part of something we're building as a family, and I'm excited to see where this journey takes us. I can't wait to meet you and your furry family members!",
    ],
  },
  {
    name: "Sam",
    role: "Lead Groomer & Fluff Officer",
    img: "/images/logo-circle.png",
    bio: [
      "Hi! I’m Sam! I’ve been grooming for 13 years, and I still love getting to know all the different personalities that come through the door. Every dog is different, and that’s definitely part of what keeps grooming fun for me!",
      "Some of my favorite breeds to groom are Schnauzers and Pomeranians. I also have a huge soft spot for bully breeds.",
      "I originally got into grooming because of my love for dogs, and over the last 13 years it’s grown into something I’ve really made my own. One of my favorite parts is seeing the transformation after a groom and building relationships with the dogs I get to see regularly.",
    ],
  },
  {
    name: "Jordan",
    role: "Groomer & Pup Pampering Pro",
    img: "/images/team-jordan.jpg",
    bio: [
      "Hi, I’m Jordan! I’ve always had a passion for dogs and love being able to turn that into a career as a groomer. One of my favorite parts of grooming is seeing the transformation and knowing each pup leaves looking and feeling their best. Labrador Retrievers have an extra special place in my heart. I have two black Labs of my own! Outside of the shop, I love hiking, hunting, exploring, and spending time outdoors, especially when my Labs can join the adventure. I’m excited to meet all the pups who come through The Loyal Companion and make their grooming experience as comfortable and positive as possible!",
    ],
  },
  {
    name: "Hannah",
    role: "Walk-In Groomer & Freshen-Up Pro",
    img: "/images/team-hannah.jpg",
    bio: [
      "Hi, I’m Hannah! I’ve grown up surrounded by animals, so caring for them has always been a huge part of my life. I’m currently studying Animal Science at Southwest Technical College while pursuing my passion for dog grooming! I’ve always known I wanted a career working with animals, whether that was becoming a vet tech or a groomer. Golden Retrievers and Doodles have a special place in my heart, and I especially love learning all the different Doodle grooming styles! One of the things I love most about The Loyal Companion is the family atmosphere and knowing that every pup is treated like one of our own. I’m excited to continue growing as a groomer, meet all our loyal companions, and help every pup leave feeling fresh, fluffy, and loved!",
    ],
  },
  {
    name: "Dexter",
    role: "Chief Treat Tester & Chief Happiness Officer",
    img: "/images/dexter.jpg",
    bio: [
      "Woof! I'm Dexter, Ashley & Brett's Chocolate Lab! I'm definitely Dad's boy, but when it's time to snuggle, Mom's my girl! I'm also a very dedicated (self-appointed!) treat tester at The Loyal Companion!",
      "At 10 years young, I'm living proof that age is just a number! Thanks to a little extra TLC, quality nutrition, and my favorite supplements, I've got plenty of pep in my paws and still know how to keep Mom and Dad on their toes.",
      "When I'm not busy with my very important taste-testing duties, you'll find me chasing tennis balls, exploring our cabin in Prairie du Chien, soaking up belly rubs, or perfecting my puppy-dog eyes for just one more treat. (They usually work!)",
      "I'm proud to be part of The Loyal Companion family, where every pup deserves to be spoiled, loved, and treated like family.",
      "Now, who's got the treats?!",
    ],
  },
  {
    name: "Cooper",
    role: "Chief Product Tester & Official Mama's Boy",
    img: "/images/cooper.jpg",
    bio: [
      "Woof! I'm Cooper, the silver Lab of the family, and let's get one thing straight... I'm Mom's baby, and I know it! I'm also a very dedicated product tester at The Loyal Companion, which means sniffing out the best treats and goodies is basically my full-time job. Tough gig, right?",
      "At 8 years young, I've learned firsthand what a difference quality nutrition, supplements, and a little extra TLC can make. These days, I've got plenty of energy, a whole lot of personality, and absolutely no shortage of love to give!",
      "When I'm off the clock, you'll find me exploring our cabin in Prairie du Chien, playing outside with my big brother Dexter, or curled up on the couch watching sports with Dad. (Don't tell Mom, but Dad's a pretty great couch buddy!)",
      "I'm proud to help Mom and Dad discover products that keep our four-legged friends happy, healthy, and living their best lives.",
      "Now, if you'll excuse me, Mom says its time for supper.",
    ],
  },
];

export const CONTACT_INTRO =
  "Whether you have a question about grooming, need help finding something special for your companion, or simply want to learn more about us, we're always happy to help. We can't wait to meet you and your four-legged family!";
