console.log("Order placed");
function orderProcess(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order proceed: ", orderId);
    });
    resolve();
  }, 1000);
}
function orderShipped() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Shipped");
    });
    resolve();
  }, 2000);
}
function orderDelivered() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Delivered");
    });
    resolve();
  }, 3000);
}
// orderProcess(123, () => {
//   orderShipped(() => {
//     orderDelivered(() => {
//       weathercondition(() => {
//         task2(() => {
//           task3(() => {
//             task4(() => {

//             })
//           })
//         })
//       })
//     });
//   });
// });
// orderProcess(123)
//   .then(() => orderShipped())
//   .then(() => orderDelivered())
//   .catch((error) => console.error(error));

async function fetchDetails(orderId) {
  try {
    await orderProcess(orderId);
    await orderShipped();
    await orderDelivered();
  } catch (error) {
    console.error(error);
  }
}
fetchDetails(123);
