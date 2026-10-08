"use client";

const plans = [
  {
    name: "Initial Assessment",
    price: 500,
    period: "First Visit",
    color: "border-teal-400",
    badge: "bg-teal-400",
    icon: "assessment",
    features: [
      "Comprehensive Physical Evaluation",
      "Condition Assessment",
      "Treatment Plan Creation",
      "Personalized Exercise Demo",
      "Advice & Recommendations",
      "Follow-up Scheduling",
    ],
    cta: "Book Now",
    highlight: false,
  },
  {
    name: "Clinic Sessions",
    price: 600,
    period: "Per Session (45-60 min)",
    color: "border-blue-500",
    badge: "bg-blue-500",
    icon: "clinic",
    features: [
      "Expert Physiotherapy",
      "Advanced Equipment Access",
      "Manual Therapy Techniques",
      "Therapeutic Exercises",
      "Progress Monitoring",
      "Priority Scheduling",
    ],
    cta: "Book Now",
    highlight: true,
  },
  {
    name: "Home Visit Service",
    price: 800,
    period: "Per Session (45-60 min)",
    color: "border-indigo-400",
    badge: "bg-indigo-400",
    icon: "home",
    features: [
      "Professional In-Home Treatment",
      "All Equipment Provided",
      "Personalized Care Plan",
      "Family Guidance",
      "Zero Travel Time",
      "Flexible Scheduling",
    ],
    cta: "Book Now",
    highlight: false,
  },
];

const iconMap: Record<string, React.ReactNode> = {
  assessment: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M11 15H5v2h6v-2zm8-9H1v2h18V6zm0 6H1v2h18v-2z" /></svg>,
  clinic: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" /></svg>,
  home: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>,
};

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Pricing Plans
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Straightforward, transparent pricing so you always know what to expect. All major insurance plans accepted.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border-t-4 ${plan.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${plan.highlight ? "scale-105 shadow-xl shadow-blue-100" : ""
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-blue-500 mb-4 flex justify-center">{iconMap[plan.icon]}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-blue-500" style={{ fontFamily: "var(--font-poppins)" }}>
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">/ {plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#appointment"
                className={`w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${plan.highlight
                  ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md shadow-blue-200"
                  : "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          * All prices are estimates. Actual costs depend on treatment complexity and insurance coverage. Contact us for a personalized quote.
        </p>
      </div>
    </section>
  );
}
