// import { CardSwiper } from 'react-card-rotate-swiper';
import React, { useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TinderCard from 'react-tinder-card';
import Card from 'src/components/Card';
import { loadCards } from '../../../actions/feed';
import './feedCard.scss';

const FeedCard = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.feed.cards);
  const jobtitle = useSelector((state) => state.profileCandidate.candidateData.jobtitle.title);

  // console.log(jobtitle);

  const cardsFiltered = cards.filter((item) => (
    item.jobtitle.title === jobtitle
  ));

  const onSwipe = (direction) => {
    console.log(direction);
  };

  // console.log(cardsFiltered);

  // * -------------------------------------   SWIPE -------------------------------------------

  const [currentIndex, setCurrentIndex] = useState(cardsFiltered.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(cardsFiltered.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < cardsFiltered.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, idToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < cardsFiltered.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // * ------------------------------------------------------------------------------------
  return (
    <div className="feed_card">
      { cardsFiltered.map((item, index) => (
        <TinderCard
          ref={childRefs[index]}
          onSwipe={(dir) => swiped(dir, item.id, index)}
          onCardLeftScreen={() => outOfFrame(item.id, index)}
          key={item.id}
          className="feed_card-item"
        >
          <Card
            description={item.description}
            jobTitle={item.jobtitle.title}
            location={item.recruiter.company.adress.city}
            enterprise={item.recruiter.company.companyName}
            experience={item.experience.yearsNumber}
            contract={item.contract.name}
            salary={item.salary.name}
            jobId={item.id}
            techno={item.technologies}
            match={item.matchups}
            swipe={swipe}
          />
        </TinderCard>
      ))}
    </div>
  );
};
export default FeedCard;
