(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],[,,,,,,,,,function(e,t,i){e.exports=i.p+"static/media/resume.2cb36afa.pdf"},,,,function(e,t,i){e.exports=i.p+"static/media/portrait-full.57feb99d.JPEG"},function(e,t,i){e.exports=i.p+"static/media/portrait-thumbnail.ba17279e.JPEG"},function(e,t,i){e.exports=i(32)},,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(12),r=i.n(s),o=(i(20),i(4)),l=i(5),c=i(8),m=i(6),u=i(0),d=i(3),b=(i(21),function(e){Object(c.a)(i,e);var t=Object(m.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).toggleVisibility=function(){window.pageYOffset>100?a.setState({isVisible:!0}):a.setState({isVisible:!1})},a.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},a.state={isVisible:!1},a}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(t){e.toggleVisibility()}))}},{key:"render",value:function(){return this.props.isMobile?n.a.createElement("div",{onClick:this.scrollToTop,className:this.state.isVisible?"show-arrow-mobile":"hide-arrow-mobile"},n.a.createElement(u.b.Provider,{value:{className:"arrow-wrapper-mobile"}},n.a.createElement(d.a,null))):n.a.createElement("div",{onClick:this.scrollToTop,className:this.state.isVisible?"show-arrow":"hide-arrow"},n.a.createElement(u.b.Provider,{value:{className:"arrow-wrapper"}},n.a.createElement(d.a,null)))}}]),i}(a.Component)),p=i(2),h=i(10),g=i(9),w=i.n(g),f=(i(22),function(e){return e.isMobile?n.a.createElement(u.b.Provider,{value:{className:"icon-mobile"}},e.isGitHub?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button-mobile",href:"https://github.com/samuel-ping",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.a,null))):null,e.isLinkedIn?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button-mobile",href:"https://linkedin.com/in/samuelping",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.b,null))):null,e.isResume?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button-mobile",href:w.a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.c,null))):null,e.isEmail?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button-mobile",href:"mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,null))):null):n.a.createElement(u.b.Provider,{value:{className:"icon"}},e.isGitHub?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button",href:"https://github.com/samuel-ping",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.a,null))):null,e.isLinkedIn?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button",href:"https://linkedin.com/in/samuelping",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.b,null))):null,e.isResume?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button",href:w.a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.c,null))):null,e.isEmail?n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{className:"button",href:"mailto:samuel.y.ping@gmail.com?Subject=Hey%20there!",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,null))):null)}),k=(i(23),function(e){return n.a.createElement("div",{className:"iconbar-wrapper"},n.a.createElement(f,{isGitHub:"true",isMobile:e.isMobile}),n.a.createElement(f,{isLinkedIn:"true",isMobile:e.isMobile}),n.a.createElement(f,{isResume:"true",isMobile:e.isMobile}),n.a.createElement(f,{isEmail:"true",isMobile:e.isMobile}))}),E=i(7),v=i(13),y=i.n(v),N=i(14),j=i.n(N),M=(i(24),function(e){var t=Object(a.useState)(!1),i=Object(E.a)(t,2),s=i[0],r=i[1],o="undefined"!==typeof InstallTrigger;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"image-container"+(o?"-firefox":"")},e.isMe?n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:"image thumbnail",src:j.a,alt:"Small me!",style:{visibility:s?"hidden":"visible"}}),n.a.createElement("img",{onLoad:function(){r(!0)},className:"image full",src:y.a,alt:"Me!",style:{opacity:s?1:0}})):null))}),L=(i(25),function(e){return e.isMobile?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"landing-wrapper-mobile"},n.a.createElement("div",{className:"name-intro-mobile"},"Hey! I'm Sam,"),n.a.createElement("div",{className:"tagline-mobile"},"an aspiring CS major at Rutgers University- New Brunswick."),n.a.createElement("hr",{className:"divider"}),n.a.createElement(k,{isMobile:"true"}))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"landing-wrapper"},n.a.createElement("div",{className:"landing-left-side"},n.a.createElement("div",{className:"name-intro"},"Hey! I'm Sam,"),n.a.createElement("div",{className:"tagline"},"an aspiring CS major at Rutgers University- New Brunswick."),n.a.createElement("hr",{className:"divider"}),n.a.createElement(k,null)),n.a.createElement("div",{className:"landing-right-side"},n.a.createElement(M,{isMe:"true"}))),n.a.createElement("div",{className:"skewed"}))}),I=(i(26),function(e){var t="Hi! I'm Samuel Ping, and I'm a freshman at Rutgers University- New Brunswick studying computer science and business. Back in 3rd grade, I wanted to be an inventor when I grew up. I've unconsciously followed that aspiration throughout my life, from spending hours in the middle of my pile of Legos, to enjoying robotics classes, until I took my first introductory computer programming course in 8th grade which sparked my interest in computer science. Recently, I realized that building things is my passion. Since then, I've been pursuing my passion for creating new things.",i="Apart from programming, I love playing tennis, acting, and tinkering with computer hardware. I'm also a fan of all things green! Except boogers.",a=n.a.useState(!1),s=Object(E.a)(a,2),r=s[0],o=s[1],l=n.a.useRef();return n.a.useEffect((function(){if(!e.isMobile){var t=new IntersectionObserver((function(e){e[0].isIntersecting&&(o(!0),t.unobserve(l.current))}));return t.observe(l.current),function(){return t.unobserve(l.current)}}})),e.isMobile?n.a.createElement("div",{className:"about-me-wrapper-mobile"},n.a.createElement("div",{className:"page-header-mobile",ref:l},"About Me"),n.a.createElement("hr",{className:"divider"}),n.a.createElement("div",{className:"description-mobile"},t,n.a.createElement("br",null),n.a.createElement("br",null),i)):n.a.createElement("div",{className:"about-me-wrapper"},n.a.createElement("div",{className:r?"page-header":void 0,ref:l},"About Me"),n.a.createElement("div",{className:r?"vertical-divider":void 0}),n.a.createElement("div",{className:r?"description":void 0},t,n.a.createElement("br",null),n.a.createElement("br",null),i))}),H=(i(27),function(e){return e.isMobile?n.a.createElement(u.b.Provider,{value:{className:"icon-button-wrapper-mobile"}},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.isGitHub?n.a.createElement(p.a,null):null,e.isWebsite?n.a.createElement(d.b,null):null)):n.a.createElement(u.b.Provider,{value:{className:"icon-button-wrapper"}},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.isGitHub?n.a.createElement(p.a,null):null,e.isWebsite?n.a.createElement(d.b,null):null))}),W=(i(28),function(e){return e.isMobile?n.a.createElement("div",{className:"a-project-wrapper-mobile"},n.a.createElement("div",{className:"a-project-top-wrapper-mobile"},n.a.createElement("div",{className:"a-project-title-mobile"},e.title),e.hasGitHub?n.a.createElement(H,{isMobile:"true",isGitHub:"true",link:e.githubLink}):null,e.hasWebsite?n.a.createElement(H,{isMobile:"true",isWebsite:"true",link:e.websiteLink}):null),n.a.createElement("div",{className:"a-project-description-mobile"},e.description),e.description2?n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("div",{className:"a-project-description-mobile",dangerouslySetInnerHTML:{__html:e.description2}})):null,n.a.createElement("div",{className:"a-project-technologies-mobile"},"Technologies used: ",e.technologies)):n.a.createElement("div",{className:"a-project-wrapper"},n.a.createElement("div",{className:"a-project-left"},n.a.createElement("div",{className:"a-project-top-wrapper"},n.a.createElement("div",{className:"a-project-title"},e.title),e.hasGitHub?n.a.createElement(H,{isGitHub:"true",link:e.githubLink}):null,e.hasWebsite?n.a.createElement(H,{isWebsite:"true",link:e.websiteLink}):null),n.a.createElement("div",{className:"a-project-description"},e.description),e.description2?n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("div",{className:"a-project-description",dangerouslySetInnerHTML:{__html:e.description2}})):null,n.a.createElement("div",{className:"a-project-technologies"},"Technologies used: ",e.technologies)))}),G=(i(29),function(e){var t={foodmood:{title:"Food Mood v2",hasGitHub:"true",githubLink:"https://github.com/samuel-ping/food-mood",hasWebsite:"true",websiteLink:"https://foodmood.samuelping.me",description:"A web app that takes your photo, detects your visible mood, and suggests a restaurant based off of that mood! The frontend is built with React.js, while the backend uses Express.js and Node.js. The emotions are detected from the photo using Amazon's Rekognition API, and then I search for a restaurant using Yelp's Fusion API. The website is deployed on an AWS EC2 instance, using Nginx as a reverse proxy. Updates to the application are automatically deployed with AWS CodePipeline and CodeDeploy.",description2:"The <a href='https://oldmyfoodmood.herokuapp.com' target='_blank' rel='noopener noreferrer'>original Food Mood</a> was my first ever website, and I built it as an entry to Capital One's Software Engineering Summit challenge. I originally was going to use solely HTML, CSS, and JavaScript, but I quickly learned that I had no way of hiding my API keys from the client. After much frustration, I found Node.js and Express.js and decided to hail mary it and learn how to create a backend. This is one of my greatest accomplishments, because I decided to pursue this project at the last minute and had less than two days to complete it. After the competition ended (I was accepted into the summit!), I decided to continue working on this project. I revamped the whole website with React and deployed it on an AWS EC2 Ubuntu instance to avoid the slow loading times of Heroku.",technologies:"React.js, Express.js, Node.js, Nginx, AWS EC2, CodePipeline & CodeDeploy"},wildwalk:{title:"Wild Walk",hasGitHub:"true",githubLink:"https://github.com/samuel-ping/wildwalk",hasWebsite:"true",websiteLink:"http://100.26.167.92/",description:"A web app built for mobile devices, where you can check native species of plants and animals in your state, and upload pictures of them to your collection. You can view your collection to see the past species that you collected.",description2:"I built this as an entry to BackyardHacks 2020 and is not a finished product. It was my first time using a database in an application and while it worked locally, the deployed version does not work. I did learn how to use Postman, which I used to test the endpoint for the NatureServe REST API.",technologies:"React.js, Express.js, MongoDB Atlas"},personalwebsite:{title:"Personal Website v2",hasGitHub:"true",githubLink:"https://github.com/samuel-ping/personal-website",hasWebsite:"true",websiteLink:"https://samuelping.me",description:"My personal website! I didn't like my first one, so I remade it.",description2:"The <a href='https://samuel-ping.github.io/personal-website-v1' target='_blank' rel='noopener noreferrer'>original version of my personal website</a> was also my first time using React. I built it after Food Mood, so I had a basic understanding of web development and wanted to transfer that knowledge to React. While my first website was a bit of a mess, I do think my skills are now much more polished. While I'm not the best at it, at least I know I'm capable of cranking out a website now!",technologies:"React.js"},rutgersbusfinder:{title:"Rutgers Bus Finder",hasGitHub:"true",githubLink:"https://github.com/samuel-ping/rutgers-bus-finder",description:"This project was built during HackRU Fall 2019. It takes in any two bus stops at Rutgers, and spits out all the buses that are currently running between those two stops.",description2:"This was my and my group's first time using an API! I helped work on the algorithm which parsed the list of buses and bus routes retrieved from the Rutgers bus API for the currently running buses.",technologies:"Java"}};return e.isMobile?n.a.createElement("div",{className:"projects-wrapper-mobile"},n.a.createElement("div",{className:"projects-header-mobile"},"Projects"),n.a.createElement("hr",{className:"divider"}),n.a.createElement("div",{className:"projects-list-container-mobile"},n.a.createElement(W,{isMobile:e.isMobile,title:t.foodmood.title,hasGitHub:t.foodmood.hasGitHub,githubLink:t.foodmood.githubLink,hasWebsite:t.foodmood.hasWebsite,websiteLink:t.foodmood.websiteLink,description:t.foodmood.description,description2:t.foodmood.description2,technologies:t.foodmood.technologies}),n.a.createElement(W,{isMobile:e.isMobile,title:t.wildwalk.title,hasGitHub:t.wildwalk.hasGitHub,githubLink:t.wildwalk.githubLink,hasWebsite:t.wildwalk.hasWebsite,websiteLink:t.wildwalk.websiteLink,description:t.wildwalk.description,description2:t.wildwalk.description2,technologies:t.wildwalk.technologies}),n.a.createElement(W,{isMobile:e.isMobile,title:t.personalwebsite.title,hasGitHub:t.personalwebsite.hasGitHub,githubLink:t.personalwebsite.githubLink,hasWebsite:t.personalwebsite.hasWebsite,websiteLink:t.personalwebsite.websiteLink,description:t.personalwebsite.description,description2:t.personalwebsite.description2,technologies:t.personalwebsite.technologies}),n.a.createElement(W,{isMobile:e.isMobile,title:t.rutgersbusfinder.title,hasGitHub:t.rutgersbusfinder.hasGitHub,githubLink:t.rutgersbusfinder.githubLink,hasWebsite:t.rutgersbusfinder.hasWebsite,websiteLink:t.rutgersbusfinder.websiteLink,description:t.rutgersbusfinder.description,description2:t.rutgersbusfinder.description2,technologies:t.rutgersbusfinder.technologies}))):n.a.createElement("div",{className:"projects-wrapper"},n.a.createElement("div",{className:"projects-header"},"Projects"),n.a.createElement("hr",{className:"divider"}),n.a.createElement("div",{className:"projects-list-container"},n.a.createElement(W,{title:t.foodmood.title,hasGitHub:t.foodmood.hasGitHub,githubLink:t.foodmood.githubLink,hasWebsite:t.foodmood.hasWebsite,websiteLink:t.foodmood.websiteLink,description:t.foodmood.description,description2:t.foodmood.description2,technologies:t.foodmood.technologies}),n.a.createElement(W,{title:t.wildwalk.title,hasGitHub:t.wildwalk.hasGitHub,githubLink:t.wildwalk.githubLink,hasWebsite:t.wildwalk.hasWebsite,websiteLink:t.wildwalk.websiteLink,description:t.wildwalk.description,description2:t.wildwalk.description2,technologies:t.wildwalk.technologies}),n.a.createElement(W,{title:t.personalwebsite.title,hasGitHub:t.personalwebsite.hasGitHub,githubLink:t.personalwebsite.githubLink,hasWebsite:t.personalwebsite.hasWebsite,websiteLink:t.personalwebsite.websiteLink,description:t.personalwebsite.description,description2:t.personalwebsite.description2,technologies:t.personalwebsite.technologies}),n.a.createElement(W,{title:t.rutgersbusfinder.title,hasGitHub:t.rutgersbusfinder.hasGitHub,githubLink:t.rutgersbusfinder.githubLink,hasWebsite:t.rutgersbusfinder.hasWebsite,websiteLink:t.rutgersbusfinder.websiteLink,description:t.rutgersbusfinder.description,description2:t.rutgersbusfinder.description2,technologies:t.rutgersbusfinder.technologies})))}),S=(i(30),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"divider"}),n.a.createElement("div",{className:"footer-container"},"\xa9 Samuel Ping | samuel.y.ping@gmail.com"))}),x=(i(31),function(e){Object(c.a)(i,e);var t=Object(m.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={isMobile:!1},a}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e,t=this;e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&t.setState({isMobile:!0})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{isMobile:this.state.isMobile}),n.a.createElement("div",null,n.a.createElement(L,{isMobile:this.state.isMobile}),n.a.createElement(I,{isMobile:this.state.isMobile}),n.a.createElement(G,{isMobile:this.state.isMobile}),n.a.createElement(S,null)))}}]),i}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.d4cdc8de.chunk.js.map