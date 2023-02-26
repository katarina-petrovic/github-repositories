import ArrowLeftSvg from '../../assets/leftArrow.svg';
import ArrowRightLeftSvg from '../../assets/rightArrow.svg';


const Pagination = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage, currentPage }) => {
   const maxPages = Math.ceil(totalPosts / postsPerPage);

   const pagesArray = Array(maxPages)
      .fill()
      .map((_, index) => index + 1);

   return (
      <div className="pagination-container">
         <ul className="pagination">
            <li onClick={previousPage} className="page-number">
               <img src={ArrowLeftSvg} alt='Prev' />
            </li>
            {pagesArray.map((number) => (
               <li
                  key={number}
                  onClick={() => paginate(number)}
                  className={`page-number ${currentPage == number ? 'active' : ''
                     }`}
               >
                  {number}
               </li>
            ))}
            <li onClick={nextPage} className="page-number">
               <img src={ArrowRightLeftSvg} alt='Next' />
            </li>
         </ul>
      </div>
   );
};

export default Pagination;