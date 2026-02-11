export type Testimonial = {
  id: number;
  quote: string[]; // multiple paragraphs
  name: string;
  role?: string;
  logo?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: [
      "We recently had the pleasure of Heidi gracing our new flagship store and Roastery on the golden mile of Marbella! And oh boy, she certainly made an impact!",
      "We wanted to offer our customers something to say thanks for all their support since opening so contracted the highly skilled services of Heidi to come over for a few days latte art workshop for all our esteemed regulars.",
      "They all absolutely loved it and she had them all in the palm of her hands with her knowledge and skills that she has learned over her many years in the industry.",
      "Thank you Heidi, you really made a difference, added some extra value to our team of baristas and we can’t wait to welcome you back VERY SOON!",
      "If you’re ever considering to add some value to your cafe/event or your current team then we highly recommend hiring Heidi to do just that.",
      "Hasta Pronto Heidi!"
    ],
    name: "Steve & Team KOFFICLUB",
    role: "Owner",
    logo: "/koffi-club-logo.png"
  },
  {
    id: 2,
    quote: [
      "Heidi has been the perfect Brand Ambassador for the Philips coffee business, helping us achieve our mission of bringing great coffee to every home in the UK.",
      "She has also been the perfect launch partner for our new Semi-Automatic Machine - from feeding back on the product during the innovation process, taking centre stage at our PR Launch Event, being the face of our brand in store & online, running our Philips School of Coffee - educating new owners on how to use their machines, to training our nationwide retail staff.",
      "Her personable bubbly personality, along side her technical knowledge and skills have been invaluable.",
      "Heidi, we can't wait to work with you in 2025 to continue to bring cafe quality coffee to Britain’s homes."
    ],
    name: "Lizzie Lee",
    role: "Head of Coffee -Philips UK&I",
    logo: "/philips-logo.png"
  },
  {
    id: 3,
    quote: [
      "I attended my first Coffee Tasting / Sensorial Workshop led by Heidi on Saturday and I enjoyed the full 2.5h.She struck a nice balance of theory and hands - on activities and the time flew.I enjoyed the sensory activities and it was great to learn how to prepare and set up a cupping session. Thanks Heidi!"
    ],
    name: "Pedro F",
  },
  {
    id: 4,
    quote: [
      "Attended a workshop and had a blast. Heidi did an amazing job to teach us, but also help my enthusiasm for coffee grow (something I didn't think was possible!). Highly reccomended!"
    ],
    name: "Will P",
  },
  {
    id: 5,
    quote: [
      "Heidi was exceptional, the course was a real eye opener and I have definitely upped my coffee game and latte art, thank. Would definitely recommend. Keep up the good work."
    ],
    name: "Muneeb S",
  },
  {
    id: 6,
    quote: [
      "Spent a great 2.5 hours in the barista introduction and latte art class with Heidi. It was lots of fun! Learned a lot about dialing in espresso and even made my first latte art! If you have just gotten an espresso machine and are looking to up your game, I highly recommend!"
    ],
    name: "Taran C",
  },
  {
    id: 7,
    quote: [
      "We went to a barrista and latte art workshop with Heidi, and we had a tremendously fun time! She's super nice and friendly, we felt very comfortable with experimenting, and we got introduced to the basics in a comprehensible way. We even ended up buying a coffee machine and a grinder after the workshop, so we're now practicing our latte art every day!"
    ],
    name: "Miklós A",
  },
  {
    id: 8,
    quote: [
      "Was lucky enough to get to experience the latte art workshop with Heidi Philip-Smith at London School of Coffee! Had such an amazing time learning all things coffee and latte art. Heidi is extremely passionate, friendly, and knowledgeable on all things coffee and went above and beyond to make sure I got everything I wanted from the session. Highly recommend this workshop for everyone whether your a complete beginning or just want to refine your art."
    ],
    name: "Matt L",
  },
  {
    id: 9,
    quote: [
      "We had a great latte art workshop with Heidi. It was really informative and fun and we got to practice 3 different designs. It was a private course for three of us and it was really good value for money. Highly recommended!"
    ],
    name: "Maya M",
  }
];


