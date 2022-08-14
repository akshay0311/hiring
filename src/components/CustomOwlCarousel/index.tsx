import React, {useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
type OwlCarouselProps = {
  clients : {
    name : string;
    review : string
  }[]
};
const CustomOwlCarousel: React.FC<OwlCarouselProps> = (props) => {
  const { clients } = props;
  const [number, setNumber] = useState(3); 

  React.useEffect(() => {
    if (window.innerWidth <= 856) setNumber(1)
  },[]) 
  return (
    <OwlCarousel className="owl-theme" loop margin={100} items={number}>
      {clients?.map((client : any) => (
        <div className="item">
          <div className="owl-top">
            <div>
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="owl-client">
             <span>{client.name}</span>
             <em>"{client.review}"</em>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default CustomOwlCarousel;
