const sectionsData = [
    {
      title: "Early Bird Discount",
      color: "rgb(255, 99, 132)",
      id: "1",
      text: "Prize 1",
      prize: "20K Off on Certificate in Early Childhood Care training course",
      description: "Avail an early bird discount and save 20K on our premium training program."
    },
    {
      title: "Holiday Special Offer",
      color: "rgb(255, 205, 86)",
      id: "2",
      text: "Prize 2",
      prize: "Tuition fee and Study Material free",
      description: "Celebrate the holidays with free tuition fees and study materials for your course."
    },
    {
      title: "Special Offer",
      color: "rgb(75, 192, 192)",
      id: "3",
      text: "Prize 3",
      prize: "10K Off on all courses",
      description: "Grab a special offer and enjoy a flat 10K discount on all our courses."
    },
    {
      title: "Nothing",
      color: "rgb(153, 102, 255)",
      id: "4",
      text: "Prize 4",
      prize: "Better luck Next time",
      description: "Unfortunately, this time you missed out. But don’t give up!"
    },
    {
      title: "CNTT Course Discount",
      color: "rgb(255, 159, 64)",
      id: "5",
      text: "Prize 5",
      prize: "25K off on CNTT Course",
      description: "Save 25K on our CNTT Course and advance your career today."
    },
    {
      title: "ICCM Course Offer",
      color: "rgb(255, 182, 193)",
      id: "6",
      text: "Prize 6",
      prize: "7499Rs for ICCM Course",
      description: "Enroll in the ICCM Course for just Rs 7499 and gain valuable skills."
    },
    {
      title: "Guaranteed Job Offer",
      color: "rgb(34, 193, 195)",
      id: "7",
      text: "Prize 7",
      prize: "Certificate in early childhood care at just Rs 50K with guaranteed job",
      description: "Get a certified course in early childhood care for 50K, with a guaranteed job placement."
    }
  ];
  
  export default sectionsData;


export const getDataById = (id: string) => {
    return sectionsData.find((section) => section.id === id);
  };