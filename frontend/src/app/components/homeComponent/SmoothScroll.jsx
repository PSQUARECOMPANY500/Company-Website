import useLocomotiveScroll from './useLocoMotive'

const SmoothScroll = () => {
  useLocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  return (
    <div data-scroll-container>
    
    </div>
  );
};

export default SmoothScroll;
