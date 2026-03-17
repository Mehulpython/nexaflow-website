// Industries Data for NexaFlow AI
// Each industry includes pain points, solutions, and use cases

export interface Industry {
  id: string;
  name: string;
  category: string;
  icon: string;
  shortDescription: string;
  painPoints: string[];
  solutions: string[];
  useCase: string;
  features: string[];
  startingPrice: number;
}

export const industries: Industry[] = [
  // ==================== HEALTH & WELLNESS ====================
  {
    id: "gyms",
    name: "Gyms & Fitness Centers",
    category: "Health & Wellness",
    icon: "🏋️",
    shortDescription: "Automate member management, class bookings, and payment reminders for your gym.",
    painPoints: [
      "Managing membership inquiries manually",
      "Handling class booking requests",
      "Sending payment and renewal reminders",
      "Following up with prospective members",
      "Tracking member attendance and preferences"
    ],
    solutions: [
      "AI-powered member onboarding that works 24/7",
      "Automated class booking and reminder system",
      "Smart membership renewal notifications",
      "Instant responses to membership inquiries",
      "Personalized follow-ups with leads"
    ],
    useCase: "A new member interested in joining can ask questions at 2 AM, get instant answers, schedule a gym tour, and receive automatic follow-ups - all without you lifting a finger.",
    features: [
      "24/7 inquiry handling via chat, text, or email",
      "Automated class scheduling and reminders",
      "Membership renewal automation",
      "Lead capture and follow-up sequences",
      "Integration with booking systems"
    ],
    startingPrice: 500
  },
  {
    id: "fitness-training",
    name: "Personal Training",
    category: "Health & Wellness",
    icon: "💪",
    shortDescription: "Handle client scheduling, progress tracking, and payment collection automatically.",
    painPoints: [
      "Managing client appointment schedules",
      "Tracking client progress and goals",
      "Collecting payments and sending invoices",
      "Sending workout reminders",
      "Following up with potential clients"
    ],
    solutions: [
      "Automated appointment booking system",
      "Client progress tracking with AI insights",
      "Automated payment reminders and invoicing",
      "Personalized workout reminders",
      "Lead capture for new clients"
    ],
    useCase: "Your AI assistant can handle booking inquiries at 2 AM while you're asleep, schedule sessions, and send automatic reminders - so you wake up to a full calendar.",
    features: [
      "24/7 booking and inquiry handling",
      "Automated appointment reminders",
      "Client progress tracking",
      "Payment automation",
      "Lead nurturing sequences"
    ],
    startingPrice: 500
  },
  {
    id: "yoga-studios",
    name: "Yoga Studios",
    category: "Health & Wellness",
    icon: "🧘",
    shortDescription: "Automate class bookings, student inquiries, and membership tracking.",
    painPoints: [
      "Managing class schedules and capacity",
      "Handling student inquiries about classes",
      "Tracking memberships and class packs",
      "Sending class reminders and updates",
      "Managing waitlists for popular classes"
    ],
    solutions: [
      "Automated class booking with capacity management",
      "Instant responses to student questions",
      "Smart membership and class pack tracking",
      "Automated class reminders and schedule updates",
      "Waitlist automation with instant notifications"
    ],
    useCase: "Students can book classes and get instant confirmations. When a spot opens up, waitlisted students are automatically notified. No more manual scheduling chaos.",
    features: [
      "Online class booking system",
      "Automated waitlist management",
      "Membership tracking",
      "Class reminder notifications",
      "Schedule change alerts"
    ],
    startingPrice: 500
  },
  {
    id: "day-spas",
    name: "Day Spas",
    category: "Health & Wellness",
    icon: "💆",
    shortDescription: "Streamline appointment booking, client preferences, and service reminders.",
    painPoints: [
      "Managing complex appointment schedules",
      "Remembering client preferences",
      "Handling multiple service types",
      "Sending appointment confirmations",
      "Managing cancellations and rescheduling"
    ],
    solutions: [
      "Smart appointment booking with preference memory",
      "Client preference tracking and recall",
      "Multi-service scheduling automation",
      "Automated confirmations and reminders",
      "Easy rescheduling and cancellation handling"
    ],
    useCase: "Clients can book their favorite therapist and service, with the system remembering their preferences. Automatic reminders reduce no-shows and last-minute cancellations.",
    features: [
      "Preference-based booking",
      "Multi-service scheduling",
      "Automated reminders",
      "Client history tracking",
      "Cancellation management"
    ],
    startingPrice: 500
  },
  {
    id: "skin-care",
    name: "Skin Care & Estheticians",
    category: "Health & Wellness",
    icon: "✨",
    shortDescription: "Automate treatment scheduling, skincare follow-ups, and client rebooking.",
    painPoints: [
      "Scheduling various treatment types",
      "Following up on skincare routines",
      "Encouraging regular rebooking",
      "Managing product recommendations",
      "Tracking treatment progress"
    ],
    solutions: [
      "Automated treatment scheduling",
      "Personalized skincare follow-up sequences",
      "Smart rebooking reminders",
      "Product recommendation automation",
      "Treatment progress tracking"
    ],
    useCase: "After a facial, clients automatically receive personalized skincare tips and a reminder to book their next appointment in 4-6 weeks. Your AI remembers their skin type and concerns.",
    features: [
      "Treatment-specific scheduling",
      "Automated follow-up sequences",
      "Rebooking reminders",
      "Product recommendation engine",
      "Progress photo tracking"
    ],
    startingPrice: 500
  },
  {
    id: "massage-therapy",
    name: "Massage Therapy",
    category: "Health & Wellness",
    icon: "🙌",
    shortDescription: "Handle booking, client intake, and treatment reminders automatically.",
    painPoints: [
      "Managing appointment schedules",
      "Collecting client intake information",
      "Sending appointment reminders",
      "Tracking client health history",
      "Following up for rebooking"
    ],
    solutions: [
      "Online booking with intake form automation",
      "Digital client intake and health history",
      "Automated appointment reminders",
      "Secure health history tracking",
      "Automated rebooking prompts"
    ],
    useCase: "New clients fill out intake forms online before their appointment. You receive their health history beforehand, and they get automatic reminders - reducing no-shows by 40%.",
    features: [
      "Online intake forms",
      "Health history tracking",
      "Appointment reminders",
      "Automated rebooking",
      "Client preference memory"
    ],
    startingPrice: 500
  },

  // ==================== BEAUTY & PERSONAL CARE ====================
  {
    id: "hair-salons",
    name: "Hair Salons",
    category: "Beauty & Personal Care",
    icon: "💇",
    shortDescription: "Automate appointments, track client preferences, and send reminder texts.",
    painPoints: [
      "Juggling multiple stylist schedules",
      "Remembering client preferences",
      "Handling appointment changes",
      "Sending confirmation and reminders",
      "Managing client loyalty programs"
    ],
    solutions: [
      "Multi-stylist scheduling system",
      "Client preference tracking and recall",
      "Easy rescheduling and cancellation",
      "Automated SMS/email reminders",
      "Loyalty program automation"
    ],
    useCase: "Your AI remembers that Mrs. Johnson prefers Thursday afternoons with Sarah for her balayage. It automatically reminds her to book and tracks her loyalty points.",
    features: [
      "Stylist-specific booking",
      "Preference memory",
      "Automated reminders",
      "Loyalty tracking",
      "Waitlist management"
    ],
    startingPrice: 500
  },
  {
    id: "barbershops",
    name: "Barbershops",
    category: "Beauty & Personal Care",
    icon: "💈",
    shortDescription: "Handle walk-ins vs appointments and manage client wait times.",
    painPoints: [
      "Balancing walk-ins with appointments",
      "Managing client wait times",
      "Handling last-minute cancellations",
      "Tracking client preferences",
      "Sending appointment reminders"
    ],
    solutions: [
      "Hybrid walk-in/appointment system",
      "Real-time wait time updates",
      "Automated cancellation management",
      "Client preference tracking",
      "Automated booking reminders"
    ],
    useCase: "Clients can check real-time wait times, book their slot, and get a text when it's almost their turn. Walk-ins get estimated wait times instantly.",
    features: [
      "Real-time wait tracking",
      "Online booking",
      "Wait time notifications",
      "Preference memory",
      "Barber scheduling"
    ],
    startingPrice: 500
  },
  {
    id: "nail-salons",
    name: "Nail Salons",
    category: "Beauty & Personal Care",
    icon: "💅",
    shortDescription: "Streamline booking, service selection, and client follow-ups.",
    painPoints: [
      "Managing multiple service types and durations",
      "Handling group bookings",
      "Tracking design preferences",
      "Sending appointment reminders",
      "Encouraging regular maintenance visits"
    ],
    solutions: [
      "Service-specific booking with duration estimates",
      "Group booking coordination",
      "Design preference tracking with photos",
      "Automated reminders",
      "Maintenance visit scheduling"
    ],
    useCase: "Clients book their specific service (gel, acrylic, design) with accurate time estimates. The system tracks their favorite designs and reminds them when it's time for a fill.",
    features: [
      "Service-specific scheduling",
      "Group booking support",
      "Design gallery and memory",
      "Maintenance reminders",
      "Preference tracking"
    ],
    startingPrice: 500
  },

  // ==================== DENTAL ====================
  {
    id: "general-dentistry",
    name: "General Dentistry",
    category: "Dental",
    icon: "🦷",
    shortDescription: "Automate appointment confirmations, reminders, and patient communications.",
    painPoints: [
      "Managing patient appointments",
      "Sending cleaning reminders",
      "Handling treatment follow-ups",
      "Answering common patient questions",
      "Reducing no-shows"
    ],
    solutions: [
      "Automated appointment scheduling and confirmation",
      "6-month cleaning reminder automation",
      "Treatment follow-up sequences",
      "AI-powered FAQ responses",
      "Smart reminder system to reduce no-shows"
    ],
    useCase: "Patients get automatic reminders for their 6-month cleanings. After procedures, they receive care instructions and follow-up scheduling - reducing no-shows by 35%.",
    features: [
      "Appointment automation",
      "Cleaning reminder system",
      "Treatment follow-ups",
      "Patient FAQ handling",
      "No-show reduction"
    ],
    startingPrice: 600
  },
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    category: "Dental",
    icon: "😁",
    shortDescription: "Handle consultation bookings, treatment inquiries, and patient education.",
    painPoints: [
      "Scheduling consultations for various procedures",
      "Answering detailed treatment questions",
      "Following up on treatment plans",
      "Managing before/after documentation",
      "Converting inquiries to consultations"
    ],
    solutions: [
      "Procedure-specific consultation booking",
      "AI-powered treatment information",
      "Automated follow-up sequences",
      "Before/after gallery integration",
      "Lead nurturing for consultations"
    ],
    useCase: "Potential patients can learn about veneers, whitening, or Invisalign 24/7, see before/after examples, and book consultations automatically while you focus on procedures.",
    features: [
      "Procedure information chatbot",
      "Consultation booking",
      "Treatment follow-ups",
      "Gallery showcase",
      "Lead conversion tracking"
    ],
    startingPrice: 700
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    category: "Dental",
    icon: "😄",
    shortDescription: "Automate adjustment appointments, parent communications, and progress tracking.",
    painPoints: [
      "Scheduling regular adjustment appointments",
      "Communicating with parents",
      "Tracking treatment progress",
      "Handling emergency appointments",
      "Managing multiple patient timelines"
    ],
    solutions: [
      "Automated adjustment scheduling",
      "Parent communication portal",
      "Progress tracking with photos",
      "Emergency appointment handling",
      "Treatment timeline management"
    ],
    useCase: "Parents get automatic reminders about adjustment appointments. Progress photos are tracked automatically, and emergency requests are prioritized and routed correctly.",
    features: [
      "Adjustment reminders",
      "Parent notifications",
      "Progress tracking",
      "Emergency scheduling",
      "Timeline management"
    ],
    startingPrice: 700
  },

  // ==================== HOME SERVICES ====================
  {
    id: "hvac",
    name: "HVAC Services",
    category: "Home Services",
    icon: "❄️",
    shortDescription: "Handle emergency calls, schedule service visits, and manage maintenance contracts.",
    painPoints: [
      "Handling emergency service calls",
      "Scheduling routine maintenance",
      "Managing seasonal demand spikes",
      "Tracking service contracts",
      "Sending maintenance reminders"
    ],
    solutions: [
      "Emergency call routing and prioritization",
      "Automated service scheduling",
      "Seasonal demand management",
      "Contract tracking and renewal",
      "Annual maintenance reminder automation"
    ],
    useCase: "Homeowners get automatic annual maintenance reminders before summer and winter peaks. Emergency calls are prioritized and technicians are dispatched efficiently.",
    features: [
      "Emergency dispatch",
      "Seasonal reminders",
      "Contract management",
      "Service scheduling",
      "Technician routing"
    ],
    startingPrice: 500
  },
  {
    id: "electricians",
    name: "Electricians",
    category: "Home Services",
    icon: "⚡",
    shortDescription: "Automate quote requests, job scheduling, and customer follow-ups.",
    painPoints: [
      "Handling service call requests",
      "Providing accurate quotes",
      "Scheduling jobs efficiently",
      "Following up on completed work",
      "Managing emergency calls"
    ],
    solutions: [
      "Automated quote request handling",
      "Smart job scheduling and routing",
      "Post-job follow-up automation",
      "Emergency call prioritization",
      "Customer satisfaction tracking"
    ],
    useCase: "Customers describe their electrical issue online and get a callback scheduled automatically. After the job, they receive a follow-up ensuring satisfaction.",
    features: [
      "Quote automation",
      "Job scheduling",
      "Route optimization",
      "Follow-up sequences",
      "Emergency handling"
    ],
    startingPrice: 500
  },
  {
    id: "plumbers",
    name: "Plumbers",
    category: "Home Services",
    icon: "🔧",
    shortDescription: "Route emergency calls, schedule jobs, and automate quote follow-ups.",
    painPoints: [
      "Managing emergency calls 24/7",
      "Scheduling routine jobs",
      "Following up on quotes",
      "Tracking job completion",
      "Handling after-hours inquiries"
    ],
    solutions: [
      "24/7 emergency call routing",
      "Automated job scheduling",
      "Quote follow-up automation",
      "Job completion tracking",
      "After-hours inquiry handling"
    ],
    useCase: "Emergency calls get routed to you immediately while routine inquiries are handled automatically. Quote requests get instant responses and follow-ups.",
    features: [
      "Emergency routing",
      "24/7 inquiry handling",
      "Quote automation",
      "Job tracking",
      "Scheduling optimization"
    ],
    startingPrice: 500
  },
  {
    id: "landscaping",
    name: "Landscaping",
    category: "Home Services",
    icon: "🌿",
    shortDescription: "Schedule seasonal services, manage client preferences, and automate reminders.",
    painPoints: [
      "Scheduling seasonal services",
      "Managing recurring clients",
      "Handling weather-related changes",
      "Tracking client preferences",
      "Sending service reminders"
    ],
    solutions: [
      "Seasonal service scheduling automation",
      "Recurring client management",
      "Weather-adjusted scheduling",
      "Client preference tracking",
      "Automated service reminders"
    ],
    useCase: "Clients get automatic reminders for lawn care, leaf removal, and seasonal services. The system tracks their preferences and adjusts for weather automatically.",
    features: [
      "Seasonal scheduling",
      "Recurring service management",
      "Weather integration",
      "Preference tracking",
      "Automated reminders"
    ],
    startingPrice: 500
  },
  {
    id: "roofing",
    name: "Roofing",
    category: "Home Services",
    icon: "🏠",
    shortDescription: "Handle inspection requests, manage quotes, and schedule installations.",
    painPoints: [
      "Handling inspection requests",
      "Providing accurate quotes",
      "Scheduling installations",
      "Managing project timelines",
      "Following up on estimates"
    ],
    solutions: [
      "Automated inspection scheduling",
      "Quote generation and follow-up",
      "Installation project management",
      "Timeline tracking and updates",
      "Estimate follow-up automation"
    ],
    useCase: "Homeowners request inspections online and get automatic follow-ups. Quotes are tracked and follow-ups sent until decisions are made.",
    features: [
      "Inspection booking",
      "Quote tracking",
      "Project scheduling",
      "Timeline updates",
      "Follow-up automation"
    ],
    startingPrice: 600
  },

  // ==================== AUTOMOTIVE ====================
  {
    id: "auto-repair",
    name: "Auto Repair Shops",
    category: "Automotive",
    icon: "🚗",
    shortDescription: "Manage service requests, provide repair updates, and schedule appointments.",
    painPoints: [
      "Managing service requests",
      "Providing repair status updates",
      "Scheduling appointments efficiently",
      "Handling parts ordering",
      "Following up for routine maintenance"
    ],
    solutions: [
      "Automated service request handling",
      "Real-time repair status updates",
      "Smart appointment scheduling",
      "Parts tracking automation",
      "Maintenance reminder system"
    ],
    useCase: "Customers get automatic updates: 'Your brake pads are being replaced, ready by 3 PM.' Maintenance reminders are sent based on mileage and time.",
    features: [
      "Service request automation",
      "Status update system",
      "Appointment scheduling",
      "Parts tracking",
      "Maintenance reminders"
    ],
    startingPrice: 500
  },
  {
    id: "car-wash",
    name: "Car Wash & Detailing",
    category: "Automotive",
    icon: "🚙",
    shortDescription: "Handle bookings, manage memberships, and send promotional offers.",
    painPoints: [
      "Managing wash bookings",
      "Handling membership accounts",
      "Sending promotional offers",
      "Tracking customer frequency",
      "Managing peak time queues"
    ],
    solutions: [
      "Online booking system",
      "Membership management automation",
      "Automated promotional campaigns",
      "Customer frequency tracking",
      "Peak time scheduling"
    ],
    useCase: "Members book their wash slot online, skip the line, and receive personalized offers based on their wash frequency and preferences.",
    features: [
      "Online booking",
      "Membership tracking",
      "Promotional automation",
      "Loyalty programs",
      "Queue management"
    ],
    startingPrice: 400
  },

  // ==================== PROFESSIONAL SERVICES ====================
  {
    id: "real-estate",
    name: "Real Estate Agents",
    category: "Professional Services",
    icon: "🏡",
    shortDescription: "Automate lead follow-ups, schedule showings, and send market updates.",
    painPoints: [
      "Managing showing requests",
      "Following up with leads quickly",
      "Coordinating closings",
      "Sending market updates",
      "Handling inquiries 24/7"
    ],
    solutions: [
      "Instant lead response system",
      "Automated showing scheduling",
      "Closing coordination automation",
      "Market update newsletters",
      "24/7 inquiry handling"
    ],
    useCase: "New leads get instant responses at any hour. Showing requests are scheduled automatically, and follow-ups continue until the lead converts or opts out.",
    features: [
      "Instant lead response",
      "Showing scheduling",
      "Closing coordination",
      "Market updates",
      "Lead nurturing"
    ],
    startingPrice: 600
  },
  {
    id: "accounting",
    name: "Accounting & CPA Firms",
    category: "Professional Services",
    icon: "📊",
    shortDescription: "Manage client deadlines, handle tax season inquiries, and schedule consultations.",
    painPoints: [
      "Managing client deadlines",
      "Handling tax season overload",
      "Scheduling consultations",
      "Collecting client documents",
      "Sending deadline reminders"
    ],
    solutions: [
      "Automated deadline tracking and reminders",
      "Tax season inquiry handling",
      "Consultation scheduling system",
      "Document collection automation",
      "Client communication workflows"
    ],
    useCase: "Clients get automatic reminders about tax deadlines and document requests. During tax season, common questions are handled automatically while you focus on complex returns.",
    features: [
      "Deadline reminders",
      "Document collection",
      "Consultation booking",
      "Inquiry handling",
      "Client communication"
    ],
    startingPrice: 600
  },
  {
    id: "lawyers",
    name: "Law Firms & Attorneys",
    category: "Professional Services",
    icon: "⚖️",
    shortDescription: "Automate client intake, schedule consultations, and track case deadlines.",
    painPoints: [
      "Managing client intake",
      "Scheduling consultations",
      "Tracking case deadlines",
      "Answering common legal questions",
      "Following up with potential clients"
    ],
    solutions: [
      "Automated client intake forms",
      "Consultation scheduling system",
      "Case deadline tracking",
      "FAQ automation for common questions",
      "Lead follow-up sequences"
    ],
    useCase: "Potential clients fill out intake forms and book consultations 24/7. Case deadlines are tracked automatically, and routine inquiries get instant responses.",
    features: [
      "Intake automation",
      "Consultation booking",
      "Deadline tracking",
      "FAQ handling",
      "Lead nurturing"
    ],
    startingPrice: 700
  },
  {
    id: "insurance",
    name: "Insurance Agents",
    category: "Professional Services",
    icon: "🛡️",
    shortDescription: "Handle policy inquiries, manage renewals, and follow up on quotes.",
    painPoints: [
      "Handling policy inquiries",
      "Managing renewal schedules",
      "Following up on quotes",
      "Cross-selling additional coverage",
      "Maintaining client relationships"
    ],
    solutions: [
      "Automated policy inquiry responses",
      "Renewal reminder system",
      "Quote follow-up automation",
      "Cross-sell opportunity identification",
      "Client relationship automation"
    ],
    useCase: "Clients get automatic renewal reminders and coverage updates. Quote requests receive instant responses and follow-ups until conversion.",
    features: [
      "Policy inquiry handling",
      "Renewal automation",
      "Quote follow-ups",
      "Cross-sell alerts",
      "Relationship management"
    ],
    startingPrice: 500
  },
  {
    id: "financial-advisors",
    name: "Financial Advisors",
    category: "Professional Services",
    icon: "📈",
    shortDescription: "Schedule consultations, send market insights, and manage client communications.",
    painPoints: [
      "Scheduling client meetings",
      "Sending regular market updates",
      "Onboarding new clients",
      "Managing portfolio review schedules",
      "Handling routine client questions"
    ],
    solutions: [
      "Automated meeting scheduling",
      "Market insight newsletter automation",
      "Client onboarding workflows",
      "Portfolio review reminders",
      "FAQ automation"
    ],
    useCase: "Clients receive personalized market insights and automatic portfolio review scheduling. New prospects get onboarding sequences that convert them to clients.",
    features: [
      "Meeting scheduling",
      "Newsletter automation",
      "Onboarding sequences",
      "Review reminders",
      "Client communication"
    ],
    startingPrice: 600
  },

  // ==================== RETAIL & E-COMMERCE ====================
  {
    id: "retail-boutiques",
    name: "Retail & Boutiques",
    category: "Retail & E-commerce",
    icon: "🛍️",
    shortDescription: "Handle customer inquiries, manage inventory alerts, and send promotions.",
    painPoints: [
      "Answering product questions",
      "Managing inventory levels",
      "Sending promotional offers",
      "Handling returns and exchanges",
      "Tracking customer preferences"
    ],
    solutions: [
      "AI-powered product inquiry handling",
      "Low inventory alert system",
      "Automated promotional campaigns",
      "Returns processing automation",
      "Customer preference tracking"
    ],
    useCase: "Customers ask about product availability and get instant answers. When items are back in stock, interested customers are automatically notified.",
    features: [
      "Product inquiry chatbot",
      "Inventory alerts",
      "Promotional automation",
      "Returns handling",
      "Preference tracking"
    ],
    startingPrice: 500
  },

  // ==================== FOOD & HOSPITALITY ====================
  {
    id: "restaurants",
    name: "Restaurants",
    category: "Food & Hospitality",
    icon: "🍽️",
    shortDescription: "Manage reservations, handle takeout orders, and respond to reviews.",
    painPoints: [
      "Managing reservations",
      "Handling takeout inquiries",
      "Responding to customer reviews",
      "Sending special offer promotions",
      "Managing wait times"
    ],
    solutions: [
      "Automated reservation system",
      "Takeout order handling",
      "Review response automation",
      "Promotional campaign tools",
      "Wait time management"
    ],
    useCase: "Reservations are managed automatically, wait times are updated in real-time, and customers receive confirmation and reminder texts automatically.",
    features: [
      "Reservation management",
      "Order handling",
      "Review responses",
      "Promotional tools",
      "Wait time updates"
    ],
    startingPrice: 500
  },
  {
    id: "cafes-coffee",
    name: "Cafes & Coffee Shops",
    category: "Food & Hospitality",
    icon: "☕",
    shortDescription: "Handle catering requests, manage loyalty programs, and promote specials.",
    painPoints: [
      "Handling catering inquiries",
      "Managing loyalty programs",
      "Promoting daily specials",
      "Taking pre-orders",
      "Managing peak hour queues"
    ],
    solutions: [
      "Catering request automation",
      "Loyalty program management",
      "Automated special promotions",
      "Mobile pre-order system",
      "Queue management tools"
    ],
    useCase: "Regulars get personalized offers and loyalty rewards automatically. Catering requests are handled and confirmed without manual intervention.",
    features: [
      "Catering automation",
      "Loyalty tracking",
      "Special promotions",
      "Pre-order system",
      "Queue management"
    ],
    startingPrice: 400
  },

  // ==================== EDUCATION & COACHING ====================
  {
    id: "tutors",
    name: "Tutors & Education",
    category: "Education & Coaching",
    icon: "📚",
    shortDescription: "Schedule sessions, track student progress, and automate billing.",
    painPoints: [
      "Scheduling sessions with students",
      "Tracking student progress",
      "Managing billing and payments",
      "Sending session reminders",
      "Handling parent communications"
    ],
    solutions: [
      "Automated session scheduling",
      "Progress tracking system",
      "Billing and payment automation",
      "Session reminder system",
      "Parent communication portal"
    ],
    useCase: "Students book sessions online, get automatic reminders, and parents receive progress updates. Billing happens automatically after each session.",
    features: [
      "Session booking",
      "Progress tracking",
      "Payment automation",
      "Reminders",
      "Parent updates"
    ],
    startingPrice: 400
  },
  {
    id: "music-teachers",
    name: "Music Teachers",
    category: "Education & Coaching",
    icon: "🎵",
    shortDescription: "Manage lesson schedules, track practice logs, and handle recital planning.",
    painPoints: [
      "Scheduling lessons",
      "Tracking student practice",
      "Planning recitals and events",
      "Managing payments",
      "Sending lesson reminders"
    ],
    solutions: [
      "Automated lesson scheduling",
      "Practice log tracking",
      "Event planning tools",
      "Payment processing",
      "Reminder automation"
    ],
    useCase: "Students book lessons, log practice time, and receive automatic reminders. Recital planning is streamlined with automated communications to parents.",
    features: [
      "Lesson scheduling",
      "Practice tracking",
      "Event planning",
      "Payment processing",
      "Reminders"
    ],
    startingPrice: 400
  },
  {
    id: "life-coaches",
    name: "Life Coaches & Consultants",
    category: "Education & Coaching",
    icon: "🎯",
    shortDescription: "Schedule discovery calls, manage client relationships, and automate follow-ups.",
    painPoints: [
      "Scheduling discovery calls",
      "Managing client relationships",
      "Sending session materials",
      "Tracking client goals",
      "Following up between sessions"
    ],
    solutions: [
      "Automated discovery call booking",
      "CRM for client management",
      "Material delivery automation",
      "Goal tracking system",
      "Between-session follow-ups"
    ],
    useCase: "Prospects book discovery calls automatically. Clients receive materials before sessions and follow-up exercises after, keeping them engaged between sessions.",
    features: [
      "Call scheduling",
      "Client CRM",
      "Material delivery",
      "Goal tracking",
      "Follow-up automation"
    ],
    startingPrice: 500
  },

  // ==================== PET SERVICES ====================
  {
    id: "veterinarians",
    name: "Veterinary Clinics",
    category: "Pet Services",
    icon: "🐾",
    shortDescription: "Schedule appointments, send vaccine reminders, and handle patient records.",
    painPoints: [
      "Managing appointments",
      "Sending vaccine reminders",
      "Handling emergency calls",
      "Managing patient records",
      "Following up after procedures"
    ],
    solutions: [
      "Automated appointment scheduling",
      "Vaccine reminder system",
      "Emergency call handling",
      "Patient record management",
      "Post-procedure follow-ups"
    ],
    useCase: "Pet owners get automatic vaccine and check-up reminders. After procedures, they receive care instructions and follow-up scheduling automatically.",
    features: [
      "Appointment scheduling",
      "Vaccine reminders",
      "Emergency handling",
      "Record management",
      "Follow-up automation"
    ],
    startingPrice: 600
  },
  {
    id: "pet-grooming",
    name: "Pet Grooming",
    category: "Pet Services",
    icon: "🐕",
    shortDescription: "Handle bookings, track grooming preferences, and send reminders.",
    painPoints: [
      "Managing appointment schedules",
      "Tracking pet preferences",
      "Handling breed-specific needs",
      "Sending appointment reminders",
      "Managing recurring bookings"
    ],
    solutions: [
      "Online booking system",
      "Pet preference tracking",
      "Breed-specific scheduling",
      "Automated reminders",
      "Recurring booking management"
    ],
    useCase: "Pet parents book appointments online, and the system remembers each pet's specific needs, grooming history, and preferred schedule.",
    features: [
      "Online booking",
      "Preference tracking",
      "Breed scheduling",
      "Reminders",
      "Recurring bookings"
    ],
    startingPrice: 400
  },

  // ==================== CREATIVE SERVICES ====================
  {
    id: "photographers",
    name: "Photographers",
    category: "Creative Services",
    icon: "📷",
    shortDescription: "Schedule shoots, handle client galleries, and automate booking.",
    painPoints: [
      "Scheduling photo sessions",
      "Delivering client galleries",
      "Handling booking inquiries",
      "Sending contracts and invoices",
      "Following up for reviews"
    ],
    solutions: [
      "Automated session scheduling",
      "Gallery delivery system",
      "Inquiry handling automation",
      "Contract and invoice automation",
      "Review request sequences"
    ],
    useCase: "Clients book sessions online, receive contracts automatically, and get their gallery link with a personalized message. Review requests are sent after delivery.",
    features: [
      "Session booking",
      "Gallery delivery",
      "Inquiry handling",
      "Contract automation",
      "Review requests"
    ],
    startingPrice: 500
  },
  {
    id: "marketing-agencies",
    name: "Marketing Agencies",
    category: "Creative Services",
    icon: "📱",
    shortDescription: "Manage client communications, automate reporting, and handle leads.",
    painPoints: [
      "Managing multiple client communications",
      "Sending regular reports",
      "Handling new business inquiries",
      "Scheduling client meetings",
      "Tracking project deadlines"
    ],
    solutions: [
      "Client communication hub",
      "Automated reporting system",
      "Lead handling automation",
      "Meeting scheduling",
      "Deadline tracking"
    ],
    useCase: "Clients receive automated monthly reports. New leads get instant responses and are qualified before reaching your team. Meeting scheduling is fully automated.",
    features: [
      "Client communication",
      "Report automation",
      "Lead handling",
      "Meeting scheduling",
      "Deadline tracking"
    ],
    startingPrice: 700
  }
];

// Group industries by category
export const industryCategories = Array.from(new Set(industries.map(i => i.category)));

// Get industry by ID
export function getIndustryById(id: string): Industry | undefined {
  return industries.find(i => i.id === id);
}

// Get industries by category
export function getIndustriesByCategory(category: string): Industry[] {
  return industries.filter(i => i.category === category);
}

// Search industries
export function searchIndustries(query: string): Industry[] {
  const lowerQuery = query.toLowerCase();
  return industries.filter(i => 
    i.name.toLowerCase().includes(lowerQuery) ||
    i.category.toLowerCase().includes(lowerQuery) ||
    i.shortDescription.toLowerCase().includes(lowerQuery)
  );
}
