function Schedule(){
    return (
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="min-h-screen bg-white flex flex-col">
    
        <iframe
            src="https://calendar.google.com/calendar/embed?src=marquettepickleball%40gmail.com&ctz=America%2FChicago&mode=WEEK"
            style={{ border: 0, display: "block"}}
            width="100%"
            className="flex-1"
            frameBorder="0"
            scrolling="no"
            title="MU Pickleball Schedule"
            />

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

export default Schedule;