import styled from "styled-components"
import { fetchData } from "../utils/external-api"
import { urlAPI } from "../utils/constants"
import TourHeader from "../components/Tour/TourHeader"
import TourDescription from "../components/Tour/TourDescription"
import { formatDateShort } from "../utils/helpers"
import TourPictures from "../components/Tour/TourPictures"
import TourReviews from "../components/Tour/TourReviews"
import TourCta from "../components/Tour/TourCta"
import { useRouter } from "next/router"
import Head from "next/head"

const TourDetails = (props) => {
  const {
    name,
    locations,
    imageCover,
    startDates,
    duration,
    difficulty,
    description,
    maxGroupSize,
    ratingsAverage,
    quides,
    summary,
    images,
    startLocation,
  } = props.tour

  const { reviews } = props
  const router = useRouter()
  const { tourId } = router.query

  return (
    <>
      <Wrapper>
        <TourHeader
          name={name}
          image={imageCover}
          duration={duration}
          location={
            startLocation && startLocation.description
              ? startLocation.description
              : ""
          }
        />
        {/* {images && images.length !== 0 && (
          <TourPictures name={name} images={images} />
        )} */}
        <TourDescription
          date={
            startDates && startDates.length !== 0
              ? formatDateShort(startDates[0])
              : null
          }
          difficulty={difficulty}
          maxGroupSize={maxGroupSize}
          ratingsAverage={ratingsAverage}
          quides={quides}
          summary={summary}
          description={description}
          name={name}
        />
        {/* {images && images.length !== 0 && (
          <TourPictures name={name} images={images} />
        )} */}
        {/* {startLocation && startLocation.coordinates && (
          <TourMap
            startCoordinates={startLocation.coordinates}
            startDescription={startLocation.description}
            locations={locations}
          />
        )} */}

        {reviews && <TourReviews reviews={reviews} />}
        <TourCta id={tourId} images={images} />
      </Wrapper>
    </>
  )
}

export default TourDetails

export async function getStaticProps(context) {
  const tourId = context.params.tourId

  const tourData = await fetchData(`${urlAPI}/tours/${tourId}`)
  const reviewsData = await fetchData(`${urlAPI}/tours/${tourId}/reviews`)

  console.log(reviewsData)
  //
  return {
    props: {
      tour: tourData,
      reviews: reviewsData,
    },
  }
}

export async function getStaticPaths() {
  const tours = await fetchData(`${urlAPI}/tours`)

  const paths = tours.map((tour) => {
    return {
      params: { tourId: `${tour._id.toString()}` },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 0rem 0rem;
  position: relative;
`
