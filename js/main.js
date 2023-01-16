gsap.registerPlugin(ScrollTrigger);

$(window).on("load resize",function(e) {
  
  // for each block, fade image in near the bottom and out near the top
  ScrollTrigger.matchMedia({
    "screen and (min-width: 768px)": function () {
      let blocks = gsap.utils.toArray(".block");

      blocks.forEach((elem, i) => {

        let trigger = elem.querySelector(".text-panel");
        let images = elem.querySelector("img");

        const tl = gsap.timeline({ 
          scrollTrigger: {
            trigger: trigger,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true,
            // markers: true,
            toggleActions: "play reverse play reverse",
          }
        });

        tl
          .to(images, { opacity: 1, duration: 0.2, stagger: 0.1 })
          .to(images, { opacity: 0, duration: 0.2, stagger: 0.1 }, 0.8 );

      });
    }
  });

  // progress pie chart
  gsap.to(".progress-pie-chart", {
    "--p": '100%',
    ease: 'none',
    scrollTrigger: { 
      scrub: 0.3 
    }
  });

});