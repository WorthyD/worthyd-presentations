import { Slide } from '../../../components/Slide';
import { BookList, BookListProps } from '../../../components/BookList';
import { Book, BookItem } from '../../../components/Book';
import { BookSlide } from './components/BookSlide';
import { BookGroup, BookGroupInfo } from './components/BookGroup';

import { DevBookList } from './book-lists/DevBookList';

import { JSX } from '../../../components/SyntaxHighlight';
const code = `
var theyDigits, theStash, nextFigure, anEmptyHash = {} 
 
  function isChillin(maFigure) { 
    theStash = theStash || anEmptyHash 
   	NextFigure = 0 /* picture me nillin' */ 
   	/* in preparation fo' fillin' */ 
   	/* they precondition is partition so */
    doFissionOn(maFigure) 
   	sumTheySquares() /* quadratic addition, like a math'matician */ 
   	/* and the stash is the hash caching all my dead figures */ 
  	/* if your value is one, you won, or if you in tha' stash, you done */ 
  	if (nextFigure == 1) return "chillin" 
  	if (theStash[nextFigure] == 'x') return "illin" 
  	theStash[nextFigure] = 'x' /* keepin' the history */ 
  	/* breakin' the chain of iteration misery */ 
  	return isChillin(nextFigure) /* recurse, rejigga, re-traverse the verse */ 
  } 
 
  function doFissionOn(n) {theyDigits = n.toString().split('')} 
  function sumTheySquares() {theyDigits.forEach(function(n){nextFigure += n*n})}

`;

export const DevBooks = () => (
  <>
    <BookGroup
      bookSlides={DevBookList}
      title="Developer Books"
      subTitle="Valuable, but potentially boring"
    />
    <Slide>
      <Book
        book={{
          title: 'If Hemingway Wrote JavaScript',
          thumb: 'h.jpg',
        }}
      ></Book>
    </Slide>
    <Slide>
      <h2>If Tupac Wrote JS</h2>
      <JSX code={code} />
    </Slide>
  </>
);
