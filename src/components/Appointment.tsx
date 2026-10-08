"use client";

const departments = [
  "Cardiac Clinic",
  "Neurology",
  "Dentistry",
  "Gastroenterology",
  "Orthopedics",
  "General Medicine",
];

const doctors = [
  "Dr. Sarah Mitchell",
  "Dr. James Thornton",
  "Dr. Priya Patel",
  "Dr. Marcus Chen",
  "Dr. Anita Reyes",
  "Dr. Samuel Brooks",
];

export default function Appointment() {
  return (
    <section id="appointment" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-700 rounded-full opacity-30 -translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — info */}
          <div className="text-white">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              Book an Appointment
            </span>
            <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
              Schedule Your Visit With Our Specialists
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Getting the care you need is simple. Fill in the form and our team will confirm your appointment within one business hour.
            </p>

            {/* Info tiles */}
            <div className="space-y-4">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>,
                  title: "Our Location",
                  value: "LB Nagar, Hyderabad, Telangana, India",
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>,
                  title: "Phone Number",
                  value: "+91 99661 93413",
                },
                {
                  icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>,
                  title: "Email Address",
                  value: "info@legendphysio.com",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-white mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-poppins)" }}>{item.title}</p>
                    <p className="text-white/75 text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
              Book Your Appointment
            </h3>

            <div className="flex flex-col gap-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Ready to take the first step towards pain-free living? Book your slot directly with our specialists using our online booking portal.
              </p>
              <a
                href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment Online
              </a>
              <div className="flex items-center gap-4 text-sm text-gray-500 justify-center">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Instant Confirmation
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certified Therapists
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
