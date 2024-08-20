import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Award from "./components/images/advanced_achievement_award.jpg";
import Valedictorian from "./components/images/valedictorian_cert.jpg";
import Degree from "./components/images/bachelors_degree.jpg";
import PDF from "./components/images/pdf.png";
import ProjectGallery from "./components/ProjectGallery";
import Resume from "./components/files/codyddalton_resume.pdf";
import Letter1 from "./components/files/letterOfRecommendation_EdwardAlmeida.pdf";
import Letter2 from "./components/files/letterOfRecommendation_JustinWorkman.pdf";
import Me from "./components/images/me.jpg";
import './App.css';

function App() {

  const showMore = (more, less, p, string) => {
    document.getElementById(more).style.display = "none";
    document.getElementById(less).style.display = "block";
    let paragraph = document.getElementById(p);
    paragraph.innerHTML = string;
  }

  const showLess = (less, more, p, string) => {
    document.getElementById(less).style.display = "none";
    document.getElementById(more).style.display = "block";
    let paragraph = document.getElementById(p);
    paragraph.innerHTML = string;
  }

  return (
    <div className="App">
      <Header />
      <div className="Intro-section">
          <div className="Intro-left">
          <iframe className="Intro-video" width="100%" height="300px" src="https://www.youtube.com/embed/_s0spHc6P7M?si=kpxigsaFSB54Tes8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div className="Intro-transcript">
            <p className="Transcript-title">TRANSCRIPT</p>
            <p className="Transcript-txt" id="Intro-transcript">Hello, my name is Cody D Dalton - and I'm a Web Dev. What that means is, I get to work magic with computer code to create new and beautiful...</p>
            <p className="Show-more" id="Transcript-showmore" onClick={(() => {
                let showMoreId = "Transcript-showmore";
                let showLessId = "Transcript-showless";
                let shortP = "Intro-transcript";
                let newString = "Hello, my name is Cody D Dalton - and I'm a Web Dev. What that means is, I get to work magic with computer code to create new and beautiful websites, applications, and even games! <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                showMore(showMoreId, showLessId, shortP, newString);
            })}>SHOW MORE</p>
            <p className="Show-more" id="Transcript-showless" style={{display:"none"}} onClick={(() => {
                let showLessId = "Transcript-showless";
                let showMoreId = "Transcript-showmore";
                let shortP = "Intro-transcript";
                let newString = "Hello, my name is Cody D Dalton - and I'm a Web Dev. What that means is, I get to work magic with computer code to create new and beautiful...";
                showLess(showLessId, showMoreId, shortP, newString);
            })}>SHOW LESS</p>
          </div>
          </div>
          <div className="Intro-right">
            <ContactForm />
          </div>
      </div>
      <div className="Mid-section">
        <div className="Mid-left">
          <p style={{color:"white", fontSize:"1.5rem", textShadow:"3px 1px 2px rgba(0,0,0,1)"}}>EDUCATION</p>
          <div className="Education-gallery">
            <figure>
            <a href="/static/media/advanced_achievement_award.76d5640c402e645770c0.jpg"><img src={Award} alt="Advanced Achievement Award" className="Education-pics" /></a>
              <figcaption style={{color:"rgba(255,255,255,0.6)", fontSize:"0.75rem"}}>Advanced Achievement Award</figcaption>
            </figure>
            <figure>
              <a href="/static/media/bachelors_degree.04f95e9f6419eea84a7f.jpg"><img src={Degree} alt="Bachelor's Degree in Web Development and Design" className="Education-pics" /></a>
              <figcaption style={{color:"rgba(255,255,255,0.6)", fontSize:"0.75rem"}}>Bachelor's Degree in Development</figcaption>
            </figure>
            <figure>
              <a href="/static/media/valedictorian_cert.7141ba4b994c4057d18f.jpg"><img src={Valedictorian} alt="Valedictorian" className="Education-pics" /></a>
              <figcaption style={{color:"rgba(255,255,255,0.6)", fontSize:"0.75rem"}}>Valedictorian of 2023 Online Class</figcaption>
            </figure>
          </div>
          <p className="Education-txt" id="Education-txt">Earned my Bachelor's degree in Web Development from Full Sail University. Graduated with the Advanced Achievement Award, and with the honor of valedictorian of the 2023 class. During my time at Full Sail, I was known as an overachiever that was never shy about helping out fellow students when they were in need. Professors called me a great communicator and were impressed with my ability to overcome obstacles along the way to earning my education.</p>
          <p className="Show-more" id="Education-showmore" onClick={(() => {
                let showMoreId = "Education-showmore";
                let showLessId = "Education-showless";
                let shortP = "Education-txt";
                let newString = "Earned my Bachelor's degree in Web Development from Full Sail University. Graduated with the Advanced Achievement Award, and with the honor of valedictorian of the 2023 class. During my time at Full Sail, I was known as an overachiever that was never shy about helping out fellow students when they were in need. Professors called me a great communicator and were impressed with my ability to overcome obstacles along the way to earning my education. <br></br> I gained skill and familiarity with HTML and CSS, as well as JavaScript, React, Node, and MongoDB. I made RESTful APIs; designed, developed, and deployed websites; and made full-CRUD functional web applicatons. I also learned to conduct tests with Jest, Postman, and Selenium. Along the way, I learned Git and used Github to house and organize my projects. <br></br> Notable classes include Intro to Web Development, Interfaces and Usability, Advanced Server-Side Languages, Deployment of Web Applications, Database Systems,  Cloud Application Development, Content Management Systems Development.";
                showMore(showMoreId, showLessId, shortP, newString);
          })}>SEE MORE</p>
          <p className="Show-more" id="Education-showless" style={{display:"none"}} onClick={(() => {
                let showLessId = "Education-showless";
                let showMoreId = "Education-showmore";
                let shortP = "Education-txt";
                let newString = "Earned my Bachelor's degree in Web Development from Full Sail University. Graduated with the Advanced Achievement Award, and with the honor of valedictorian of the 2023 class. During my time at Full Sail, I was known as an overachiever that was never shy about helping out fellow students when they were in need. Professors called me a great communicator and were impressed with my ability to overcome obstacles along the way to earning my education.";
                showLess(showLessId, showMoreId, shortP, newString);
            })}>SHOW LESS</p>
        </div>
        <div className="Mid-right">
          <p style={{color:"white", fontSize:"1.5rem", textShadow:"3px 1px 2px rgba(0,0,0,1)"}}>RESUMÉ</p>
          <div className="Docs-gallery">
            <figure>
              <img src={PDF} alt="Cody D Dalton resumé" className="PDF-pic" />
              <figcaption className="Resumé-captions"><a href={Resume} download style={{fontSize:"0.75rem", color:"#AF35CD"}}>My<br></br> Resumé</a></figcaption>
            </figure>
            <figure>
              <img src={PDF} alt="Letter of Recommendation" className="PDF-pic" style={{marginLeft:"20%"}} />
              <figcaption className="Resumé-captions" style={{marginLeft:"20%"}}><a href={Letter1} download style={{fontSize:"0.75rem", color:"#AF35CD"}}>Letter of Recommendation</a></figcaption>
            </figure>
            <figure>
              <img src={PDF} alt="Letter of Recommendation" className="PDF-pic" />
              <figcaption className="Resumé-captions"><a href={Letter2} download style={{fontSize:"0.75rem", color:"#AF35CD"}}>Letter of Recommendation</a></figcaption>
            </figure>
          </div>
          <p className="Resume-txt">For a summary of my skill-sets and what I bring to the table as a web developer, see my resume as posted above. Click on the link and my resume will be downloaded for you to see. <br></br><br></br>I am also very grateful to have glowing letters of recommendation from two of my professors at Full Sail University. To get a sense of the kind of person I am and how I perform in a working and learning environment, see both letters as posted above.</p>
        </div>
      </div>
      <div className="Projects-section">
        <p style={{color:"white", fontSize:"1.5rem"}}>PROJECTS</p>
        <ProjectGallery />
        <a href="https://github.com/CodyDDalton"><p style={{textDecoration:"underline", fontSize:"1rem", color:"#AF35CD"}}>SEE PROJECTS ON GITHUB</p></a>
      </div>
      <div className="About-section">
        <p style={{color:"white", fontSize:"1.5rem"}}>ABOUT CODY</p>
        <div className="About-row">
          <img src={Me} alt="Cody D Dalton" className="My-picture" />
          <p className="About-me-txt">
          Cody is a Web Designer and Developer. He has a Bachelor’s degree in Web Development from Full Sail University, where he graduated as valedictorian of his 2023 class. He was also awarded the exclusive Advanced Achievement Award the same year. Cody first got into programming after a date night learning Scratch with his now wife-to-be. He has always had the dual love of problem solving and self-expression. Ultimately, they both boil down to creativity - a value Cody has always treasured and nurtured in himself from a young age. 
          <br></br><br></br>Whether it’s working on applications, websites, or games, Cody truly gives it his all. Professors of his during his time at Full Sail note him to be driven not just to meet minimum standards but to excel well-beyond them. “Above and Beyond” has become a mantra for Cody, pushing him always to do his very best work and never to settle for less. Professors also note Cody to be a great communicator and problem solver. Obstacles arose often without warning during his assignment periods, and Cody always found a way to overcome them and still submit work of great quality.
          <br></br><br></br>Cody’s creative interests extend beyond coding into creative writing, digital art, and the culinary arts. When he’s not working, he can often be found reading, writing, or cooking up something good in the kitchen. He lives in rural New York with his fiancee, and his crew of cats and dogs. 



          </p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
