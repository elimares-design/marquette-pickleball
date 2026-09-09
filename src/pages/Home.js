import logo from '../assets/logo2.png';
import court from '../assets/court.jpg';
import { useState, useEffect } from 'react';
import client from '../contentful';

function Home() {
const [announcements, setAnnouncements] = useState([]);

useEffect(() => {
  client.getEntries({ content_type: 'announcement', order: '-fields.dateTime'})
    .then(response => setAnnouncements(response.items))
    .catch(console.error);
}, []);

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

      <div className="w-full pt-16 pb-2 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

          <div className="flex-1 flex flex-col gap-4"> 
            <div className="bg-[#00205b] rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-[#F7D417] mb-4">Marquette Pickleball Club</h1>
            <p className="text-white text-base mb-8">
              Whether you're a seasoned competitor or just picking up a paddle for the first time,
              MU Pickleball welcomes all skill levels. Sign up today and join us practices. 
              We meet weekly on campus on the basement courts of the Marquette Wellness + 
              Helfaer Recreation Center. Check our schedule for special events and regional tournaments 
              throughout the year.
            </p>

          </div>

          <div className="flex gap-4 mt-4">
            
              <a
                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=aC_jqy3HDUK1vXUMY6Jo5AYqVWlnQkZEnh4nQelvlVZUN1RGSUVUU01LVEMxTjdFSkpRN0E3UTc5Ry4u"
                target="_blank"
                rel="noreferrer"
                className="bg-[#F7D417] text-[#00205b] font-bold py-3 px-6 rounded-lg hover:opacity-90 transition"
             >
                Join the Club
              </a>

              <a
                href="mailto:marquettepickleball@gmail.com"
                className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-[#00205b] transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="w-auto flex justify-center items-start">
            <img src={logo} alt="MU Pickleball" className="object-contain" style={{ maxWidth: '400px' }} />
          </div>

        </div>
      </div>

      <div className="px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Announcements:</h2>
          {announcements.length === 0 ? (
            <p className="text-gray-250">No announcements yet — check back soon.</p>
          ) : (
            announcements.map(announcement => (
              <div key={announcement.sys.id} className="border-l-4 border-[#F7D417] pl-6 mb-6">
                <p className="text-gray-400 text-sm mb-1">{new Date(announcement.fields.dateTime).toLocaleDateString()}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{announcement.fields.title}</h3>
                <p className="text-gray-300">{announcement.fields.body}</p>
              </div>
            ))
          )}
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

export default Home;