import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return <div>{params.eventId}</div>;
};

export default EventDetailPage;
