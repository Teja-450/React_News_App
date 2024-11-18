//import { render } from "@testing-library/react";
import React from "react";

const NewsItem =(props)=>{
  let {title,description,imgUrl,newsUrl,author,date,source}=props;
    
    return (
      <>
        <div className="card" style={{width:"100%"}}>
          <span className="badge badge-pill badge-danger">{source}</span>
          <img className="card-img-top" src={imgUrl?imgUrl:"https://techcrunch.com/wp-content/uploads/2024/10/GettyImages-1201202018.jpg?resize=1200,800"} alt="Card_image_cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString() }</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
        </>
    );
    
}

export default NewsItem; 
