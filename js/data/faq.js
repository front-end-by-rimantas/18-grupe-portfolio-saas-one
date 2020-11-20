const categories = {
    selector: '#faq_menu',
    gen: 'General Questions',
    lic: 'Licensing Questions'
}

const faqData = {
    icon: 'fas fa-angle-down',
    faq: [
        {
            question: 'Who kills more Americans each year: sharks or cows?',
            answer: 'While sharks account for about 53 bites per year, only one of those ends up being fatal. Cows, on the other hand (or hoof), kill around 20 people per year.',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'How many questions kids ask a day?',
            answer: '300 questions. A 2013 U.K. study from online retailer Littlewoods.com observed young children and recorded the questions they asked the adults around them. The children tended to turn to their mothers for answers, and these moms could end up answering an average of nearly 300 questions per day, or one question every two-and-a-half minutes, the study found. The moms reported that the hardest questions they were asked included "Why is water wet?" and "What are shadows made of?"',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'Who are the only animals that blush?',
            answer: 'Humans. We are also believed to be the only animal that feels embarrassment—a complicated emotion requiring understanding others opinions and other factors. Charles Darwin called blushing "the most peculiar and most human of all expressions," while Mark Twain said, "Man is the only animal that blushes. Or needs to."',
            category: 'lic',
            active: true,
            homePage: true
        },
        {
            question: 'What is reqular license?',
            answer: 'Dui nunc mattis enim ut tellus. Vestibulum sed arcu non odio. In hac habitasse platea dictumst quisque sagittis purus sit amet. Id aliquet lectus proin nibh. Lorem sed risus ultricies tristique nulla aliquet enim tortor. <br>Egestas sed sed risus pretium.Massa placerat duis ultricies lacus.Ac tincidunt vitae semper quis lectus nulla.Fames ac turpis egestas sed tempus urna et pharetra.Sapien nec sagittis aliquam malesuada bibendum arcu.Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.Amet tellus cras adipiscing enim eu turpis egestas pretium aenean.Bibendum arcu vitae elementum curabitur vitae nunc.Adipiscing diam donec adipiscing tristique.Nunc sed blandit libero volutpat sed cras ornare arcu dui.',
            category: 'lic',
            active: true,
            homePage: false
        },
        {
            question: 'Which English word has the most definitions?',
            answer: 'According to Guinness World Records, "set" has the largest number of meanings of any word in the English language, with 430 different senses listed in the 1989 edition of Second Edition of the Oxford English Dictionary. The word "sets" the record with an entry running 60,000 words, or 326,000 characters, and no other English word has come close since.',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'Who is the only person to earn a Nobel prize in two different sciences?',
            answer: 'Marie Curie. The pioneering researcher won the Nobel Prize in Physics in 1903 (shared with her husband) for her study of spontaneous radiation, and then won the Nobel Prize in Chemistry in 1911 for her work in radioactivity.',
            category: 'gen',
            active: true,
            homePage: true
        },
        {
            question: 'Why do we get goosebumps?',
            answer: 'We inherited this ability from our ancestors in part as a way for our (then) coat of body hair to capture air beneath it and in that way retain heat.',
            category: 'lic',
            active: true,
            homePage: true
        },
        {
            question: 'What is extended license?',
            answer: 'Sodales neque sodales ut etiam sit amet nisl purus. Vitae congue mauris rhoncus aenean. Elit duis tristique sollicitudin nibh sit amet. Nec ultrices dui sapien eget mi proin. <br>Etiam sit amet nisl purus in.Eu volutpat odio facilisis mauris sit.Duis ultricies lacus sed turpis tincidunt.Fermentum posuere urna nec tincidunt praesent semper feugiat.Id aliquet lectus proin nibh nisl condimentum id venenatis.',
            category: 'lic',
            active: true,
            homePage: false,
        }
    ]
}

const homeFAQ = {
    selector: '#faq_homepage',
    order: ['gen'],
    ...faqData
}
const faqFAQ = {
    selector: '#faq_faq',
    order: ['gen', 'lic'],
    ...faqData
}

export { categories, homeFAQ, faqFAQ }