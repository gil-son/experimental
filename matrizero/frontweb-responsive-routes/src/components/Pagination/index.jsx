import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Pg1 from './pag1.json';
import Pg2 from './pag2.json';
import Pg3 from './pag3.json';
import Pg4 from './pag4.json';
import Pg5 from './pag5.json';


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

  return (
    <div>
      <h1>Avaliações:</h1>

      <div className="row">
        {reviews.map((data, index) => (
            <div key={index} class="col-12 col-sm-3 box3 border border-primary">
                <h2>{data.name}</h2>
                <p>{data.message}</p>
            </div>
        ))}
        
     </div>
     
     {/*
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
      */
    }

    <div>
        <Pagination size="sm">{items}</Pagination>
    </div>
    </div>

    
  );
}
