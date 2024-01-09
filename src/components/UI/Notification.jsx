const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = "bg-red-800"; // Apply red background for error
  }
  if (props.status === "success") {
    specialClasses = "bg-cyan-500"; // Apply cyan background for success
  }

  const cssClasses = `w-full h-12 flex justify-between items-center px-10 text-white ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2 className="text-base m-0">{props.title}</h2>
      <p className="text-base m-0">{props.message}</p>
    </section>
  );
};

export default Notification;
