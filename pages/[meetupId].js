import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetailsPage(props) {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: { meetupId: "m1" },
      },
    ],
  };
}

export default MeetupDetailsPage;
