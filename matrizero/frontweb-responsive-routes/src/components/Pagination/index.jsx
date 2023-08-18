import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Pg1 from './pag1.json';
import Pg2 from './pag2.json';
import Pg3 from './pag3.json';
import Pg4 from './pag4.json';
import Pg5 from './pag5.json';
import Preview from '../../assets/images/previews.png';
import Next from '../../assets/images/next.png';
import StarEmpty16 from '../../assets/images/star-empty-16.png';
import StarHalf16 from '../../assets/images/star-half-16.png';
import StarAll16 from '../../assets/images/star-dark-blue-full-16.png';
import StarEmpty32 from '../../assets/images/star-empty-24.png';
import StarHalf32 from '../../assets/images/star-dark-blue-half-24.png';
import StarAll32 from '../../assets/images/star-dark-blue-full-24.png';
import './style.css';

export const ReviewsPagination = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  let path = "";

  useEffect(() => {
    if(currentPage==1){setReviews(Pg1.data); setTotalPages(Pg1.total_pages);}
    if(currentPage==2){setReviews(Pg2.data); setTotalPages(Pg2.total_pages);}
    if(currentPage==3){setReviews(Pg3.data); setTotalPages(Pg3.total_pages);}
    if(currentPage==4){setReviews(Pg4.data); setTotalPages(Pg4.total_pages);}
    if(currentPage==5){setReviews(Pg5.data); setTotalPages(Pg5.total_pages);}

    /*
    path = `./pag${currentPage}.json`;

    fetch(path)
      
      .then(response => {
        console.log("response:", response)
        if (!response.ok) {
          throw new Error(`Erro ao buscar os dados. Status: ${response.status}`);
        }
        return response.json(); // Transforma o ReadableStream em JSON
      })
      .then(data => {
        setReviews(data.data);
        setTotalPages(data.total_pages);
      })
      .catch(error => console.error(error));
      */
      
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };



  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(

      
      <Pagination.Item onClick={ () => handlePageChange(number)} key={number} active={number === currentPage}>
        {<>{number}</>}
      </Pagination.Item>
    );
  }

  const total = (Pg1.data[0].rating + Pg1.data[1].rating + Pg1.data[2].rating + Pg1.data[3].rating
  +Pg2.data[0].rating + Pg2.data[1].rating + Pg2.data[2].rating + Pg2.data[3].rating
  +Pg3.data[0].rating + Pg3.data[1].rating + Pg3.data[2].rating + Pg3.data[3].rating
  +Pg4.data[0].rating + Pg4.data[1].rating + Pg4.data[2].rating + Pg4.data[3].rating
  +Pg5.data[0].rating + Pg5.data[1].rating + Pg5.data[2].rating + Pg5.data[3].rating) / 20;

  return (
    <div>
      <div>
        <span className='rating-title'>{total}</span>
        <img src={StarAll32} /><img src={StarAll32} /><img src={StarAll32} /><img src={StarAll32} /><img src={StarHalf32} />
         <span className='evaluation-count'>avaliações (20)</span>
      </div>


      <div className="row">
        {reviews.map((data, index) => (
            <div key={index} class="col-12 col-sm-3 box3 border border-primary rating-card">
                <h2 className='evaluation-name'>{data.name}</h2>
                <p className='space-message-rating-card'>{data.message}</p>
                <div className='d-flex justify-content-between'>
                <span>
                  {data.rating == 5 && <><img src={StarAll16} /><img src={StarAll16} /><img src={StarAll16} /><img src={StarAll16} /><img src={StarAll16} /></>}
                  {data.rating == 4 && <><img src={StarAll16} /><img src={StarAll16} /><img src={StarAll16} /><img src={StarAll16} /><img src={StarEmpty16} /></>}
                  {data.rating == 3 && <><img src={StarAll16} /><img src={StarAll16} /><img src={StarAll16} /><img src={StarEmpty16} /><img src={StarEmpty16} /></>}
                  {data.rating == 2 && <><img src={StarAll16} /><img src={StarAll16} /><img src={StarEmpty16} /><img src={StarEmpty16} /><img src={StarEmpty16} /></>}
                  {data.rating == 1 && <><img src={StarAll16} /><img src={StarEmpty16} /><img src={StarEmpty16} /><img src={StarEmpty16} /><img src={StarEmpty16} /></>}
                 
                  
                </span>
                <span> {data.date}</span>
                </div>
            </div>
        ))}
        
     </div>
     
     
      <div className='buttons mt-4'>
        <img src={Preview} className='previous mb-3' onClick={() => handlePageChange(currentPage - 1)} />
        <Pagination size="sm">{items}</Pagination>
        <img src={Next} className='next mb-3' onClick={() => handlePageChange(currentPage + 1)}/>
        <span className='pageof'>Page {currentPage} of {totalPages}</span>
      </div>

    
    </div>

    
  );
}

