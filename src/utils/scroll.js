import { scroller } from 'react-scroll';

export default (delay = 0, to = 'contact') => {
    scroller.scrollTo(to, {
        duration: 700,
        delay: delay,
        smooth: 'linear'
    });
};
