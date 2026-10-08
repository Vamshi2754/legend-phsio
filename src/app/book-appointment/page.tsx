import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Physiotherapy Appointment Online | Legend Physiotherapy Hyderabad",
    description: "Book your physiotherapy appointment online instantly. Expert treatment for back pain, neck pain, knee pain & sports injuries. 20+ years experience. Clinic at LB Nagar & home visits across Hyderabad. Same-day appointments available. Call +91 99661 93413",
    keywords: [
        "book physiotherapy appointment",
        "physiotherapy appointment online",
        "book physiotherapist near me",
        "physiotherapy booking",
        "online physiotherapy appointment",
        "same day physiotherapy appointment",
        "physiotherapy consultation",
        "book physiotherapy home visit",
        "physiotherapy appointment hyderabad",
    ],
    openGraph: {
        title: "Book Physiotherapy Appointment Online | Legend Physiotherapy",
        description: "Book your physiotherapy appointment online instantly. Expert treatment. 20+ years experience. Same-day appointments available.",
        type: "website",
    },
    alternates: {
        canonical: "https://legend-physiotherapist.vercel.app/book-appointment",
    },
};

const locations = [
    "Banjara Hills",
    "Jubilee Hills",
    "Madhapur",
    "Gachibowli",
    "Kondapur",
    "Kukatpally",
    "Miyapur",
    "Begumpet",
    "Secunderabad",
    "Ameerpet",
    "Himayatnagar",
    "Tarnaka",
    "Uppal",
    "LB Nagar",
    "Dilsukhnagar",
    "Mehdipatnam",
    "Tolichowki",
    "Kompally",
    "Manikonda",
];

const conditions = [
    "Back Pain",
    "Neck & Shoulder Pain",
    "Sports Injuries",
    "Knee Pain",
    "Joint Problems",
    "Post-Operation Recovery",
    "Neurological Rehabilitation",
    "Sports Injury Rehab",
    "Stroke Recovery",
    "Mobility Issues",
];

export default function BookAppointmentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link href="/" className="text-blue-600 font-semibold hover:underline mb-4 inline-block">
                        ← Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                        Book Your Appointment
                    </h1>
                    <p className="text-xl text-gray-600">
                        Expert physiotherapy at your fingertips. Choose your preferred location and time.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Booking Form */}
                    <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-12 text-center flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Instant Online Booking</h2>
                        <p className="text-gray-600 mb-8 max-w-md">
                            Skip the manual form! Use our secure booking portal to select your preferred time slot and therapist instantly.
                        </p>

                        <a
                            href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book Your Slot Now
                        </a>
                        
                        <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-blue-600 font-bold text-lg">24/7</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Online Booking</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-green-600 font-bold text-lg">Instant</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Confirmation</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Contact & Info */}
                    <div className="space-y-6">
                        {/* Quick Contact */}
                        <div className="bg-blue-600 text-white rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                            <div className="space-y-4">
                                <a
                                    href="tel:+919966193413"
                                    className="flex items-center gap-3 p-3 bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    <span className="font-bold">+91 99661 93413</span>
                                </a>
                                <a
                                    href="https://wa.me/919966193413"
                                    className="flex items-center gap-3 p-3 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.393.823-2.612 1.982-3.431 3.426C1.9 12.93 1.5 14.6 1.5 16.199c0 1.141.292 2.26.843 3.256l.738 1.341-.774 2.823 2.823-.774 1.341.738c.996.551 2.115.843 3.256.843 8.071 0 14.6-6.531 14.6-14.6 0-3.106-1.034-6.011-2.939-8.42-1.905-2.409-4.811-3.939-7.661-3.939z" />
                                    </svg>
                                    <span className="font-bold">WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                            <h4 className="font-bold text-gray-900 mb-2">⏰ Hours</h4>
                            <p className="text-sm text-gray-700 mb-3">Monday - Friday: 8:00 AM - 8:00 PM</p>
                            <p className="text-xs text-gray-600">
                                Same-day appointments available based on therapist availability
                            </p>
                        </div>

                        {/* Services */}
                        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                            <h4 className="font-bold text-gray-900 mb-3">✓ What We Offer</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>✓ Free initial consultation</li>
                                <li>✓ No referral needed</li>
                                <li>✓ Personalized treatment plans</li>
                                <li>✓ Expert physiotherapists</li>
                                <li>✓ 20+ years experience</li>
                            </ul>
                        </div>

                        {/* Locations Link */}
                        <Link
                            href="/locations"
                            className="block text-center bg-blue-100 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                            View All Locations
                        </Link>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Do I need a referral?</h3>
                            <p className="text-gray-700 text-sm">No, you can directly book an appointment with us without a referral.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">How long is each session?</h3>
                            <p className="text-gray-700 text-sm">Each session typically lasts 45-60 minutes depending on your condition.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Can I book same-day appointments?</h3>
                            <p className="text-gray-700 text-sm">Yes, based on therapist availability. Call us to check slots.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">What should I wear?</h3>
                            <p className="text-gray-700 text-sm">Wear comfortable, loose-fitting clothes that allow easy movement.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-600 mb-4">Still have questions? Contact us directly</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+919966193413"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                        >
                            Call +91 99661 93413
                        </a>
                        <a
                            href="https://wa.me/919966193413"
                            className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
