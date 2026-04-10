export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    category: 'Basics',
    question: 'What is Mechanical Breakdown Insurance (MBI)?',
    answer: 'Mechanical Breakdown Insurance (MBI) is a policy that covers the cost of repairing or replacing your vehicle\'s mechanical and electrical parts after a sudden, unexpected failure. Unlike standard car insurance which covers accidents, MBI covers internal component failures — such as engine seizure, transmission failure, or electrical faults — that occur due to mechanical defect rather than accident or negligence. It\'s designed primarily for used vehicles or vehicles that have exited their manufacturer warranty period.',
  },
  {
    category: 'Basics',
    question: 'How is MBI different from a standard car warranty?',
    answer: 'A manufacturer warranty is provided by the car maker and typically covers defects for a fixed period (often 3–5 years or 100,000km). Once that warranty expires, you\'re unprotected against mechanical failures. MBI is an insurance product you purchase independently to cover mechanical failures after the warranty expires. It\'s also different from a "used car warranty" offered by dealers — those are often limited in scope and duration. MBI from an independent insurer typically offers broader, longer-term protection with more transparent terms.',
  },
  {
    category: 'Basics',
    question: 'Is MBI mandatory in New Zealand?',
    answer: 'No, MBI is not legally required in New Zealand. However, it is strongly recommended for used vehicle owners, owners of out-of-warranty vehicles, and anyone who couldn\'t easily absorb a large unexpected repair bill. Given that a single engine or transmission repair can cost $5,000–$20,000, many NZ motorists view MBI as essential financial protection. The Insurance Council of New Zealand (ICNZ) supports MBI as a legitimate vehicle protection product.',
  },
  {
    category: 'Coverage',
    question: 'What does MBI typically cover?',
    answer: 'MBI typically covers sudden and unexpected failures of: the engine and internal components, transmission and gearbox, cooling and fuel systems, electrical systems and ECU, steering components, braking systems (hydraulic components, not pads/discs), drive axles and CV joints, air conditioning systems, turbochargers and superchargers, and many other mechanical and electrical parts. Comprehensive MBI policies often also include roadside assistance, towing costs, rental car cover during repairs, and accommodation benefits if stranded away from home.',
  },
  {
    category: 'Coverage',
    question: 'What does MBI NOT cover?',
    answer: 'MBI does not cover: routine maintenance items (oil, filters, tyres, brakes, belts), wear and tear items that degrade gradually, pre-existing conditions present before the policy was purchased, damage caused by accidents or collisions (that\'s covered by comprehensive car insurance), cosmetic issues (dents, scratches, interior wear), damage caused by neglect or failure to service the vehicle, modifications or aftermarket parts not disclosed to the insurer, and items excluded in your specific policy schedule. Always read your policy document carefully.',
  },
  {
    category: 'Coverage',
    question: 'Does MBI cover EVs and hybrid vehicles?',
    answer: 'Yes, but not all standard MBI policies cover EV-specific components. The biggest financial risk for EV owners is traction battery pack failure, which can cost $15,000–$30,000 to replace. Standard MBI may not include battery cover, or may have specific exclusions. If you own an EV or hybrid, look specifically for EV/hybrid battery cover as part of your MBI policy. Some specialist providers offer dedicated EV breakdown insurance that covers traction battery packs, electric motor components, and charging systems.',
  },
  {
    category: 'Coverage',
    question: 'Are Japanese import vehicles covered by MBI?',
    answer: 'Yes, Japanese import vehicles can be covered by MBI in New Zealand. However, some insurers charge higher premiums or have additional requirements for Japanese imports due to parts availability and potential odometer discrepancies. It\'s important to disclose the vehicle\'s full history including its actual NZ compliance date and odometer reading. Using agreed-value policies and specialist brokers familiar with Japanese imports is recommended. Many popular Japanese imports (Toyota, Honda, Mitsubishi, Nissan) are well-supported by NZ repairers.',
  },
  {
    category: 'Claims',
    question: 'How do I make an MBI claim?',
    answer: 'If your vehicle breaks down: (1) Contact your MBI insurer\'s 24/7 claims line before authorising any repairs. (2) Do not authorise the repairer to begin work until you have a claim number — unauthorised repairs may not be covered. (3) Your insurer will typically assess the failure and authorise repair at an approved workshop. (4) Parts and labour costs for covered components will be paid directly to the repairer. (5) You pay any applicable excess. The process is usually quick for straightforward mechanical failures, with approvals often same-day.',
  },
  {
    category: 'Claims',
    question: 'Will my claim be rejected if I haven\'t serviced my car?',
    answer: 'Potentially yes. Most MBI policies require you to maintain the vehicle in accordance with the manufacturer\'s recommended service schedule. If a failure occurs and you cannot demonstrate regular servicing (typically via receipts or a service logbook), the insurer may decline or reduce your claim. Always keep your service records and ensure you\'re using an appropriate grade of oil and having scheduled services performed on time. This requirement exists because neglected vehicles have dramatically higher failure rates.',
  },
  {
    category: 'Pricing',
    question: 'How much does MBI cost in New Zealand?',
    answer: 'MBI premiums in NZ vary based on: vehicle age and make/model, mileage at time of purchase, level of cover selected, excess amount chosen, and policy term (1–4 years). As a rough guide, entry-level cover for a 5–10 year old vehicle might start around $300–$600 per year, while comprehensive cover for a newer vehicle could range from $600–$1,500 annually. Single-payment policies for a 3-year term often cost $1,500–$3,500. The best way to get accurate pricing is to request a quote specific to your vehicle.',
  },
  {
    category: 'Pricing',
    question: 'Can I reduce my MBI premium?',
    answer: 'Yes. You can reduce your MBI premium by: choosing a higher excess (the amount you pay before cover kicks in), selecting a shorter policy term, choosing a more basic level of cover, having a strong vehicle service history documented, selecting an older or less complex vehicle (fewer electronic systems), and comparing multiple providers rather than accepting the first quote. Bundling MBI with other policies (such as GAP insurance) can sometimes attract a discount from certain providers.',
  },
  {
    category: 'Purchasing',
    question: 'When is the best time to buy MBI?',
    answer: 'The best time to purchase MBI is either: (1) at the point of buying a used vehicle (before any known issues arise), or (2) before your manufacturer warranty expires. Most MBI policies require the vehicle to pass an inspection or meet mileage/age thresholds at the time of purchase. Buying MBI after a fault has appeared will usually result in that specific issue being treated as a pre-existing condition and excluded. The earlier you secure cover, the more protection you have from the start.',
  },
  {
    category: 'Purchasing',
    question: 'Can I buy MBI for an older high-mileage vehicle?',
    answer: 'Yes, though options become more limited. Most insurers have age (typically up to 15–20 years) and mileage (typically up to 150,000–200,000km) limits for MBI eligibility. For high-mileage or older vehicles, cover may be available but with: a higher excess, more limited component coverage, a shorter maximum policy term, a pre-purchase vehicle inspection requirement, or higher premiums. Some specialist providers cater specifically to older vehicles. It\'s always worth requesting a quote even if you think your vehicle might be borderline eligible.',
  },
];
