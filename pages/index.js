import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "Some address 6, 12345 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://cafesydney.com/cms_uploads/images/18_cafe_sydney_310315_001338.jpg",
    address: "Some address 7, 12345 Some City",
    description: "This is another",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image: "https://www.digital.brussels/wp-content/uploads/2018/06/Meetup.jpg",
    address: "Some address 8, 12345 Some City",
    description: "The last one",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
