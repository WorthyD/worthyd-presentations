import { BookGroupInfo } from '../components/BookGroup';

export const DevBookList: BookGroupInfo[] = [
  {
    title: '',
    books: [
      {
        title: 'Agile Manifesto',
        desc: '',
        thumb: '',
        author: '17 people',
        amazon: 'https://agilemanifesto.org/',
        audible: '',
        publishYear: '2001',
      },
    ],
    notes: `Look for these author's books`,
  },
  {
    title: '',
    books: [
      {
        title: 'Code Complete Vol 2',
        desc: '',
        thumb: 'cc2.jpg',
        author: 'Steve McConnell',
        amazon:
          'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670',
        audible: '',
        publishYear: '2004',
      },
    ],
    notes: `
Part 1 - Laying the foundation
Part 2 - Creating High-Quality Code
Part 3 - Variables
Part 4 - Statements
Part 5 - Code Improvements
Part 6 - System Considerations
Part 7 - Software Craftsmanship

914 pages of hard core coding awesomeness.
    `,
  },
  {
    title: "The 'Text Books'",
    books: [
      {
        title: 'The Mythical Man Month',
        desc: '',
        thumb: 'mm.jpg',
        author: 'Frederick Brooks',
        amazon:
          'https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959/',
        audible: '',
        publishYear: '1975',
      },
      {
        title: 'Refactoring',
        desc: 'Improving the Design of Existing Code',
        thumb: 'r.jpg',
        author: 'Martin Fowler, Kent Beck',
        amazon:
          'https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature-dp-0134757599/dp/0134757599',
        audible: '',
        publishYear: '1999 / 2018',
      },
    ],
    notes: `
Mythical Man Month:
'Adding manpower to a late software project makes it later.'
    
Refactoring:

This book provides reasons for refactoring, the mechanics 
behind it and examples of refactoring

The true test of good code is how easy it is to change it

With refactoring, we can take a bad, even chaotic, 
design and rework it into well-structured code

The key to effective refactoring is recognizing that you go faster when you take tiny steps

    `,
  },
  {
    title: 'Uncle Bob',
    books: [
      {
        title: 'Clean Code',
        desc: 'A Handbook of Agile Software Craftsmanship',
        thumb: 'ccode.jpg',
        author: 'Robert Martin',
        amazon:
          'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
        audible:
          'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/B08X8ZXT15',
        publishYear: '2008',
      },
      {
        title: 'The Clean Coder',
        desc: 'Practical Advice for the Professional Programmer',
        thumb: 'ccode2.jpg',
        author: 'Robert Martin',
        amazon: 'https://www.amazon.com/dp/0137081073?ref=emc_s_m_5_i_n',
        audible:
          'https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/B08X7MNTCX',
        publishYear: '2011',
      },
      {
        title: 'Clean Architecture',
        desc: `A Craftsman's Guide to Software Structure and Design`,
        thumb: 'carch.jpg',
        author: 'Robert Martin',
        amazon:
          'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164',
        audible:
          'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/B08X8H5G2J/',
        publishYear: '2017',
      },
      {
        title: 'Clean Agile',
        desc: 'Back to Basics',
        thumb: 'cagile.jpg',
        author: 'Robert Martin',
        amazon: 'https://www.amazon.com/dp/0135781868',
        audible: '',
        publishYear: '2019',
      },
      {
        title: 'Clean Craftsmanship',
        desc: 'Disciplines, Standards, and Ethics',
        thumb: 'ccraft.jpg',
        author: 'Robert Martin',
        amazon:
          'https://www.amazon.com/Clean-Craftsmanship-Disciplines-Standards-Ethics/dp/013691571X',
        audible: '',
        publishYear: '2021',
      },
    ],
    notes: `
    Clean Code:
    Definition of clean code
Meaningful Variable Names
Functions
Good Comments
Formatting
Data Structures
Error Handling
TDD

Clean Coder:
Professionalism
Saying No / Saying Yes
Coding
TDD
Practicing
Communicating
Time Management
Estimations
Pressure
Collaboration

Clean architecture:
Reuse/release equivalence principle
Common closure principle
Common reuse principle
Acyclic dependencies principle
The stable dependency principle
Stable abstractions principle
Time Management
Estimations
Pressure
Collaboration

Clean Agile:
What is Agile?
What is proper SCRUM?
Business Practices
Team Practices
Technical Practices
Becoming Agile
Craftsmanship

Clean Craftsmanship:
Moving towards the "north star" of true software 
craftsmanship: the state of knowing how to program well

Practical, specific guidance for applying five core 
disciplines: test-driven development, refactoring, simple design,
collaborative programming, and acceptance tests

How developers and teams can promote productivity, quality, and courage

The true meaning of integrity and teamwork among programmers, 
and ten specific commitments every software professional should make






    
    `,
  },
  {
    title: '',
    books: [
      {
        title: 'The Pragmatic Programmer',
        desc: 'Your Journey To Mastery',
        thumb: 'pp.jpg',
        author: 'David Thomas, Andrew Hunt',
        amazon:
          'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052/',
        audible:
          'https://www.amazon.com/Pragmatic-Programmer-Anniversary-Journey-Mastery/dp/B0833FBNHV',
        publishYear: '1999, 2019',
      },
    ],
    notes: `
A Pragmatic Philosophy
- Software Entropy
- Stone Soup
- A Pragmatic Approach
DRY
Orthogonality
Tracer Bullets
Basic Tools
Power of Plain Text
Shell Games
Much Much more
1.1 - Tip 4: Don't Live with Broken Windows
1.2 - Be a catalyst for change
2.2 - Eliminate Effects Between Unrelated Things
Tracer bullets guuied to target

`,
  },
  
];
