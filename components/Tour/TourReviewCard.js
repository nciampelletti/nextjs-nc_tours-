import React from "react"
import styled from "styled-components"
import Stars from "../../components/ui/Stars"
import { urlImage } from "../../utils/constants"

const TourReviewCard = ({ image, name, review, rating }) => {
  return (
    <Wrapper>
      <div className='reviews__avatar'>
        <img
          className='reviews__avatar-img'
          src={!image ? "/images/default.jpg" : `${urlImage}/users/${image}`}
          alt={name}
        />
        <h6 className='description__text capitalize'>{name}</h6>
      </div>
      <p className='description__text'>{review}</p>
      <div>
        <Stars stars={rating} />
      </div>
    </Wrapper>
  )
}

export default TourReviewCard

const Wrapper = styled.div`
  width: 25rem;
  padding: 1.5rem;
  background-color: #f7f7f7;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .reviews__avatar {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .reviews__avatar-img {
    /* height: 4.5rem;
    border-radius: 50%;
    margin-right: 1.2rem; */
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
    margin-right: 1.25rem;
  }

  .capitalize {
    text-transform: uppercase;
  }

  .description__text {
    font-style: italic;
  }
`
