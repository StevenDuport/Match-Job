/* eslint-disable max-len */
import React, { useState, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TinderCard from 'react-tinder-card';
import CardRecruiter from './CardRecruiter';
import { findJobs } from '../../../utils/functions';
import './feedCardRecruiter.scss';

const FeedCardRecruiter = () => {
  const params = useParams();
  const candidateCards = useSelector((state) => state.feed.cards);
  const jobs = useSelector((state) => state.profileRecruiter.jobsRecruiterData);

  const currentJob = findJobs(jobs, params.slug);

  const associateCandidate = candidateCards.filter((cards) => (
    cards.jobtitle.title === currentJob.jobtitle.title));

  console.log(associateCandidate);
  // * ----------------- CARDS --------------------------
  const [currentIndex, setCurrentIndex] = useState(associateCandidate.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(() => Array(associateCandidate.length).fill(0).map((i) => React.createRef()), []);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < associateCandidate.length - 1;

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
    if (canSwipe && currentIndex < associateCandidate.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // * --------------------------------------------------
  return (
    <div className="feed_cardRecruiter">
      {
        associateCandidate.map((item, index) => (
          <TinderCard
            ref={childRefs[index]}
            onSwipe={(dir) => swiped(dir, item.id, index)}
            className="feed_card-itemRecruiter"
            key={item.id}
          >
            <CardRecruiter {...item} className="feed_card-item--swipe" swipe={swipe} />
          </TinderCard>
        ))
      }
    </div>
  );
};

export default FeedCardRecruiter;
