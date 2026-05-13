export interface FAQ {
  q: string;
  a: string;
}

export interface LongFormSection {
  heading: string;
  body: string;
}

export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  metaTitle: string;
  metaDescription: string;
  longFormSections: LongFormSection[];
  faqs: FAQ[];
  internalLinks: { text: string; href: string }[];
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'comprehensive',
    title: 'Comprehensive Breakdown Insurance',
    icon: '🛡️',
    description: 'The broadest mechanical breakdown cover available — engine, transmission, electrical and more.',
    metaTitle: 'Comprehensive Breakdown Insurance | Full MBI Cover Explained | BreakdownInsurance.co.nz',
    metaDescription: 'Comprehensive mechanical breakdown insurance covers engine, transmission, electrical, drivetrain and more. Compare comprehensive MBI policies from leading providers.',
    details: 'Comprehensive MBI covers the widest range of mechanical and electrical failures — from engine internals and gearboxes through to ECUs, cooling systems, and air conditioning. When an unexpected component fails outside of manufacturer warranty, your comprehensive policy pays for parts and labour at approved repair facilities nationwide. Most comprehensive policies also include roadside assistance, towing costs, and daily rental car cover.',
    longFormSections: [
      {
        heading: 'What Comprehensive Breakdown Insurance Covers',
        body: 'Comprehensive MBI is the most complete form of mechanical breakdown protection available. A well-structured policy covers the engine and all internal components (pistons, crankshaft, camshaft, connecting rods, oil pump, cylinder head, gaskets and seals), the automatic or manual transmission and gearbox, the cooling system (water pump, thermostat, radiator, hoses), the fuel injection and management system, the braking system (master cylinder, wheel cylinders, calipers, ABS pump — not pads or discs which are wear items), steering components (rack and pinion, power steering pump, column), drive axles, CV joints, propeller shafts, the electrical system including alternator, starter motor, and major wiring, turbocharger and supercharger components, air conditioning compressor, and the engine management unit (ECU) and associated sensors.\n\nBeyond the core mechanical cover, comprehensive policies typically include 24/7 roadside assistance and towing to an approved repairer, a courtesy or rental vehicle during the repair period, and accommodation cover if you break down more than 100km from home. These benefits transform a breakdown from a potential financial catastrophe into a managed inconvenience.',
      },
      {
        heading: 'Who Needs Comprehensive Cover',
        body: 'Comprehensive MBI is the right choice if you rely heavily on your vehicle for work or family life, own a vehicle worth more than $15,000 where a single repair could represent a significant share of the car\'s value, drive a vehicle with complex electronics or a turbocharged engine, or purchased a used car without an active manufacturer warranty.\n\nWith the average vehicle fleet now 15 years old and WoF fail rates at 41%, the majority of Kiwi drivers are operating vehicles with meaningful mechanical risk and no warranty backstop. For those drivers, comprehensive MBI converts the unpredictable cost of mechanical failure into a known, manageable annual premium. Even a single engine or transmission claim can return three to ten years of premium in a single repair event.',
      },
      {
        heading: 'How Much Does Comprehensive MBI Cost',
        body: 'Comprehensive MBI premiums vary based on vehicle age, make and model, current mileage, and the specific cover level selected. As a general guide, annual premiums for comprehensive cover on a 5–10 year old vehicle typically range from $600–$1,200 per year, while a newer or lower-mileage vehicle might attract premiums of $800–$1,500 annually. Single-payment three-year comprehensive policies typically range from $2,000–$4,500.\n\nThe excess you choose significantly affects your premium — selecting a $500 excess rather than a $150 excess can reduce your annual premium by 20–35%. Higher claim limits (some providers offer $10,000–$15,000 per claim) attract higher premiums but provide much stronger protection against catastrophic failures. The best way to identify fair pricing is to compare at least three providers for your specific vehicle — premiums for equivalent cover can vary by 30–40% between providers.',
      },
      {
        heading: 'What Comprehensive MBI Does Not Cover',
        body: 'Even the most comprehensive MBI policy has exclusions. Standard exclusions across all providers include: routine maintenance items (oil, filter, spark plugs, drive belts as a scheduled item), wear and tear items that degrade gradually rather than fail suddenly (tyres, brake pads and discs, clutch friction plate, wiper blades), pre-existing conditions or faults present before the policy was purchased, damage arising from an accident, collision, fire, flood, or theft (covered by car insurance, not MBI), cosmetic issues such as dents, scratches, and interior wear, modifications or aftermarket parts not disclosed when the policy was taken out, and failures resulting from neglect — most commonly, failing to service the vehicle according to the manufacturer\'s schedule.\n\nTiming belts are a particularly important exclusion to check. Many providers exclude timing belt replacement even though timing belt failure can cause catastrophic engine damage. Some providers cover consequential engine damage following an unexpected (not overdue) timing belt failure — always ask this question directly before purchasing.',
      },
      {
        heading: 'How to Compare Comprehensive Policies',
        body: 'Not all comprehensive MBI policies offer the same scope of cover — the label "comprehensive" does not guarantee equivalent protection across providers. When comparing, focus on five key dimensions: the per-claim limit (does the policy pay $5,000 or $15,000 per claim?), the component list (are all major systems explicitly listed, or does the policy use vague language?), the workshop network (can you use any licensed repairer, or are you restricted to an authorised network?), the EV/hybrid position (if you own an EV or hybrid, does the policy cover traction battery components?), and the claims process (is approval required before repairs begin, and how quickly are claims processed?).\n\nProviders including Autosure, AA Mechanical Care\'s Advantage Plus tier, and Provident Insurance offer well-regarded comprehensive policies. NZVF offers multi-year terms up to four years which can provide better value for drivers who want extended protection certainty. Use the comparison table to see how these providers stack up for your specific vehicle.',
      },
    ],
    faqs: [
      { q: 'Does comprehensive MBI cover all mechanical failures?', a: 'Comprehensive MBI covers most sudden, unexpected mechanical and electrical failures of listed components. It does not cover wear and tear, scheduled maintenance items, pre-existing conditions, or accident damage. Always read the component schedule in your specific policy document.' },
      { q: 'Can I use any repair workshop with comprehensive MBI?', a: 'This varies by provider. Some require you to use their authorised repairer network; others allow any licensed mechanic. If workshop flexibility matters to you, confirm this before purchasing — it can be especially relevant in rural areas where approved repairers may be limited.' },
      { q: 'Is comprehensive MBI worth it for an older vehicle?', a: 'For older vehicles, comprehensive MBI becomes both more valuable (higher failure risk) and harder to obtain (some providers restrict cover for vehicles over 15 years or 200,000km). The calculation often favours cover if your vehicle is worth $10,000+ and you could not easily absorb a $5,000–$15,000 repair bill.' },
      { q: 'Does comprehensive MBI include roadside assistance?', a: 'Most comprehensive MBI policies include a roadside assistance benefit, but the scope varies. Some offer full 24/7 nationwide callout; others provide towing-only. Confirm whether roadside assistance is bundled or must be added separately.' },
      { q: 'What happens if I miss a service under comprehensive MBI?', a: 'Missing a scheduled service is the most common reason comprehensive MBI claims are partially or fully declined. Most policies require you to maintain the vehicle according to the manufacturer\'s service schedule. Keep all service receipts — they are your primary evidence if a claim is disputed.' },
      { q: 'Can I transfer my comprehensive MBI when I sell my vehicle?', a: 'Many policies allow transfer to a new owner, which can add value when selling. Check your policy\'s transfer conditions — some charge an administrative fee, and the new owner may need to meet eligibility criteria. A transferable policy can be a genuine selling point for a used vehicle.' },
    ],
    internalLinks: [
      { text: 'Compare all MBI providers', href: '/compare' },
      { text: 'Drivetrain & Transmission Cover', href: '/types/drivetrain' },
      { text: 'Electrical Systems Cover', href: '/types/electrical' },
      { text: 'Best Breakdown Insurance 2026', href: '/breakdown-insurance/best-mechanical-breakdown-insurance-nz' },
      { text: 'How much does MBI cost?', href: '/breakdown-insurance/mechanical-breakdown-insurance-cost-nz' },
      { text: 'MBI exclusions explained', href: '/breakdown-insurance/mechanical-breakdown-insurance-exclusions-nz' },
    ],
  },
  {
    slug: 'drivetrain',
    title: 'Drivetrain & Transmission Cover',
    icon: '⚙️',
    description: 'Targeted cover for the most expensive mechanical repairs — gearbox, driveshafts, and differentials.',
    metaTitle: 'Drivetrain & Transmission Breakdown Cover | MBI for Gearbox Failure | BreakdownInsurance.co.nz',
    metaDescription: 'Drivetrain and transmission breakdown cover protects against gearbox, differential, and driveshaft failures costing $5,000–$15,000+. Compare drivetrain MBI policies.',
    details: 'Drivetrain and transmission failures are among the most expensive vehicle repairs, often exceeding $5,000–$15,000. This targeted breakdown insurance cover protects the transmission (automatic and manual gearboxes), transfer case and 4WD components, front and rear differentials, driveshafts and CV joints, propeller shafts, and torque converters.',
    longFormSections: [
      {
        heading: 'Why Drivetrain Failures Are So Costly',
        body: 'The drivetrain — everything that transfers engine power to the wheels — contains some of the most complex, tightly toleranced, and expensive components in any vehicle. An automatic transmission alone contains hundreds of individual parts: clutch packs, planetary gear sets, valve bodies, solenoids, torque converters, and the hydraulic systems that link them all. When one component fails, the resulting debris often damages surrounding parts, turning a single component failure into a complete rebuild or replacement event.\n\nAutomatic transmission replacements typically cost $4,000–$12,000 for common Japanese imports and domestic vehicles, and $8,000–$20,000+ for European models with specialist transmissions like DSG dual-clutch units or ZF eight-speed automatics. Differentials run $1,500–$5,000 to rebuild, and a failed transfer case in a 4WD can reach $3,000–$7,000. The cumulative cost of drivetrain repairs across a vehicle\'s life can easily exceed the vehicle\'s market value.',
      },
      {
        heading: 'What Drivetrain & Transmission Cover Includes',
        body: 'A drivetrain-specific MBI policy covers the major power transfer components: the automatic or manual gearbox and all internal components, the torque converter (in automatic transmissions), the transfer case and associated seals, gaskets, and sensors in 4WD and AWD vehicles, front and rear differentials including limited-slip differential components, driveshafts (both front and rear), CV joints and boots where the boot failure has caused CV joint damage, propeller shafts and universal joints, and clutch assembly components (pressure plate, flywheel, release bearing) in manual transmission vehicles — though clutch friction plates are typically excluded as a wear item.\n\nMany drivetrain policies also include roadside assistance and towing, since drivetrain failure almost always leaves you immobilised. Some extend to include accommodation costs if you break down far from home.',
      },
      {
        heading: 'Who Needs Drivetrain-Specific Cover',
        body: 'Drivetrain cover is particularly relevant for owners of SUVs and 4WDs, where transfer case and differential components add significantly to the potential repair bill; utes, which often work harder than passenger vehicles and place greater stress on drivetrain components; vehicles with automatic transmissions — the vast majority of used imports — where gearbox failure is both common and expensive; high-mileage vehicles where drivetrain wear accelerates; and older Japanese imports where the odometer reading at the time of compliance may not reflect total vehicle mileage.\n\nFor vehicles where the owner cannot practically afford comprehensive MBI, drivetrain cover offers targeted protection for the most financially dangerous failure category.',
      },
      {
        heading: 'Drivetrain Cover vs Comprehensive MBI',
        body: 'The key question is whether targeted drivetrain cover or full comprehensive MBI better suits your situation. Comprehensive MBI costs more but protects against a broader range of failures — electrical, cooling, steering, and more. Drivetrain cover costs less but leaves you exposed to failures outside the covered components.\n\nFor vehicles where the highest risk is drivetrain-related — older automatics, high-mileage 4WDs, vehicles with known transmission concerns — drivetrain-specific cover can be the pragmatic choice. For newer or more complex vehicles with significant electronics, comprehensive cover better reflects the risk profile.\n\nWhen comparing policies, pay particular attention to how each provider defines "drivetrain" — some policies use broad component lists, while others restrict cover to specific named parts. The difference between a policy that covers "the transmission and all internal components" versus one that lists only "gearbox casing, input shaft, and output shaft" can be significant in a real claim scenario.',
      },
      {
        heading: 'CVT and Dual-Clutch Transmissions: What to Check',
        body: 'CVT (continuously variable transmission) policies are common in Nissan Tiidas, Sylphys, X-Trails, and many Toyota models. CVT replacements typically cost $4,000–$8,000, and not all MBI policies cover CVT-specific components like the variator and drive belt. Ask directly before purchasing.\n\nDual-clutch transmissions (DSG in Volkswagen Group vehicles, PDK in Porsche, DCT in various others) are increasingly common in the used vehicle market and present specific coverage questions. Some providers exclude dual-clutch mechatronic units — which frequently fail and cost $1,500–$3,000 to replace. Confirm that your policy covers the full scope of your transmission type, not just "the gearbox".',
      },
    ],
    faqs: [
      { q: 'Does drivetrain cover include the clutch?', a: 'The clutch pressure plate, flywheel, and release bearing are typically covered. The clutch friction plate (the disc itself) is usually excluded as a wear item. A failed friction plate that damages other clutch components may allow a partial claim — check your specific policy wording.' },
      { q: 'Are CVT transmissions covered?', a: 'Many policies cover CVT transmissions, but some have specific claim limits or exclusions for CVT-specific components like the variator and drive belt. If your vehicle has a CVT, confirm coverage explicitly before purchasing — CVT replacements can be $4,000–$8,000.' },
      { q: 'What if my 4WD transfer case fails?', a: 'Transfer cases are typically covered under drivetrain MBI. Confirm that your policy specifically lists the transfer case and its internal components — not just the gearbox — before purchasing if you own a 4WD or AWD vehicle.' },
      { q: 'Is a CV boot failure covered?', a: 'The CV boot itself is a wear item and typically not covered. However, if a boot has torn and the resulting debris has caused damage to the CV joint, the joint damage may be claimable. Prevention is better here — torn boots caught early are cheap; a failed CV joint is not.' },
      { q: 'How does a drivetrain MBI claim work?', a: 'Contact your insurer before authorising any repairs. A claims assessor will typically review the vehicle and confirm the failure is covered. Once approved, the repairer bills the insurer directly for parts and labour on covered components. You pay your excess.' },
      { q: 'Can I get drivetrain cover for a high-mileage vehicle?', a: 'Yes, though options narrow above 150,000–200,000km. Some providers require a pre-purchase inspection for high-mileage vehicles. Premiums are higher and per-claim limits may be lower, but cover is available from specialist providers for vehicles up to around 200,000km.' },
    ],
    internalLinks: [
      { text: 'Compare all MBI providers', href: '/compare' },
      { text: 'Transmission failure insurance', href: '/breakdown-insurance/transmission-failure-cover-nz' },
      { text: 'Comprehensive Breakdown Insurance', href: '/types/comprehensive' },
      { text: 'Breakdown insurance for older vehicles', href: '/breakdown-insurance/mechanical-breakdown-insurance-older-vehicles-nz' },
      { text: 'Japanese import breakdown insurance', href: '/breakdown-insurance/japanese-import-breakdown-insurance-nz' },
    ],
  },
  {
    slug: 'electrical',
    title: 'Electrical Systems Cover',
    icon: '⚡',
    description: 'Protection against modern vehicle electrical failures — sensors, ECUs, central locking, and more.',
    metaTitle: 'Electrical Systems Breakdown Cover | ECU & Sensor MBI | BreakdownInsurance.co.nz',
    metaDescription: 'Electrical systems breakdown cover protects against ECU, sensor, ABS module, and wiring failures. Modern vehicles are computers — compare electrical MBI policies.',
    details: 'Modern vehicles are packed with electronic systems that can fail unexpectedly and expensively. Electrical systems MBI covers the engine management unit (ECU), fuel injection sensors, ABS control modules, airbag controllers, central locking, electric window motors, alternators and starters, power steering modules, and electronic throttle controls.',
    longFormSections: [
      {
        heading: 'Why Electrical Cover Matters in Modern Vehicles',
        body: 'A modern vehicle contains over 50 electronic control units (ECUs), hundreds of sensors, and kilometres of wiring. These systems manage everything from engine timing and fuel injection through to braking, stability control, airbags, and climate control. When they fail — and they do fail, particularly in vehicles over eight years old — the diagnosis and repair costs can be substantial before a single replacement part is fitted.\n\nElectrical fault diagnosis alone commonly costs $200–$600 at a dealership or specialist diagnostic workshop. Replacing a failed ECU can run from $800 for a reconditioned unit to $4,000+ for a new dealer-supplied module on European or luxury vehicles. Sensor failures — oxygen sensors, crankshaft position sensors, ABS wheel speed sensors — typically run $300–$1,200 each. With the fleet average now 15 years old, electrical system reliability is a real and growing risk. Wiring harness corrosion, connector failure, and degraded insulation are increasingly common in vehicles of this age.',
      },
      {
        heading: 'What Electrical Systems Cover Includes',
        body: 'A comprehensive electrical systems MBI policy covers: the engine management unit (ECU/PCM) and all associated sensors and wiring, the fuel injection system including injectors, fuel pressure regulator, and fuel pump (where electrically controlled), ABS control module and associated wheel speed sensors, airbag system controllers (note: actual airbag deployment from an accident is not covered — this is MBI, not car insurance), central locking actuators, electric window motors and regulators, electric mirror actuators, heated seat elements, the alternator and voltage regulator, the starter motor, the power steering control module in electric power steering systems, electronic throttle body and pedal position sensors, cruise control modules, climate control electronics, and immobiliser and key programming modules.\n\nElectrical cover typically does not include the vehicle battery (a consumable), bulbs and fuses (maintenance items), or entertainment system failures where the core vehicle functions are unaffected.',
      },
      {
        heading: 'Japanese Imports and Electrical Complexity',
        body: 'Electrical systems cover is particularly valuable for Japanese domestic market (JDM) vehicles. Japanese manufacturers — Toyota, Nissan, Honda, Mazda, Subaru, and Mitsubishi — often use proprietary electronics and communication protocols that are incompatible with generic diagnostic tools. Diagnosing a fault in a Japanese import can require specialist scan tools and knowledge that many general repair workshops do not have.\n\nThis specialist diagnosis requirement drives up labour costs considerably. A fault that would take an hour to diagnose on a vehicle with widely-supported OBD-II protocols may take three to four hours on a JDM import with a manufacturer-specific system. When a claim arises, some MBI providers include diagnostic costs within the claim; others require you to pay diagnostic costs before the claim is assessed. Confirm this distinction when comparing providers.',
      },
      {
        heading: 'Standalone Electrical Cover vs Comprehensive MBI',
        body: 'Electrical systems cover can be purchased as a standalone policy or as part of comprehensive MBI. Standalone electrical cover is narrower but cheaper — appropriate for vehicles where the main financial risk is electronics rather than mechanical components. Comprehensive MBI provides broader protection at a higher premium.\n\nFor vehicles aged 8–15 years where mechanical components remain reasonably reliable but electronics are starting to show age, standalone electrical cover can be a cost-effective choice. For vehicles where both mechanical and electrical risks are meaningful, comprehensive MBI typically provides better overall value.\n\nWhen comparing electrical MBI policies, look specifically for explicit coverage of: the ECU, ABS modules, and power steering controllers. Vague policy language like "electrical components" may or may not include these high-cost items — ask directly before purchasing.',
      },
      {
        heading: 'Cost of Electrical MBI and What to Expect',
        body: 'Standalone electrical systems MBI typically costs less than comprehensive cover — annual premiums for electrical-focused policies often range from $300–$700 for vehicles 5–12 years old, depending on the make and model. Japanese imports with well-supported electronics are generally at the lower end; European vehicles with complex proprietary systems attract higher premiums.\n\nWhen assessing value, consider the potential cost of a single ECU replacement ($800–$4,000+), an ABS module ($400–$1,500), or a power steering controller ($600–$2,000). Any one of these claims would typically return two to four years of electrical MBI premium. The broader question is whether you could absorb a $2,000–$4,000 electrical repair bill without financial stress — if not, electrical MBI is worth serious consideration.',
      },
    ],
    faqs: [
      { q: 'Is the car battery covered under electrical MBI?', a: 'No. The 12-volt vehicle battery is a consumable item with a finite lifespan and is universally excluded from MBI policies. EV traction battery packs are a different matter — see our EV & Hybrid Battery Cover page.' },
      { q: 'Are diagnostic costs covered if a fault cannot be reproduced?', a: 'This varies significantly between providers. Some MBI policies include diagnostic costs within the claim when a fault is confirmed covered. Others require the fault to be confirmed before the claim is assessed, leaving diagnosis costs with the owner. Ask this question directly before purchasing.' },
      { q: 'Does electrical MBI cover my infotainment system?', a: 'Infotainment system failures are often excluded unless they affect vehicle operation. A failed radio or touchscreen typically falls outside MBI scope. Navigation system failures that affect routing may or may not be covered — check your policy schedule.' },
      { q: 'What about wiring harness failures?', a: 'Many policies cover wiring harness failures where the failure is sudden and unexpected rather than gradual corrosion. In older vehicles, moisture ingress and corrosion-related wiring failures can be excluded as wear and tear — an important question for any vehicle over 10 years old.' },
      { q: 'Is the alternator covered?', a: 'Yes, the alternator is a standard inclusion in electrical systems MBI. Starter motors are also typically covered. Both components have a normal service life but can fail unexpectedly — alternator replacement typically costs $400–$900.' },
      { q: 'My ABS light is on — can I make a claim?', a: 'Contact your insurer before authorising any diagnostic work or repairs. An ABS warning light could indicate a covered ABS module failure or a cheaper wheel speed sensor issue. Your insurer will typically direct you to an approved repairer for diagnosis before the claim is assessed.' },
    ],
    internalLinks: [
      { text: 'Compare all MBI providers', href: '/compare' },
      { text: 'Comprehensive Breakdown Insurance', href: '/types/comprehensive' },
      { text: 'Japanese import breakdown insurance', href: '/breakdown-insurance/japanese-import-breakdown-insurance-nz' },
      { text: 'Engine breakdown cover', href: '/breakdown-insurance/engine-breakdown-cover-nz' },
      { text: 'MBI exclusions explained', href: '/breakdown-insurance/mechanical-breakdown-insurance-exclusions-nz' },
    ],
  },
  {
    slug: 'ev-hybrid',
    title: 'EV & Hybrid Battery Cover',
    icon: '🔋',
    description: 'Specialised mechanical breakdown cover for electric vehicle traction batteries and hybrid drive systems.',
    metaTitle: 'EV & Hybrid Battery Breakdown Cover | Electric Vehicle MBI | BreakdownInsurance.co.nz',
    metaDescription: 'EV and hybrid battery breakdown cover protects against traction battery failure costing $15,000–$30,000+. Compare specialist EV MBI policies. 101,000 BEVs on the road.',
    details: 'As the EV and hybrid fleet grows rapidly, so does the need for specialised breakdown protection. EV and hybrid battery MBI covers traction battery pack replacement or repair, battery management systems, electric motor and inverter components, regenerative braking systems, on-board charging systems, hybrid drive controllers, and thermal management systems.',
    longFormSections: [
      {
        heading: 'The Battery Risk Every EV Owner Faces',
        body: 'The traction battery pack is the heart — and the most expensive single component — of any electric or plug-in hybrid vehicle. Unlike a conventional engine, which fails gradually or through a clearly identifiable fault, battery degradation is more complex: capacity loss is normal and expected, but sudden, unexpected failure of a battery management system, individual cell module, or thermal management component can render a vehicle undriveable and require a full or partial pack replacement.\n\nReplacement costs for traction battery packs are significant. A Nissan LEAF battery replacement currently costs $8,000–$18,000 depending on whether new or reconditioned cells are used. A Tesla Model 3 battery pack replacement is $15,000–$25,000. For Mitsubishi Outlander PHEV owners, a traction battery pack replacement runs $8,000–$15,000. These are costs that can make an otherwise functional vehicle economically unviable without insurance backing.\n\nThe market now has 101,000 battery electric vehicles (BEVs) and 429,000 petrol hybrids — a combined electrified fleet of over 500,000 vehicles. Many are now out of their original manufacturer battery warranty, creating significant uninsured risk exposure for their owners.',
      },
      {
        heading: 'What Standard MBI Policies Do and Do Not Cover for EVs',
        body: 'Standard mechanical breakdown insurance policies were designed for internal combustion engine vehicles, and many either explicitly exclude EV traction batteries or use vague language that effectively excludes them.\n\nA standard MBI policy may cover the electric motor, the 12-volt auxiliary battery system, onboard charging electronics, and regenerative braking system controllers. What it often does NOT cover is the high-voltage traction battery pack itself — the most expensive component in the vehicle. Some policies use phrases like "electrical components as listed" and simply do not list the traction battery. Others exclude battery packs specifically on the basis that capacity degradation makes the failure type ambiguous.\n\nBefore purchasing any MBI policy for an EV or PHEV, ask the insurer directly: "Does this policy cover the high-voltage traction battery pack, and if so, what minimum remaining capacity triggers a claim?" This single question will tell you whether the policy provides genuine EV protection.',
      },
      {
        heading: 'What Specialist EV Breakdown Cover Includes',
        body: 'A genuine EV-specialist MBI policy covers the traction battery pack (full or partial replacement where a battery module has failed, not gradual capacity loss), the battery management system (BMS) and associated control electronics, high-voltage cabling between the battery, inverter, and motor, the drive motor(s) and motor controllers/inverters, the onboard charger (OBC), the DC-DC converter, the thermal management system for the battery pack, regenerative braking system controllers and associated components, and in PHEV vehicles, the hybrid management controller that coordinates between the combustion engine and electric drivetrain.',
      },
      {
        heading: 'PHEV Considerations: More Complex, More Risk',
        body: 'Plug-in hybrid vehicles present a more complex risk profile than pure BEVs because they combine two complete powertrains. The Mitsubishi Outlander PHEV — the most common PHEV on the road — has both a conventional petrol engine (with all its associated mechanical failure risks) and an electric drivetrain (with its battery and motor failure risks). MBI for PHEVs needs to cover both.\n\nMany PHEV owners make the mistake of purchasing MBI that covers only the combustion engine components, leaving the electric drivetrain unprotected. For full PHEV protection, ensure your policy explicitly covers both the combustion engine components (as per standard MBI) and the EV-specific components listed above.\n\nFor petrol-electric parallel hybrids that cannot be plugged in (such as earlier Toyota Prius models and Honda Jazz Hybrid), the traction battery risk is lower in absolute dollar terms ($2,000–$6,000 for many hybrid batteries) but still meaningful and outside the scope of most standard MBI policies.',
      },
      {
        heading: 'EV Breakdown Insurance Cost and Value',
        body: 'Specialist EV MBI premiums reflect the higher potential claim values involved. Annual premiums for comprehensive EV MBI typically range from $800–$1,800 for common BEVs, depending on the battery capacity, vehicle age, and mileage. PHEV policies that cover both powertrains are typically priced $900–$2,000 annually.\n\nThe value case is straightforward. A traction battery replacement at $15,000 represents 8–18 years of EV MBI premiums at mid-range pricing. Most EV-specific battery warranty periods are 8 years or 160,000km — once a vehicle exceeds these thresholds, the financial exposure is entirely unprotected without specialist MBI. Given that many used Nissan LEAFs and early Teslas are now approaching or past this threshold, EV MBI is one of the highest-value insurance products currently available for this vehicle segment.',
      },
    ],
    faqs: [
      { q: 'Does standard car insurance cover EV battery failure?', a: 'No. Standard car insurance covers accidental damage, theft, and liability. It does not cover mechanical or electrical failure of any component — including the traction battery. MBI is a separate product that specifically addresses mechanical and electrical failure.' },
      { q: 'What is a minimum capacity threshold for a battery claim?', a: 'Some EV MBI policies require the traction battery to have degraded below a specified capacity threshold (e.g. 70% or 75% of original capacity) before a claim is accepted. A policy requiring 50% degradation before payout provides almost no useful protection — most batteries are replaced long before that point.' },
      { q: 'Can I get EV MBI for an older Nissan LEAF?', a: 'Yes, though eligibility conditions apply. Most providers set age and mileage limits for EV MBI eligibility. For older LEAFs with 24kWh packs (pre-2018), the available capacity may already be significantly degraded, which affects insurability. A pre-purchase inspection may be required.' },
      { q: 'Is the 12-volt auxiliary battery covered?', a: 'The 12-volt auxiliary battery (used for accessories and starting computers) is a consumable item and is not covered under MBI. Only the high-voltage traction battery pack and its associated management systems are within the scope of EV MBI.' },
      { q: 'Does EV MBI cover charging infrastructure damage?', a: 'No. MBI covers failures of vehicle components — not damage to external charging equipment. If a charging cable or public charger causes damage to your vehicle\'s charging port, that may be a claim under your vehicle\'s comprehensive car insurance rather than MBI.' },
      { q: 'My hybrid battery warning light is on — should I claim?', a: 'Contact your MBI insurer before authorising any diagnostic work or repairs. A battery warning light could indicate a covered failure, a sensor fault, or a software issue. Unauthorised repairs — carried out before the insurer has approved the claim — are commonly excluded.' },
    ],
    internalLinks: [
      { text: 'Compare all MBI providers', href: '/compare' },
      { text: 'EV breakdown insurance guide', href: '/breakdown-insurance/ev-mechanical-breakdown-insurance-nz' },
      { text: 'Comprehensive Breakdown Insurance', href: '/types/comprehensive' },
      { text: 'Electrical Systems Cover', href: '/types/electrical' },
      { text: 'Best breakdown insurance 2026', href: '/breakdown-insurance/best-mechanical-breakdown-insurance-nz' },
    ],
  },
  {
    slug: 'roadside-assistance',
    title: 'Roadside Assistance',
    icon: '🚗',
    description: '24/7 emergency roadside help — towing, battery, tyres, lockout and more, nationwide.',
    metaTitle: 'Roadside Assistance Breakdown Cover | 24/7 Roadside Help | BreakdownInsurance.co.nz',
    metaDescription: 'Compare roadside assistance and breakdown cover. Towing, battery jumpstart, fuel, lockout, and accommodation cover. Standalone vs MBI-bundled roadside assistance compared.',
    details: 'Roadside assistance as part of breakdown insurance means you\'re never truly stranded. This benefit typically includes 24/7 emergency callout nationwide, towing to the nearest approved repairer, on-site help for flat tyres, battery jumpstarts, fuel delivery, vehicle lockout assistance, and accommodation cover if stranded far from home.',
    longFormSections: [
      {
        heading: 'What Roadside Assistance Covers',
        body: 'A comprehensive roadside assistance benefit covers the full range of roadside emergencies that leave drivers unable to continue their journey. The standard suite of services includes: 24/7 emergency dispatch to your location anywhere on the road network, towing to the nearest approved repair workshop if the vehicle cannot be repaired at the roadside, battery jumpstart or temporary battery connection if the 12-volt battery has failed, tyre change service if you have a serviceable spare (or towing if you don\'t), emergency fuel delivery if you\'ve run out of fuel (you typically pay for the fuel itself), lockout assistance if you\'ve locked your keys inside the vehicle, and minor roadside repairs where the fault can be safely corrected without a workshop.\n\nHigher-tier policies extend this to: accommodation cover if you break down more than 100km from home (typically $100–$200 per night, up to a specified maximum), return travel expenses to get you home or to your destination, and vehicle recovery from remote locations including off-road situations (where the policy specifically includes this).\n\nFor EV drivers, some roadside assistance policies now include emergency charging if you run out of charge — either on-site via a portable charger or towing to the nearest charging point. This is worth confirming explicitly if you drive an EV.',
      },
      {
        heading: 'Standalone Roadside Assistance vs MBI-Bundled',
        body: 'Roadside assistance is available as a standalone product or bundled with a comprehensive MBI policy. Standalone roadside assistance (such as AA Roadservice or standalone roadside products from insurers) covers the immediate emergency — getting you to a repairer. It does not cover the repair itself. If your engine seizes on the motorway, standalone roadside gets you towed to a workshop; the subsequent $8,000 repair bill is entirely your problem.\n\nMBI-bundled roadside assistance covers the immediate emergency and, if the underlying mechanical failure is a covered MBI event, the repair as well. This is the fundamental advantage of choosing an MBI policy that includes roadside over maintaining separate roadside membership.\n\nThe cost difference is often smaller than drivers expect. A standalone AA roadside membership costs $130–$200 per year. An MBI policy with bundled roadside assistance typically costs only marginally more than MBI without roadside. For most drivers, the bundled option represents better value.',
      },
      {
        heading: 'Roadside Assist on Remote Routes',
        body: 'The road network includes significant stretches of remote highway where mobile coverage is patchy and approved repairers may be hours away. The Haast Pass, Milford Road, the Desert Road, and many South Island routes can leave drivers genuinely stranded if a breakdown occurs without roadside support.\n\nFor drivers who regularly travel remote routes — or who live in rural areas far from major repair workshops — roadside assistance is not a convenience product but a genuine safety net. The accommodation benefit becomes particularly relevant here: being towed to a workshop at 6pm on a Friday in a remote area often means waiting until Monday for repairs. A policy that covers accommodation costs ($150–$200/night) for the duration of the repair can save hundreds of dollars in unexpected lodging costs.\n\nConfirm your policy\'s geographic scope: some roadside assistance products restrict coverage to "within 5km of a sealed road" or have exclusions for off-road situations. If your vehicle regularly goes off-road, check that your policy explicitly covers recovery from off-road situations.',
      },
      {
        heading: 'Response Times and Workshop Networks',
        body: 'Roadside assistance quality is ultimately measured by how quickly help arrives and what happens when you reach the repairer. Response time commitments vary between providers — most aim for 45–60 minutes in urban areas and 90–120 minutes in rural areas, though actual response times depend heavily on demand and provider network density.\n\nThe workshop network matters enormously. Some MBI providers require you to use their authorised repairer network — a significant constraint if you break down in an unfamiliar area or if the nearest authorised repairer is 50km away. Others allow any licensed mechanic to perform covered repairs, giving you flexibility in an emergency. When comparing providers, ask directly: "If I break down on my regular routes, what approved repairers are available, and what happens if I\'m towed to a non-approved workshop?"',
      },
      {
        heading: 'Roadside Assistance for EVs and Hybrids',
        body: 'Electric vehicles present unique roadside assistance challenges. Running out of charge is a scenario not covered by traditional roadside models — towing a BEV long distances requires a flatbed (not a tow bar), and improvised charging solutions are limited.\n\nSpecialist EV roadside assistance services now exist that include: portable fast-charging units (providing enough charge to reach the nearest charging point), flatbed towing with EV-safe procedures (to avoid damage to the battery and regenerative braking system), and knowledge of the nearest compatible charging infrastructure. If you own a BEV, confirm whether your roadside assistance provider has EV-specific protocols and equipment, or whether they simply treat your EV like any other vehicle.',
      },
    ],
    faqs: [
      { q: 'Is roadside assistance the same as breakdown insurance?', a: 'No. Roadside assistance gets your vehicle to a repairer — it does not cover the repair itself. Breakdown insurance (MBI) covers the cost of repairing or replacing failed mechanical components. Many MBI policies include roadside assistance as a bundled benefit, which is the most comprehensive option.' },
      { q: 'Does my car insurance include roadside assistance?', a: 'Some comprehensive car insurance policies include a basic roadside benefit, but the scope is usually limited. Check your car insurance policy document — most cover towing to a repairer but not the broader suite of services (fuel, lockout, accommodation) offered by dedicated roadside products.' },
      { q: 'What happens if I break down somewhere without mobile coverage?', a: 'Most roadside providers have a process for situations where a call cannot be made immediately — a stopped vehicle with hazard lights on will typically be reported by passing drivers or road patrols. In truly remote areas, carry an emergency contact plan and consider a PLB (personal locator beacon).' },
      { q: 'Is towing to any workshop covered, or only approved workshops?', a: 'This depends on your policy. Some providers tow to the nearest safe location; others require towing to an approved repairer in their network. If workshop flexibility matters to you, confirm this condition before purchasing.' },
      { q: 'How many callouts am I entitled to per year?', a: 'Most roadside assistance policies allow unlimited callouts per year, but some budget products cap annual callouts at two or three. Read the product disclosure carefully if value is a priority — unlimited callouts are standard among reputable providers.' },
      { q: 'Can I get roadside assistance without MBI?', a: 'Yes. Standalone roadside assistance is available from providers including the AA. However, it will not cover the cost of any mechanical repairs — only the immediate emergency. MBI with bundled roadside provides more complete protection.' },
    ],
    internalLinks: [
      { text: 'Compare all MBI providers', href: '/compare' },
      { text: 'Roadside assistance breakdown cover', href: '/breakdown-insurance/roadside-assistance-breakdown-insurance-nz' },
      { text: 'Comprehensive Breakdown Insurance', href: '/types/comprehensive' },
      { text: 'EV & Hybrid Battery Cover', href: '/types/ev-hybrid' },
      { text: 'Breakdown insurance for older vehicles', href: '/breakdown-insurance/mechanical-breakdown-insurance-older-vehicles-nz' },
    ],
  },
  {
    slug: 'extended-warranty',
    title: 'Extended Warranty',
    icon: '📋',
    description: 'Manufacturer-style protection beyond the standard warranty period — ideal for used car buyers.',
    metaTitle: 'Extended Warranty vs Breakdown Insurance | Used Car Warranty | BreakdownInsurance.co.nz',
    metaDescription: 'Extended warranty vs mechanical breakdown insurance for used cars. Understand the differences in regulation, cover scope, flexibility, and which product suits your situation.',
    details: 'An extended warranty functions similarly to a manufacturer warranty but is provided by an independent insurer. This cover is typically sold through car dealers at the point of purchase for vehicles exiting factory warranty. Extended warranties cover most mechanical and electrical components, excluding wear items like tyres, brakes, and oil.',
    longFormSections: [
      {
        heading: 'Extended Warranty and MBI: The Core Difference',
        body: 'The terms "extended warranty" and "mechanical breakdown insurance" are often used interchangeably in the used car market — but they describe different products with different regulatory frameworks, different flexibility, and different protections for the purchaser.\n\nA manufacturer warranty is provided by the vehicle manufacturer and covers defects in materials and workmanship for a fixed period — typically 3 years or 100,000km for new vehicles. Once this warranty expires, you are on your own unless you purchase additional cover.\n\nAn extended warranty (also called a used car warranty or vehicle protection plan) is sold by a dealer or specialist warranty company. It mimics manufacturer warranty protection but is provided commercially, typically structured as a service contract rather than an insurance product — an important distinction that affects your legal rights if a dispute arises.\n\nMechanical Breakdown Insurance (MBI) is a regulated insurance product underwritten by a licensed insurer. It covers the same type of events (unexpected mechanical and electrical failure) but carries stronger consumer protections, greater flexibility, and can be purchased at any point — not just at the dealer.',
      },
      {
        heading: 'How Extended Warranties Are Sold and What to Watch For',
        body: 'Extended warranties are primarily sold through car dealers at the point of vehicle purchase — often presented as a final item in the finance office after you\'ve already committed to buying the vehicle. This sales context creates pressure to accept the offered product without comparison shopping, and dealer margins on extended warranty products are typically high (20–40% of the product cost).\n\nCommon extended warranty structures include: basic drivetrain warranties (covering gearbox, engine internals, and differential only), "comprehensive" dealer warranties (broader component lists but often with many exclusions in the fine print), and finance-linked warranties (tied to a specific finance product and sometimes non-cancellable).\n\nKey things to check in any extended warranty offer: the specific component list, whether any workshop can perform repairs or only dealer-affiliated workshops, the claim process and who authorises repairs, whether the warranty is cancellable with a pro-rata refund if you sell the vehicle, and how disputes are resolved.',
      },
      {
        heading: 'How MBI Is Regulated and Why It Matters',
        body: 'Mechanical Breakdown Insurance is a licensed insurance product regulated by the Reserve Bank of New Zealand (RBNZ) and the Financial Markets Authority (FMA). Providers must hold an insurance licence, maintain specified solvency ratios, handle claims in accordance with the Insurance Law Reform Act, and adhere to the Insurance Council of New Zealand\'s (ICNZ) Fair Insurance Code.\n\nThis regulatory framework gives MBI policyholders meaningful protections. If a claim is declined unfairly or a dispute arises, you have access to the Insurance and Financial Services Ombudsman (IFSO) — a free, independent dispute resolution service. Extended warranty purchasers typically have no equivalent pathway; disputes are governed by the Consumer Guarantees Act, which provides baseline protections but no specialist resolution scheme.\n\nIn practice, this means that when a significant mechanical failure occurs — the situation where the cover is most needed — MBI policyholders have stronger tools to ensure their claim is paid fairly.',
      },
      {
        heading: 'When to Choose an Extended Warranty vs MBI',
        body: 'Extended warranty is the more natural choice when buying a vehicle from a franchised dealer, where the warranty product is tied to the authorised service network and the vehicle is relatively new (1–4 years old) with few existing issues. In this scenario, the dealer warranty may be convenient and priced competitively — but comparison shopping with independent MBI providers before signing is always worthwhile.\n\nIndependent MBI is the better choice in most other situations: purchasing from a private seller, purchasing from a non-franchised used car dealer where the warranty product lacks independent regulation, owning a vehicle for more than a year after purchase (when dealer warranties have typically expired), wanting cover that follows the vehicle regardless of which workshop performs repairs, and seeking cover with clearer dispute resolution rights.\n\nFor most used vehicle buyers, independent MBI from a regulated insurer provides more transparent terms, stronger legal protection, and broader workshop flexibility than dealer-sourced extended warranty products at comparable price points.',
      },
      {
        heading: 'What Extended Warranty and MBI Both Cover',
        body: 'Despite their structural differences, extended warranties and MBI policies share a common coverage framework. Both are designed to cover: sudden and unexpected failure of covered mechanical and electrical components, parts and labour costs at authorised repair facilities, and major powertrain components including the engine, transmission, and drivetrain in most policy types.\n\nBoth also share common exclusions: routine maintenance (oil, filters, belts as scheduled items), wear items (tyres, brake pads, clutch friction plate), pre-existing conditions, cosmetic damage, and failures resulting from accident, neglect, or undisclosed modifications.\n\nThe differences lie in scope, flexibility, regulatory protection, and what happens when a dispute arises — not in the fundamental principle of what events trigger a claim. Whether you ultimately choose an extended warranty or MBI, read the component list and exclusions carefully, confirm the workshop network, and understand the claims process before signing.',
      },
    ],
    faqs: [
      { q: 'Is an extended warranty the same as MBI?', a: 'Not legally. An extended warranty is typically a service contract governed by the Consumer Guarantees Act. MBI is a regulated insurance product governed by the Insurance Law Reform Act and overseen by the RBNZ and FMA. MBI gives you access to the IFSO for dispute resolution; an extended warranty generally does not.' },
      { q: 'Can I buy MBI after purchasing a vehicle?', a: 'Yes. Unlike most dealer extended warranties (which must be purchased at the point of sale), MBI can be purchased at any point during vehicle ownership, provided the vehicle meets age and mileage eligibility criteria and no pre-existing conditions exclude the coverage you need.' },
      { q: 'What happens to my extended warranty if I sell the vehicle?', a: 'Many extended warranties are transferable to a new owner, which can add resale value. Check whether your warranty allows transfer, whether there is a transfer fee, and whether the new owner must meet any eligibility criteria. MBI policies also commonly allow transfer.' },
      { q: 'Is dealer MBI the same as independent MBI?', a: 'Dealer MBI is the same regulatory product as independently purchased MBI — both are regulated insurance. However, dealer-presented MBI products may have different scope, claim limits, or workshop restrictions. Comparing the dealer\'s MBI offer with independent alternatives before purchasing is worthwhile.' },
      { q: 'Can I cancel my extended warranty for a refund?', a: 'This depends on the specific product. Many extended warranties offer a pro-rata refund if cancelled during the policy term, but some finance-linked products are non-cancellable. Check the cancellation terms in the product disclosure statement before purchasing.' },
      { q: 'My dealer warranty just expired — what should I do?', a: 'If your dealer warranty has expired, independent MBI is the most straightforward replacement. Provided your vehicle meets age and mileage eligibility, most MBI providers can offer cover immediately. A pre-purchase vehicle inspection may be required for older or higher-mileage vehicles.' },
    ],
    internalLinks: [
      { text: 'Compare all MBI providers', href: '/compare' },
      { text: 'Breakdown insurance vs extended warranty', href: '/breakdown-insurance/mechanical-breakdown-insurance-vs-warranty-nz' },
      { text: 'Dealer MBI vs independent MBI', href: '/breakdown-insurance/dealer-mbi-vs-independent-mbi-nz' },
      { text: 'Breakdown insurance for used cars', href: '/breakdown-insurance/mechanical-breakdown-insurance-used-cars-nz' },
      { text: 'Comprehensive Breakdown Insurance', href: '/types/comprehensive' },
      { text: 'MBI benefits explained', href: '/breakdown-insurance/mbi-benefits-nz' },
    ],
  },
];
