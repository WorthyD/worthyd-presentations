import { BookGroupInfo } from '../components/BookGroup';

export const TechCareerBookList: BookGroupInfo[] = [
  {
    title: '',
    books: [
      {
        title: `The Staff Engineer's Path`,
        desc: `A Guide for Individual Contributors Navigating Growth and Change`,
        thumb: `staff.jpg`,
        author: `Tanya Reilly`,
        amazon: `https://www.amazon.com/Staff-Engineers-Path-Individual-Contributors/dp/1098118731`,
        audible: `https://www.amazon.com/Staff-Engineers-Path-Individual-Contributors/dp/B0C7SFBXW3`,
        publishYear: `2022`,
      },
      {
        title: 'Staff Engineer',
        desc: `Leadership beyond the management track`,
        thumb: `se.jpg`,
        author: `Will Larson`,
        amazon: `https://www.amazon.com/Staff-Engineer-Leadership-beyond-management/dp/1736417916`,
        audible: `https://www.amazon.com/Staff-Engineer-Leadership-Beyond-Management/dp/B097CNXP89/`,
        publishYear: `2021`,
      },
    ],
    notes: `
    path:
- Take a broad, strategic view when thinking about your work
- Dive into practical tactics for making projects succeed
- Determine what "good engineering" means in your organization

engineer:
Contains good advice on determining if you want to pursue staff or management.
    Interviews with Staff Engineers form Dropbox, Etsy, Slack, etc.
 
`,
  },

  {
    title: '',
    books: [
      {
        title: 'Modern Software Engineering',
        desc: `Doing What Works to Build Better Software Faster`,
        thumb: `m.jpg`,
        author: `David Farley`,
        amazon: `https://www.amazon.com/Modern-Software-Engineering-Discipline-Development/dp/0137314914`,
        audible: `https://www.amazon.com/Modern-Software-Engineering-Better-Faster/dp/B0BLXCXT3R`,
        publishYear: `2021`,
      },
      //TODO: The effective engineer
    ],
    notes: `Struggled on where to put this. References a lot of other books on this liss
    Farley is a co-author of Continuous Delivery
    has a decent youtube channel
    
    `,
  },
];
