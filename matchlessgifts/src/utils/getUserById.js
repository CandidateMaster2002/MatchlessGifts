import axios from '/src/services/axios'

export 
const getUserById = (id) => {
   let user={};
    axios
      .get(`/users/getbyid/${id}`)
      .then((response) => {user=response.data})
      .catch((error) => {});
    return user;
  };