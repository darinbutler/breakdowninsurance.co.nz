export interface Provider {
  name: string;
  logo: string;
  rating: number;
  price: string;
  features: string[];
  pros: string;
  cons: string;
  bestFor: string;
}

export const providers: Provider[] = [
  {
    name: 'AutoSure',
    logo: '🔵',
    rating: 4.6,
    price: '$$',
    features: ['Comprehensive MBI', 'Roadside assist', 'EV cover available', '24/7 claims', 'Nationwide workshops'],
    pros: 'NZ\'s most established MBI specialist, strong dealer network, reliable claims processing',
    cons: 'Premiums can be higher for older or high-mileage vehicles',
    bestFor: 'Used vehicles purchased through NZ dealerships',
  },
  {
    name: 'Provident Insurance',
    logo: '🟢',
    rating: 4.5,
    price: '$$',
    features: ['Full mechanical cover', 'Roadside assistance', 'Rental car benefit', 'GAP insurance bundle', 'Accommodation cover'],
    pros: 'Comprehensive bundled products, popular with dealers, good customer service',
    cons: 'Primarily dealer-sold, harder to access directly as a consumer',
    bestFor: 'New car buyers wanting comprehensive protection packages',
  },
  {
    name: 'AA Mechanical Care',
    logo: '🟡',
    rating: 4.4,
    price: '$$',
    features: ['Engine & transmission', 'AA roadside assist', 'Nationwide AA agents', 'Online claims portal', 'Flexible excess'],
    pros: 'Trusted AA brand, excellent roadside network, easy claims process',
    cons: 'Cover scope narrower than specialist providers',
    bestFor: 'AA members wanting integrated vehicle protection',
  },
  {
    name: 'Protecta Insurance',
    logo: '🔴',
    rating: 4.3,
    price: '$',
    features: ['Engine cover', 'Electrical cover', 'Towing costs', 'Dealer warranty', 'Flexible terms'],
    pros: 'Competitive pricing, flexible policy terms, straightforward claims',
    cons: 'Less well-known brand, fewer add-on options',
    bestFor: 'Budget-conscious vehicle owners wanting essential cover',
  },
  {
    name: 'Lumley Vehicle Assist',
    logo: '🔷',
    rating: 4.2,
    price: '$',
    features: ['Mechanical & electrical', 'Towing cover', 'Labour & parts', 'Flexible excess options', 'Used vehicle focus'],
    pros: 'Good value for older vehicles, straightforward policy terms',
    cons: 'Limited EV/hybrid cover, fewer premium add-ons',
    bestFor: 'Owners of older used vehicles seeking affordable basic cover',
  },
  {
    name: 'Cover4You MBI',
    logo: '🟠',
    rating: 4.8,
    price: '$$',
    features: ['Full MBI spectrum', 'EV & hybrid battery', 'Roadside + accommodation', 'Independent broker advice', '24hr quote response'],
    pros: 'Independent advice, access to multiple providers, best-fit matching for your vehicle',
    cons: 'Broker model means initial quote takes up to 24 hours',
    bestFor: 'Anyone wanting independent expert advice to find the best MBI policy',
  },
];
