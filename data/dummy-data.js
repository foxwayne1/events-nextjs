const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'North Durham Networking',
    description:
      'North Durham Networking is hosting a new business networking event and we want to see you there!.',
    location:
      'Chester-le-Street Golf Club Chester-le-Street Golf Club LUMLEY PARK CHESTER-LE-STREET DH3 4NS',
    date: '2023-03-08',
    image: 'images/north-durham-networking.avif',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Newcastle Service Jam 2023',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location:
      'A 48h storm of post-its, rapid research and prototypes to solve real world problems. The Service Jam is 2 days, in-person &amp; open to anyone.',
    date: '2023-03-22',
    image: 'images/newcastle-service-jam.avif',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Sunderland Careers Fair',
    description:
      'Looking for a new Career? Looking for your next Hire? The UK Careers Fair returns to Sunderland on Tuesday 18th April.',
    location: 'Grand Hotel Sunderland Queens Parade Sunderland SR6 8DB',
    date: '2023-04-18',
    image: 'images/sunderland.avif',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'North East Expo - Spring 2023',
    description:
      'The North East Expo has become the regions largest one day business event and attracts over 1200 delegates from every kind of business sect.',
    location:
      'Newcastle Falcons Newcastle Falcons, Brunton Road Kingston Park Newcastle Upon Tyne NE13 8AF',
    date: '2023-04-27',
    image: 'images/north-east-expo.avif',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'The Marketing Meetup IRL: Newcastle',
    description:
      "The Newcastle Marketing Meetup is an informal, friendly place to meet, learn, and share knowledge with one another. Come in 'listen' mode",
    location:
      'Tuspark Newcastle Eagle Lab Maybrook House Grainger St Newcastle NE1 5JE',
    date: '2023-03-07',
    image: 'images/marketing-northeast.avif',
    isFeatured: true,
  },
  {
    id: 'e6',
    title: 'Rise and Design - Design for All',
    description:
      "We're all different, so maybe how things are designed needs to take account of this.",
    location:
      'Northern Design Centre Abbots Hill, Baltic Business Quarter Baltic Business Quarter Gateshead NE8 3DF',
    date: '2023-03-10',
    image: 'images/marketing-northeast.avif',
    isFeatured: true,
  },
]

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(event => event.isFeatured)
}

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter

  let filteredEvents = DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  return filteredEvents
}

export function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id)
}
