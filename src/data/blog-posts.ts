export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'complete-guide-mechanical-breakdown-insurance-nz',
    title: 'The Complete Guide to Mechanical Breakdown Insurance in NZ (2025)',
    excerpt: 'Everything you need to know about MBI in New Zealand — from what\'s covered to how to choose the right policy for your vehicle.',
    date: '2026-04-08',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-1.jpg',
    readTime: '10 min read',
    category: 'Insurance Guides',
    content: `<h2>What Is Mechanical Breakdown Insurance?</h2>
<p>Mechanical Breakdown Insurance (MBI) is an insurance product that covers the cost of repairing or replacing your vehicle's mechanical and electrical components after a sudden, unexpected failure. Unlike regular car insurance, which covers accidents, fire, and theft, MBI specifically addresses internal mechanical failures — the engine seizing, a transmission failing, an electrical module malfunctioning — that occur due to mechanical defect rather than external events.</p>

<p>In New Zealand, MBI is particularly relevant because the country's used vehicle market is dominated by second-hand imports and domestic used cars that have typically exited their manufacturer warranty. Without MBI, owners of these vehicles bear the full financial risk of unexpected mechanical failures, which can run into tens of thousands of dollars.</p>

<h2>Why Vehicle Owners Need MBI</h2>
<p>New Zealand has over 4.4 million registered vehicles, the majority of which are used cars purchased without active manufacturer warranties. The average age of NZ's vehicle fleet is over 14 years — among the oldest in the developed world. An older fleet means higher mechanical failure risk, and that risk falls entirely on vehicle owners without MBI protection.</p>

<p>Consider the most common and most expensive vehicle failures: automatic transmission replacement ($5,000–$15,000), engine rebuild or replacement ($4,000–$25,000), ECU failure ($1,500–$4,000), turbocharger replacement ($2,000–$6,000), and cooling system failure ($1,000–$3,000). Any of these can make a used vehicle economically unviable to repair, leaving owners stranded without transport and without recourse.</p>

<h2>Types of MBI Available</h2>
<p><strong>Comprehensive MBI</strong> covers the widest range of components including the engine, transmission, drivetrain, electrical systems, cooling, fuel injection, steering, and braking systems. This is the gold standard of protection and typically includes roadside assistance, towing, rental car cover, and accommodation benefits.</p>

<p><strong>Drivetrain-focused cover</strong> targets the most expensive mechanical repairs — transmission, gearbox, differentials, and driveshafts — at lower premiums than full comprehensive cover.</p>

<p><strong>Electrical systems cover</strong> is increasingly important in modern vehicles where ECU, sensor, and module failures are common and expensive. This is particularly valuable for Japanese import vehicles with proprietary electronics.</p>

<p><strong>EV and Hybrid battery cover</strong> addresses the unique financial risk of traction battery pack failure in electric and plug-in hybrid vehicles. With replacement costs of $15,000–$30,000+, this cover is essential for EV owners without active manufacturer battery warranty.</p>

<h2>What MBI Does NOT Cover</h2>
<p>Understanding exclusions is as important as knowing what's covered. NZ MBI policies universally exclude: routine maintenance items (oil, filters, spark plugs), wear items (tyres, brake pads, clutch friction material), pre-existing conditions, damage from accidents or misuse, modifications not disclosed at policy inception, and failures resulting from neglecting the manufacturer's service schedule. Always read your policy schedule carefully and ask your broker about any specific concerns.</p>

<h2>Choosing Between MBI Providers</h2>
<p>New Zealand's MBI market is served by specialist providers including AutoSure (the longest-established dedicated MBI insurer), Provident Insurance (strong dealer network), and the AA's Mechanical Care product. Each has different strengths — AutoSure for breadth of coverage, Provident for bundling with other vehicle finance products, the AA for its nationwide service network.</p>

<p>For most used vehicle owners, using an independent broker who works across multiple MBI providers gives the best outcome — access to multiple quotes, objective advice, and tailored policy selection rather than the first product a dealer presents.</p>`,
  },
  {
    slug: 'mbi-vs-extended-warranty-nz',
    title: 'MBI vs Extended Warranty in NZ: What\'s the Difference?',
    excerpt: 'Used car buyers face a choice between dealer-offered extended warranties and independent MBI policies. This guide explains which is right for you.',
    date: '2026-04-05',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-5.jpg',
    readTime: '7 min read',
    category: 'Coverage Explained',
    content: `<h2>The Core Difference</h2>
<p>When protecting a used vehicle in New Zealand, two products occupy similar territory but operate very differently: extended warranties and Mechanical Breakdown Insurance (MBI). Understanding the distinction helps you make an informed decision rather than defaulting to whatever the car dealer presents at the point of sale.</p>

<h2>Extended Warranties Explained</h2>
<p>An extended warranty in New Zealand typically refers to a product sold by a vehicle dealer that extends warranty-style protection beyond the manufacturer's original term. These products are often provided by specialist warranty companies and sold through dealer finance departments. They're typically structured as service contracts rather than insurance products and are primarily available at the point of vehicle purchase.</p>

<p>Extended warranties commonly have more specific component lists, shorter available terms (often 1–2 years), and may require servicing at approved franchise centres. They're regulated under the Consumer Guarantees Act, which provides some baseline protections for purchasers.</p>

<h2>MBI as a Regulated Insurance Product</h2>
<p>MBI is a licensed insurance product regulated by the Reserve Bank of New Zealand (RBNZ) and the Financial Markets Authority (FMA). This means providers must hold insurance licenses, maintain solvency margins, and handle claims in accordance with the Insurance Law Reform Act. These protections give MBI policyholders stronger legal standing than extended warranty purchasers in most dispute scenarios.</p>

<p>MBI can be purchased at any point — not just at vehicle sale — and is available from multiple providers rather than being tied to a single dealer relationship. MBI policies can often be transferred when a vehicle is sold, potentially adding resale value.</p>

<h2>When to Choose Each</h2>
<p>Choose a dealer-arranged extended warranty when: you're purchasing a newer used vehicle within dealer-extended warranty eligibility, the dealer is offering a competitive rate without significant markup, the product includes bundled GAP insurance or other valuable additions, and you prefer the convenience of a single-source vehicle finance package.</p>

<p>Choose independent MBI when: you've already purchased a vehicle, you want to compare multiple providers simultaneously, you want objective broker advice rather than dealer-motivated sales, or you're purchasing an EV, Japanese import, or specialist vehicle that may not fit standard dealer warranty products.</p>`,
  },
  {
    slug: 'how-much-does-mbi-cost-nz',
    title: 'How Much Does Mechanical Breakdown Insurance Cost in NZ?',
    excerpt: 'A transparent breakdown of MBI pricing in New Zealand — what factors affect your premium and how to get the best value.',
    date: '2026-04-01',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-6.jpg',
    readTime: '6 min read',
    category: 'Money & Pricing',
    content: `<h2>MBI Premium Ranges</h2>
<p>Mechanical Breakdown Insurance premiums in New Zealand vary significantly based on several key factors. Rather than a fixed product with a standard price, MBI is risk-priced, meaning your specific vehicle, its age, mileage, and condition all influence what you'll pay.</p>

<p>As a broad guide for 2025: entry-level cover (engine and transmission focus) for a mid-range 5-8 year old vehicle typically ranges from $20–$40 per month or $300–$600 as an annual premium. Mid-range comprehensive cover for the same vehicle runs $40–$70 per month or $600–$1,000 annually. Premium cover including EV components, roadside assistance, and accommodation benefits can range from $80–$130 per month.</p>

<h2>Factors That Drive Your Premium</h2>
<p>Vehicle age is the single biggest factor — an 8-year-old vehicle will cost substantially less to cover than a 14-year-old one with similar mileage, because statistical failure rates increase with age. Mileage matters similarly — high-kilometre engines and transmissions are statistically more likely to fail. Vehicle type also matters significantly: a complex German luxury vehicle with proprietary electronics and expensive parts costs far more to insure than a common Japanese economy car with readily available, affordable parts.</p>

<p>Your selected excess has a direct relationship with premium — choosing a $1,000 excess instead of a $250 excess can reduce your premium by 15–25%. The cover level chosen (basic vs comprehensive) and policy term (annual vs 3-year prepaid) also affect pricing. Multi-year prepaid policies often provide better per-year pricing than rolling annual premiums.</p>

<h2>Getting Best-Value MBI</h2>
<p>Comparing multiple MBI providers is the most effective way to ensure you're getting fair value. The MBI market in New Zealand is not perfectly competitive — dealers typically present one or two products, creating no comparison pressure. Using an independent broker who works across multiple providers gives you the comparison advantage without requiring you to research multiple companies independently.</p>

<p>Also consider whether you actually need the most comprehensive cover available. For a $8,000 vehicle, premium comprehensive MBI may not be economical — a policy covering engine, transmission, and electrical basics may represent better value. For a $40,000 vehicle, comprehensive cover is almost always worthwhile.</p>`,
  },
  {
    slug: 'top-reasons-mbi-claims-declined-nz',
    title: 'Top 5 Reasons Your MBI Claim Could Be Declined in NZ',
    excerpt: 'Avoid the most common MBI claim pitfalls that New Zealand drivers face. Know your policy and protect your right to claim.',
    date: '2026-03-28',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-2.jpg',
    readTime: '8 min read',
    category: 'Claims Guide',
    content: `<h2>Why MBI Claims Get Declined</h2>
<p>Mechanical Breakdown Insurance exists to protect vehicle owners from unexpected repair costs — but claims do get declined, and when they do, the consequences can be devastating. Understanding the most common reasons for MBI claim declines helps you avoid the pitfalls and ensures your policy delivers when you need it most.</p>

<h2>Reason 1: Pre-Existing Conditions</h2>
<p>The pre-existing condition exclusion is the most frequently cited reason for MBI claim declines in New Zealand. If an insurer can demonstrate that a fault was present (or reasonably detectable) before your policy inception date, they can decline to pay for repairs related to that fault.</p>

<p>To protect against this, purchase MBI before any known issues arise, keep records of your pre-policy purchase inspection, and be transparent about any known minor issues at policy purchase. A broker can help you disclose appropriately without unnecessarily inflating your premium.</p>

<h2>Reason 2: Failure to Maintain Service Records</h2>
<p>Most NZ MBI policies require you to maintain the vehicle according to the manufacturer's recommended service schedule. If you make a claim and cannot produce evidence of regular servicing (receipts, dealer stamp, service logbook), the insurer may decline the claim citing maintenance failure as a contributing cause.</p>

<p>Keep all service receipts regardless of where you have the vehicle serviced — even oil changes matter. For used vehicles, obtain as much service history documentation as possible at purchase.</p>

<h2>Reason 3: Authorising Repairs Before Calling the Insurer</h2>
<p>A common and costly mistake: telling the mechanic to "go ahead" before contacting your MBI insurer. Most policies require you to notify the insurer and obtain pre-authorisation before repairs begin. Unapproved repairs may not be covered, even if the failure itself would have been covered had you called first.</p>

<h2>Reason 4: Excluded Components</h2>
<p>Many policy-holders are surprised to find that a specific failed component is excluded from their policy. Common exclusions that cause surprise: timing belts (wear item in many policies), clutch friction material (wear item), catalytic converters (exhaust system exclusion), and certain electronic accessories. Read your policy schedule's component list carefully when purchasing — ask your broker to explain any ambiguous items.</p>

<h2>Reason 5: Misrepresentation at Inception</h2>
<p>If the insurer discovers that material information was withheld or misrepresented when the policy was purchased — for example, a known mechanical issue, undisclosed modifications, or incorrect mileage — they may decline the claim and potentially void the policy entirely. Be accurate and complete when disclosing vehicle information. The consequences of non-disclosure far outweigh any short-term premium savings.</p>`,
  },
  {
    slug: 'ev-hybrid-breakdown-insurance-nz',
    title: 'EV and Hybrid Car Breakdown Insurance: What NZ Owners Need to Know',
    excerpt: 'Electric vehicle ownership in NZ is growing fast. Here\'s what EV and hybrid owners need to know about specialised MBI cover for their vehicles.',
    date: '2026-03-22',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-7.jpg',
    readTime: '9 min read',
    category: 'EV Insurance',
    content: `<h2>The Growing EV Fleet</h2>
<p>New Zealand's electric vehicle fleet has grown significantly over the past five years, driven by government incentives, increasing model availability, and growing environmental awareness. Nissan LEAFs, Tesla Model 3s, BYD EVs, and Mitsubishi Outlander PHEVs have become common sights on NZ roads. This rapid adoption has created a new insurance need that the traditional MBI market has been slow to fully address.</p>

<h2>The EV Battery Risk</h2>
<p>The unique financial risk that EV and plug-in hybrid owners face is traction battery pack degradation or failure. Unlike a petrol engine that fails catastrophically and clearly, EV batteries can degrade gradually — reducing range — before potentially failing in a way that renders the vehicle unusable. Battery replacement costs are substantial: $15,000–$30,000 for most EVs, and even more for some premium models.</p>

<p>Manufacturer battery warranties typically cover batteries for 8 years or 160,000km against significant capacity degradation (below 70% original capacity). However, these warranties expire, and out-of-warranty battery issues on second-hand EVs are increasingly common as NZ's EV fleet ages.</p>

<h2>What EV MBI Should Cover</h2>
<p>Effective EV MBI should cover: the traction battery pack (both sudden failure and gradual degradation below a defined threshold), the battery management system (BMS), the main drive inverter, electric motor components, on-board charger (OBC), DC-DC converter, regenerative braking components, and thermal management systems including coolant pumps and heating elements. Standard MBI policies often cover some of these under general "electrical" cover but may specifically exclude the battery pack.</p>

<h2>Hybrid-Specific Considerations</h2>
<p>Plug-in hybrid vehicles (PHEVs) and mild hybrids have additional complexity — a petrol drivetrain alongside hybrid-specific components. A good PHEV MBI policy covers both the petrol mechanical components and the hybrid-specific electrical system including the traction battery, hybrid control module, and regenerative braking system. Non-plug-in hybrids (like the Toyota Prius or Honda Jazz Hybrid) typically have smaller batteries with lower replacement costs but still benefit from dedicated hybrid MBI cover.</p>

<h2>Finding EV MBI Cover</h2>
<p>Not all NZ MBI providers offer genuine EV battery cover. When evaluating EV MBI, specifically ask: does the policy cover traction battery pack replacement? Is there a minimum remaining capacity threshold? What is the maximum claim limit for a battery replacement event? Specialist brokers with EV MBI experience can identify the products that genuinely protect EV owners from battery-related financial risk.</p>`,
  },
  {
    slug: 'is-mbi-worth-it-nz',
    title: 'Is MBI Worth It? A Cost-Benefit Analysis for NZ Drivers',
    excerpt: 'Does Mechanical Breakdown Insurance actually pay off? We run the numbers for different vehicle profiles to help you decide.',
    date: '2026-03-15',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-8.jpg',
    readTime: '7 min read',
    category: 'Insurance Guides',
    content: `<h2>The Central Question</h2>
<p>Is Mechanical Breakdown Insurance worth paying for? Like all insurance products, MBI involves transferring financial risk to an insurer in exchange for a premium. Whether that exchange makes sense depends on the probability of needing to claim, the likely claim size if you do, and your personal financial capacity to absorb a large unexpected repair bill.</p>

<h2>Running the Numbers</h2>
<p>Let's consider three common vehicle profiles in New Zealand:</p>

<p><strong>Profile 1: 2016 Toyota Corolla, 95,000km.</strong> MBI comprehensive cover: approximately $700/year. Expected major repair probability over 3 years: roughly 15–20% (engine or transmission event). Average repair cost if it occurs: $3,000–$8,000. Expected value of cover: $450–$1,600 per year when probability-weighted. At $700/year, this is broadly break-even — but the tail risk of a $10,000 repair makes MBI rational for most people who couldn't easily absorb that cost.</p>

<p><strong>Profile 2: 2012 Subaru Forester, 140,000km.</strong> MBI (if available) might cost $1,000–$1,400/year for an older, high-mileage AWD vehicle. Failure probability is higher — perhaps 25–35% of a major repair event over three years. Expected repair cost: $4,000–$15,000. For an older Subaru with its more complex drivetrain, MBI represents genuinely good value despite the higher premium.</p>

<p><strong>Profile 3: 2020 Nissan LEAF, 45,000km, still in manufacturer warranty.</strong> MBI is less valuable while the vehicle remains in warranty. However, purchasing MBI to extend beyond the warranty expiry (typically 3 years/100,000km) is worthwhile — particularly EV battery cover given $20,000+ battery replacement costs.</p>

<h2>When MBI Definitely Makes Sense</h2>
<p>MBI is worth it when: you can't easily absorb a $5,000+ repair bill from savings, your vehicle is out of manufacturer warranty, you rely heavily on your vehicle for work or family transport, your vehicle is a Japanese import with specialist parts, you own an EV or PHEV with battery replacement risk, or you're purchasing a used vehicle with unknown full history. For most NZ households in these categories, MBI represents rational financial protection.</p>`,
  },
  {
    slug: 'japanese-import-mbi-nz',
    title: 'Mechanical Breakdown Insurance for Japanese Imports in NZ',
    excerpt: 'Japanese imports dominate the NZ used car market. Here\'s how MBI works specifically for Japanese-sourced vehicles.',
    date: '2026-03-10',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-3.jpg',
    readTime: '8 min read',
    category: 'Insurance Guides',
    content: `<h2>Japanese Imports in the Local Market</h2>
<p>New Zealand's used car market is heavily reliant on Japanese domestic market (JDM) vehicles. Shipped from Japan and compliance-tested for NZ roads, these vehicles — predominantly Toyota, Honda, Nissan, Mazda, Subaru, and Mitsubishi models — make up a substantial portion of NZ registrations. Their reputation for reliability is generally well-deserved, but they do present specific MBI considerations that differ from new vehicles purchased in New Zealand.</p>

<h2>Odometer and Mileage Considerations</h2>
<p>Japanese domestic market vehicles often arrive in NZ with relatively low odometers because Japanese motorists typically drive modest distances annually. However, these vehicles are also often older than their odometers alone might suggest, and their actual mechanical wear profile depends significantly on how they were used in Japan — urban low-speed driving vs highway driving creates very different wear patterns. MBI insurers are aware of this and may assess imported vehicles differently from locally-used equivalents.</p>

<h2>Parts Availability</h2>
<p>The most significant practical consideration for MBI on Japanese imports is parts availability. Major Japanese brands (Toyota, Honda, Nissan, Mazda) have strong aftermarket parts availability in NZ, meaning repairs are relatively affordable. More specialist JDM models or lower-volume makes may require parts importation, adding cost and time to repairs. When purchasing MBI for a Japanese import, confirm that your chosen insurer has experience with your specific make and model.</p>

<h2>Electronics and Diagnostics</h2>
<p>Some Japanese domestic market vehicles use proprietary electronics and communication protocols that differ from international models sold in NZ. This can complicate diagnostics, as not all NZ mechanics have access to the required specialist diagnostic equipment. When making an MBI claim on a Japanese import, ensure the assigned workshop has the capability to properly diagnose your vehicle — MBI providers typically have approved networks that include import specialists.</p>

<h2>Getting MBI for Japanese Imports</h2>
<p>The process for getting MBI on a Japanese import is the same as for locally-sourced used vehicles: disclose the vehicle's NZ compliance date and current NZ odometer reading (not the Japanese export odometer), provide service history where available, and ensure the vehicle passes any required pre-inspection. Most mainstream MBI providers in NZ cover Japanese imports, though premium rates may reflect the higher risk profile of certain makes and models.</p>`,
  },
  {
    slug: 'choose-right-mbi-policy-nz',
    title: 'How to Choose the Right MBI Policy for Your Budget',
    excerpt: 'With multiple MBI providers and policy types in NZ, how do you pick the right one? A practical guide to matching cover to your needs.',
    date: '2026-03-05',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-4.jpg',
    readTime: '6 min read',
    category: 'Money & Pricing',
    content: `<h2>Start With Your Vehicle Profile</h2>
<p>Choosing the right MBI policy starts with an honest assessment of your vehicle. Key questions: How old is the vehicle and what is its mileage? What is your vehicle worth, and does MBI represent reasonable value relative to that? Does the vehicle have any known issues or areas of concern? Is it a Japanese import, EV, diesel, or specialist vehicle that might need tailored coverage?</p>

<p>A $5,000 used hatchback doesn't need the same MBI policy as a $40,000 SUV. Matching coverage level to vehicle value ensures you're not over-insuring (paying more than reasonable relative to the vehicle's worth) or under-insuring (leaving yourself exposed to the very risks you're trying to avoid).</p>

<h2>Assess Your Financial Risk Tolerance</h2>
<p>MBI makes most financial sense for people who couldn't comfortably absorb a $5,000–$10,000 repair bill from savings. If you have robust emergency savings and could replace your vehicle if it needed an uneconomical repair, the strict financial logic of MBI is weaker — though many still purchase it for the peace of mind rather than pure financial calculation.</p>

<p>Your excess choice should reflect your risk tolerance. A higher excess ($500–$1,000) reduces your premium meaningfully but means you absorb the first portion of any claim. A lower excess ($100–$250) provides more complete protection but at higher annual cost. Most NZ motorists find a $250–$500 excess represents a reasonable balance.</p>

<h2>Compare at Least Three Quotes</h2>
<p>The MBI market in New Zealand is not as transparent as general insurance markets. Prices for equivalent cover can vary by 20–40% between providers. Requesting quotes from multiple sources — or using a single broker who can present multiple options — is the most effective way to ensure competitive pricing. Don't accept the first quote presented, particularly if it comes through a dealer at the point of vehicle purchase.</p>

<h2>Read the Component List</h2>
<p>The most important part of any MBI policy is the list of covered components. Vague language like "mechanical and electrical systems" is less informative than a specific schedule listing each covered component. Before signing, confirm that the components you're most concerned about (transmission, ECU, turbo, etc.) are explicitly included. Ask your broker to clarify any ambiguous terms — a reputable provider will answer these questions clearly.</p>`,
  },
  {
    slug: 'what-mbi-actually-covers-nz',
    title: 'What Does MBI Actually Cover? A Plain-English Breakdown',
    excerpt: 'Cut through the jargon and understand exactly what your MBI policy covers — and what it doesn\'t. The definitive NZ guide.',
    date: '2026-02-28',
    author: 'BreakdownInsurance.co.nz',
    image: '/images/hero-5.jpg',
    readTime: '9 min read',
    category: 'Coverage Explained',
    content: `<h2>What MBI Is Designed to Cover</h2>
<p>Mechanical Breakdown Insurance in New Zealand is specifically designed to cover sudden, unexpected mechanical and electrical failures that are not the result of an accident, wear and tear, or deliberate neglect. The policy responds when a part fails in a way that wasn't predictable and wasn't caused by the driver's actions. This is the fundamental principle — "unexpected failure of a covered component."</p>

<h2>Engine Components Typically Covered</h2>
<p>Comprehensive MBI policies in NZ typically cover engine internals including: pistons, rings, and cylinders; crankshaft, camshaft, and bearings; connecting rods; oil pump; cylinder head and associated gaskets; rocker arms and valve train; hydraulic lifters; engine block cracks; and oil seals where their failure causes covered component damage. Note that timing belts are frequently excluded as a scheduled maintenance item, even though their failure can be catastrophic.</p>

<h2>Transmission and Drivetrain Coverage</h2>
<p>Automatic transmission internal components are almost universally covered under comprehensive MBI: valve body, solenoids, clutch packs, torque converter, planetary gears, and transmission seals. Manual gearboxes are covered for synchromesh failure, bearing failure, and internal damage. Differentials, CV joints, driveshafts, and transfer cases on 4WD vehicles are typically included. These are among the highest-value claims, often $5,000–$15,000, making their coverage particularly valuable.</p>

<h2>Electrical System Coverage</h2>
<p>Modern vehicles have increasingly complex electrical systems, and most comprehensive MBI covers: engine management unit (ECU), fuel injection components (injectors, fuel pressure regulators, mass airflow sensors), ABS and traction control modules, anti-theft and immobiliser components, central locking systems, electric window motors, alternators and starter motors, and air conditioning compressors and electrical components.</p>

<h2>What MBI Specifically Does NOT Cover — A Clear List</h2>
<p>To avoid surprise, here is what NZ MBI policies typically exclude explicitly: tyres (any tyre-related failure), brake pads and disc rotors, clutch friction disc and pressure plate, oil, coolant, and all consumables, wiper blades, filters, spark plugs, glow plugs, drive belts (timing belt, accessory belts), bodywork, trim, upholstery, glass and mirrors, exhaust system (including catalytic converter in most policies), wheels and alloys, modifications not disclosed at inception, and any failure attributed to prior damage or neglect.</p>

<p>The practical implication: MBI covers the expensive, unpredictable failures. It does not replace the maintenance of your vehicle. Both are your responsibility — MBI provides a safety net for the unexpected failures that good maintenance cannot fully prevent.</p>`,
  },
];
