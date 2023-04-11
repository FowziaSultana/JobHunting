// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// use local storage to manage cart data
const addToDb = (id) => {
  let JobCart = getJobCart();
  // add quantity
  const quantity = JobCart[id];
  if (!quantity) {
    JobCart[id] = 1;
  } else {
    Swal.fire({
      icon: "error",
      title: "Sorry..",
      text: "You have already applied for this job!",
    });
  }
  localStorage.setItem("job-cart", JSON.stringify(JobCart));
};

const removeFromDb = (id) => {
  const JobCart = getJobCart();
  if (id in JobCart) {
    delete JobCart[id];
    localStorage.setItem("job-cart", JSON.stringify(JobCart));
  }
};

const getJobCart = () => {
  let JobCart = {};

  //get the job cart from local storage
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    JobCart = JSON.parse(storedCart);
  }
  return JobCart;
};

const deleteJobCart = () => {
  localStorage.removeItem("job-cart");
};

export { addToDb, removeFromDb, getJobCart, deleteJobCart };
