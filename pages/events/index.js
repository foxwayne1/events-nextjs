import { Fragment } from 'react'
import Head from 'next/head'
import { getAllEvents } from '../../helpers/api-util'
import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'

const AllEventsPage = props => {
  const router = useRouter()
  const { events } = props

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Events for all' />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  }
}

export default AllEventsPage
