const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center text-[40px] font-bold text-[#DC5F00]">
        About Us
      </h1>
      <div className="lg:w-[1300px] lg:h-[600px] h-[1000px]  mx-auto shadow-lg shadow-[#413F42] rounded-[30px] mb-[50px] flex lg:flex-row md:flex-col flex-col justify-center items-center gap-3">
          <div className="w-[400px]">
            {" "}
            <p className="font-bold">
              A to-do app is a digital haven where users sculpt their daily
              lives. Its interface, simple yet dynamic, hosts tasks awaiting
              attention. Users shape, edit, and refine tasks, with
              categorization and priority levels providing order. Collaboration
              thrives through shared lists, comments, and attachments.
              Navigation is intuitive, with sorting options and search functions
              streamlining organization. Synchronization ensures accessibility
              across devices, while customization adds a personal touch.
              Progress tracking, analytics, and reports offer insights,
              integrating with calendars and third-party apps for a unified
              experience. Notifications act as gentle nudges, and robust
              security safeguards user data. In essence, this app is a digital
              maestro harmonizing tasks, priorities, and collaboration into a
              seamless melody of productivity—a companion on the journey toward
              personal and professional achievement.
            </p>
          </div>
          <div>
            <img className="rounded-[80px]" src="https://i.ibb.co/G0ZwMm6/todoo.jpg" alt="" />
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
