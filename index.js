let myElement = document.getElementById('userData');

setTimeout(() => {
  fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((data) => {
      const userData = document.getElementById('userData');
      data.data.forEach((user) => {
        const userCard = document.createElement('div');
        userCard.innerHTML = `
                    
                    <div class="user-details ">
                        <div>${user.id}</div>
                        <div>${user.first_name} ${user.last_name}</div>
                        <div>${user.email}</div>
                        <div><img src="${user.avatar}" alt="Avatar"></div>
                    </div>
                `;
        userData.appendChild(userCard);
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
}, '1000');

// --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
    hideLoader();
    showContent();
  }, 3000); // Replace with your actual data loading logic and time

  function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }

  function showContent() {
    const content = document.getElementById('content');
    content.style.display = 'block';
  }
});

// async function getUsersData() {
//   try {
//     const response = await fetch('https://reqres.in/api/users');
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// }
// getUsersData().then((data) => {
//   const userData = document.getElementById('userData');
//   data.data.forEach((user) => {
//     const userCard = document.createElement('div');
//     userCard.innerHTML = `

//                     <div class="user-details ">
//                         <div>${user.id}</div>
//                         <div>${user.first_name} ${user.last_name}</div>
//                         <div>${user.email}</div>
//                         <div><img src="${user.avatar}" alt="Avatar"></div>
//                     </div>
//                 `;
//     userData.appendChild(userCard);
//   });
// });

async function fetchData() {
  const response = await fetch('https://reqres.in/api/users');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

// async function displayUserData() {
//   let data = await fetchData();
//   data = data.data;
//   const userData = document.getElementById('userData');
//   data.forEach((user) => {
//     const userCard = document.createElement('div');
//     userCard.classList.add('user-details');
//     userCard.innerHTML = `
//             <div>${user.id}</div>
//             <div>${user.first_name} ${user.last_name}</div>
//             <div>${user.email}</div>
//             <div><img src="${user.avatar}" alt="Avatar"></div>
//         `;
//     userData.appendChild(userCard);
//   });
// }

// setTimeout(displayUserData, 1000);
