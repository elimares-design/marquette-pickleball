import katerinaPhoto from "../assets/katarina.png";
import conorPhoto from "../assets/conor.png";
import greysonPhoto from "../assets/greyson.png";
import gabrielPhoto from "../assets/gabriel.png";
import demiPhoto from "../assets/demi.png";
import elsaPhoto from "../assets/elsa.png";
import eliPhoto from "../assets/eli.png";
import court from '../assets/court.jpg';

function About(){
    return (
        <div 
            style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${court})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
            }} 
             className="min-h-screen text-white flex flex-col"
        >
            
            <h1 className="text-3xl font-bold mb-4 p-4"> Meet Your 2026 Club Board:</h1>

            <div className="w-full max-w-6xl mx-auto px-6 pt-0 pb-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

                    <div className="w-full max-w-xs">
                        <img
                            src={katerinaPhoto}
                            alt="Board Member 1"
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="w-full max-w-xs">
                        <img
                            src={conorPhoto}
                            alt="Board Member 2"
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="w-full max-w-xs">
                        <img
                            src={greysonPhoto}
                            alt="Board Member 3"
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="w-full max-w-xs">
                        <img
                            src={gabrielPhoto}
                            alt="Board Member 4"
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="w-full max-w-xs">
                        <img
                            src={demiPhoto}
                            alt="Board Member 5"
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="w-full max-w-xs">
                        <img
                            src={elsaPhoto}
                            alt="Board Member 6"
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="w-full max-w-xs">
                        <img
                            src={eliPhoto}
                            alt="Board Member 7"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </div>

            <footer className="bg-[#00205b] text-white px-6 md:px-8 lg:px-20 py-6 mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm"> 2026 Marquette Pickleball Club </p>
                    <div className="flex gap-6">
                        <a href="mailto:marquettepickleball@gmail.com" className="text-sm hover:text-[#F7D417] transition"> Contact Us </a>
                        <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=aC_jqy3HDUK1vXUMY6Jo5AYqVWlnQkZEnh4nQelvlVZUN1RGSUVUU01LVEMxTjdFSkpRN0E3UTc5Ry4u"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm hover:text-[#F7D417] transition"
                        >
                            Join the Club
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;