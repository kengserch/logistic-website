/*
 * Paulo Soares @ 2017
 */
$(()=>{
    let scrollSpeed = 1;
    let track = $('section.historytimeline2 #track');
    let sections = $('section.historytimeline2 section.timeline2');
    let sectionsScenes = [];
    let totalDuration = 0;
    let progressBar = $('section.historytimeline2 #progressBar');
    let controller = new ScrollMagic.Controller();
    let wHeight = $(window).innerHeight();
    let sectionsScene;
    
    let setSections = () =>{
   
      sections.each((i,el)=>{
        let section = $(el);
        let name = section.attr('id');
        let trigger = '#' + section.data('trigger');
        let offset = - ((i+1) * (100 / sections.length));
        let duration = section.data('duration');
        let isLast = false;
        let delay = duration - 1;
        let transition;
  
        // add section duration to total duration
        totalDuration = totalDuration + duration;
  
        // check if is not last,
        // if true, sets the
        // transition animation
        if(i+1 !== sections.length){
          transition = new TimelineMax()
            .to(track, 1, { 
             x: offset + '%',
             delay: delay,
             ease: Linear.easeNone }); 
        } else {
          isLast = true;
        }
        
        // set each section scene
        let thisScene = new ScrollMagic.Scene({
          triggerElement: trigger,
          triggerHook: 0,
          duration: duration*100+'%'
        })
        .setTween(transition)
        .addIndicators({name: name})
        .addTo(controller)
        .removeIndicators();
  
        if(isLast){
          sectionsScene = new ScrollMagic.Scene({
            triggerElement: 'section.historytimeline2 #pin',
            triggerHook: 0,
            duration: totalDuration*wHeight
          })
            .setPin('#pin')
            .addIndicators({name: 'global'})
            .setTween(new TimelineMax()
            .fromTo(progressBar, 1, {width: 0}, { width: '100%', ease: Linear.easeNone }))
            .addTo(controller)
            .removeIndicators();
        }
      })
    }
    
    setSections();
  
  })