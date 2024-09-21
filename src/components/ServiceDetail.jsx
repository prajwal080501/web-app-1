const ServiceDetail = ({ service, onClose }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-orange-500">{service.title}</h2>
        <p className="mb-4 text-gray-300">{service.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30" alt="Event" className="rounded" />
          <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf" alt="Celebration" className="rounded" />
        </div>
      </div>
    );
  };

  export default ServiceDetail;